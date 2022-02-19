import express from 'express';
import { postOneEvent } from '../model/eventData.js';

export function getEvents(req, res) {
  const event = { title: 'alisha', venue: 'hey', date: Date.now() };
  res.status(200).json(event);
}

export async function postEvent(req, res) {
  const { title, venue, date } = req.body;
  const newEvent = await postOneEvent(title, venue, date);
  res.status(201).json(newEvent);
}
