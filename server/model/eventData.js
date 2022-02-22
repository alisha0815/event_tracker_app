import Mongoose from "mongoose";
import { useVirtualId } from "../database/db.js";

// Schema
const eventSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

// Model
const Event = Mongoose.model("Event", eventSchema);

// get Events
export async function getAllEvents() {
  return Event.find();
}

//  post Event
export async function postOneEvent(title, venue, date) {
  return new Event({
    title,
    venue,
    date,
  }).save();
}

// delete Event
export async function removeOneEvent(id) {
  return Event.findByIdAndDelete(id);
}

// convert virtual id to string
useVirtualId(eventSchema);
