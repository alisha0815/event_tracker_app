import Mongoose from 'mongoose';

// Schema
const eventSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});

// Model
const Event = Mongoose.model('Event', eventSchema);

// get Events
export async function getAllEvents() {
  return Event.find();
}

//  post Event
export async function postOneEvent(event) {
  return new Event(event).save().then((data) => console.log(data));
}
