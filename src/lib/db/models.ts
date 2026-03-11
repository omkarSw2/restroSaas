import mongoose, { Schema, Document, Model } from 'mongoose';

// --- Interfaces ---

export interface IRestaurant extends Document {
  name: string;
  address?: string;
  contact_number?: string;
  createdAt: Date;
}

export interface ITable extends Document {
  restaurant_id: mongoose.Types.ObjectId;
  table_number: string;
  capacity?: number;
  status: 'available' | 'occupied' | 'reserved';
  qr_code_url?: string;
  createdAt: Date;
}

export interface IMenuItem extends Document {
  restaurant_id: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image_url?: string;
  is_available: boolean;
  createdAt: Date;
}

export interface IOrder extends Document {
  restaurant_id: mongoose.Types.ObjectId;
  table_id: mongoose.Types.ObjectId;
  status: 'open' | 'completed' | 'cancelled';
  total_amount: number;
  payment_status: 'pending' | 'paid' | 'partial' | 'failed';
  guest_count: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderItem extends Document {
  order_id: mongoose.Types.ObjectId;
  menu_item_id: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  notes?: string;
  status: 'ordered' | 'preparing' | 'ready' | 'served' | 'cancelled';
  createdAt: Date;
}

// --- Schemas ---

const RestaurantSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  contact_number: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const TableSchema: Schema = new Schema({
  restaurant_id: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  table_number: { type: String, required: true },
  capacity: { type: Number },
  status: { type: String, enum: ['available', 'occupied', 'reserved'], default: 'available' },
  qr_code_url: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const MenuItemSchema: Schema = new Schema({
  restaurant_id: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  image_url: { type: String },
  is_available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const OrderSchema: Schema = new Schema({
  restaurant_id: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  table_id: { type: Schema.Types.ObjectId, ref: 'Table' },
  status: { type: String, enum: ['open', 'completed', 'cancelled'], default: 'open' },
  total_amount: { type: Number, default: 0.00 },
  payment_status: { type: String, enum: ['pending', 'paid', 'partial', 'failed'], default: 'pending' },
  guest_count: { type: Number, default: 1 },
  notes: { type: String },
}, { timestamps: true });

const OrderItemSchema: Schema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  menu_item_id: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, default: 1 },
  price: { type: Number, required: true },
  notes: { type: String },
  status: { type: String, enum: ['ordered', 'preparing', 'ready', 'served', 'cancelled'], default: 'ordered' },
  createdAt: { type: Date, default: Date.now },
});

// --- Models ---

// Prevent OverwriteModelError
export const Restaurant: Model<IRestaurant> = mongoose.models.Restaurant || mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
export const Table: Model<ITable> = mongoose.models.Table || mongoose.model<ITable>('Table', TableSchema);
export const MenuItem: Model<IMenuItem> = mongoose.models.MenuItem || mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);
export const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
export const OrderItem: Model<IOrderItem> = mongoose.models.OrderItem || mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);
