import express from "express";
import {
  deleteEvent,
  getEvents,
  postEvent,
} from "../controller/eventsController.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getEvents);
eventsRouter.post("/", postEvent);
eventsRouter.delete("/:id", deleteEvent);
// eventsRouter.post('/', postEvents);

export default eventsRouter;
