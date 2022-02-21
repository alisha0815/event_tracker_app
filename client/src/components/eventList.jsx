import React from 'react';

const EventList = ({ events, isLoading }) => {
  const upcomingEvent = events.find(
    (eventItem) =>
      new Date(eventItem.date).getTime() >= Date.now() &&
      Math.min(new Date(eventItem.date).getTime())
  );

  const theRestEvents = [...events].filter(
    (eventItem) => eventItem !== upcomingEvent
  );

  console.log({ upcomingEvent, theRestEvents, events });

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
              </ul>
            </div>
            <div className="event-list">
              <h2>Event List</h2>
              {theRestEvents.map((evenItem) => (
                <ul key={evenItem.id}>
                  <li>{evenItem.title}</li>
                  <li>{evenItem.date}</li>
                  <li>{evenItem.venue}</li>
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
