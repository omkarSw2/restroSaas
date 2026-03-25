import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  email: string;
  businessType: string;
  message: string;
  hotelName?: string;
  phone?: string;
  outlets?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  businessType: { type: String, required: true },
  message: { type: String, required: true },
  hotelName: { type: String, required: false },
  phone: { type: String, required: false },
  outlets: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
