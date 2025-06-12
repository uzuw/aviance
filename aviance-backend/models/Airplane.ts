import mongoose, { Document, Schema } from 'mongoose';

export interface IAirplane extends Document {
  title: string;
  description: string;
  price: number;
  manufacturer: string;
  aircraftModel: string; 
  year: number;
  engineType: string;
  hoursFlown: number;
  seller: mongoose.Types.ObjectId;
  images: string[];
}

const airplaneSchema = new Schema<IAirplane>({
  title: { type: String, required: true },
  aircraftModel: { type: String, required: true },
  engineType: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  manufacturer: { type: String, required: true },
  hoursFlown: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});


const Airplane = mongoose.model<IAirplane>('Airplane', airplaneSchema);
export default Airplane;
