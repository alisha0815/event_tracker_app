import express from 'express';

export function getEvents(req, res) {
  const event = { title: 'alisha', venue: 'hey', date: Date.now() };
  res.status(200).json(event);
}

export function postEvent(req, res) {
  const { title, venue, date } = req.body;
  const newEvent = {
    title,
    venue,
    date,
  };
  res.status(201).json(newEvent);
}

// export function postEvents(req, res) {
//   const newEvent = req.body;
//   res.status(201).json({ newEvent });
// }
