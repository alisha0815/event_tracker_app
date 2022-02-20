import { useState } from 'react';
import styled from 'styled-components';
import EventForm from './components/eventForm';

function App() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    venue: '',
  });

  const [events, setEvents] = useState([]);

  const inputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEvent({
      ...event,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <nav>Codeworks Evening</nav>
      <EventForm
        event={event}
        setEvent={setEvent}
        events={events}
        setEvents={setEvents}
        inputHandler={inputHandler}
      />
    </>
  );
}

export default App;
