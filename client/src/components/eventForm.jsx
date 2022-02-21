import React from 'react';
import EventService from '../service/eventService';

const EventForm = ({ event, setEvent, events, setEvents, inputHandler }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const { title, date, venue } = e.target;
    const newEvent = await EventService.createEvent(
      title.value,
      date.value,
      venue.value
    );
    setEvents([newEvent, ...events]);
    setEvent({ title: '', date: '', venue: '' });
  };

  return (
    <>
      <h2>Create new event</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={event.title}
          onChange={inputHandler}
        />
        <label htmlFor="date">date</label>
        <input
          name="date"
          type="datetime-local"
          value={event.date || Date.now()}
          onChange={inputHandler}
        />

        <label htmlFor="venue">venue</label>
        <input
          name="venue"
          type="text"
          value={event.venue}
          onChange={inputHandler}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default EventForm;
