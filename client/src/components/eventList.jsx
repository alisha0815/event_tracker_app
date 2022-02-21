import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event</h2>
      <ul>
        {events.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.date}</p>
            <p>{item.venue}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
