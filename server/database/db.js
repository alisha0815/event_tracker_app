import Mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// const { DB_MONGO_HOST } = process.env;
const DB_MONGO_HOST =
  'mongodb+srv://event-tracker:1lg9FWCwdbLCPCwf@cluster0.viyed.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityretryWrites=true&w=majorityretryWrites=true&w=majority';
export async function connectDB() {
  return new Mongoose.connect(DB_MONGO_HOST); //
}
