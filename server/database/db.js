import Mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DB_MOMGO_HOST } = process.env;

export async function connectDB() {
  return new Mongoose.connect(DB_MOMGO_HOST);
}
