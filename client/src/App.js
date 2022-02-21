import { useEffect, useState } from 'react';

// import styled from 'styled-components';
import EventForm from './components/eventForm';
import EventList from './components/eventList';
import EventService from './service/eventService';

function App() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    venue: '',
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventService.callEvents()
      .then((events) => setEvents([...events]))
      .catch((err) => console.err(err));
  }, []);

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
      <EventList event={event} events={events} />
    </>
  );
}

export default App;
