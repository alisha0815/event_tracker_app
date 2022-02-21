import React from 'react';

const EventList = ({ events, isLoading }) => {
  // const upcomingEvent = events.reduce(
  //   (a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? b : a),
  //   Date.now()
  // );

  const upcomingEvent = events.find(
    (eventItem) =>
      new Date(eventItem.date).getTime() >= Date.now() &&
      Math.min(new Date(eventItem.date).getTime())
  );

  console.log('upcoming event==>', upcomingEvent);

  return (
    <div>
      <h2>Event</h2>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        events.length !== 0 && (
          <div className="nextEvent">
            <h2>Next Event</h2>
            <ul>
              <li>{upcomingEvent.title}</li>
              <li>{upcomingEvent.date}</li>
              <li>{upcomingEvent.venue}</li>
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default EventList;
