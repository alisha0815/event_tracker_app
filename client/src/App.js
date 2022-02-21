import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import EventForm from './components/eventForm';
import EventList from './components/eventList';

function App() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    venue: '',
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/events', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: 'another try',
        venue: 'Det går bra🚀🚀🤡',
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch((e) => console.log(e));
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
