import express from 'express';
import { getAllEvents, postOneEvent } from '../model/eventData.js';

export async function getEvents(req, res) {
  const event = await getAllEvents();
  console.log(event);
  res.status(200).json(event);
}

export async function postEvent(req, res) {
  const { title, venue, date } = req.body;
  const newEvent = await postOneEvent(title, venue, date);
  res.status(201).json(newEvent);
}
