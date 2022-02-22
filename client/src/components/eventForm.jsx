import React from "react";
import EventService from "../service/eventService";
import EventList from "./eventList";

const EventForm = ({
  event,
  setEvent,
  events,
  setEvents,
  inputHandler,
  isLoading,
  setIsLoading,
}) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { title, date, venue } = e.target;
    const newEvent = await EventService.createEvent(
      title.value,
      date.value,
      venue.value
    );
    setEvents([newEvent, ...events]);
    setEvents([
      ...events
        .slice()
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
    ]);
    setIsLoading(false);
    setEvent({ title: "", date: "", venue: "" });
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
      <div>
        <EventList
          event={event}
          events={events}
          setEvents={setEvents}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default EventForm;
