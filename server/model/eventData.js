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
export async function postOneEvent(title, venue, date) {
  return new Event({
    title,
    venue,
    date,
  })
    .save()
    .then((data) => console.log('post data===>', data));
}
