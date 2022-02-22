import React from "react";
import EventService from "../service/eventService";

const EventList = ({ events, isLoading, setEvents }) => {
  const upcomingEvent = events.find(
    (eventItem) =>
      new Date(eventItem.date).getTime() >= Date.now() &&
      Math.min(new Date(eventItem.date).getTime())
  );

  const theRestEvents = [...events].filter(
    (eventItem) => eventItem !== upcomingEvent
  );

  const deleteHandler = (id) => {
    EventService.deleteEvent(id).then(() =>
      setEvents(events.filter((eventItem) => eventItem.id !== id))
    );
  };

  return (
    <div>
      <h2>Event</h2>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        events.length !== 0 && (
          <>
            <div className="nextEvent">
              <h2>Next Event</h2>
              <ul>
                <li>{upcomingEvent.title}</li>
                <li>{upcomingEvent.date}</li>
                <li>{upcomingEvent.venue}</li>
                <button onClick={() => deleteHandler(upcomingEvent.id)}>
                  Delete
                </button>
              </ul>
            </div>
            <div className="event-list">
              <h2>Event List</h2>
              {theRestEvents.map((evenItem) => (
                <ul key={evenItem.id}>
                  <li>{evenItem.title}</li>
                  <li>{evenItem.date}</li>
                  <li>{evenItem.venue}</li>
                  <button
                    data-confirm="Are you sure to delete this item?"
                    onClick={() => deleteHandler(evenItem.id)}
                  >
                    Delete
                  </button>
                </ul>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default EventList;
