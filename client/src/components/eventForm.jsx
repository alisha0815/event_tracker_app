import React from 'react';

const EventForm = ({ event, setEvent, events, setEvents, inputHandler }) => {
  return (
    <>
      <h2>Create new event</h2>
      <form>
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
          type="text"
          value={event.date}
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
