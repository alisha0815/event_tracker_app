import React from 'react';
import EventList from './eventList';

const EventForm = ({ event, setEvent, events, setEvents, inputHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const { title, date, venue } = e.target;
    setEvents([
      { title: title.value, date: date.value, venue: venue.value },
      ...events,
    ]);
    setEvent({ title: '', date: '', venue: '' });
    console.log('events====>', events);
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
          type="text"
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
