import express from 'express';
import { getEvents, postEvent } from '../controller/eventsController.js';

const eventsRouter = express.Router();

eventsRouter.get('/', getEvents);
eventsRouter.post('/', postEvent);
// eventsRouter.post('/', postEvents);

export default eventsRouter;
