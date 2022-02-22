import {
  getAllEvents,
  postOneEvent,
  removeOneEvent,
} from "../model/eventData.js";

export async function getEvents(req, res) {
  const event = await getAllEvents();
  res.status(200).json(event);
}

export async function postEvent(req, res) {
  try {
    const { title, venue, date } = req.body;
    const newEvent = await postOneEvent(title, venue, date);
    res.status(201).json(newEvent);
  } catch (error) {
    if (!req.body.title || !req.body.date || !req.body.venue) {
      res.status(404).send({ message: "input field is missing" });
    }
  }
}

export async function deleteEvent(req, res) {
  const id = req.params.id;
  console.log(req.params.id);
  await removeOneEvent(id);
  res.sendStatus(204);
}
