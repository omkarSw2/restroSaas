import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  hotelName: string;
  email: string;
  phone: string;
  outlets: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  fullName: { type: String, required: true },
  hotelName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  outlets: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
