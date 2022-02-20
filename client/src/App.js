import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import EventForm from './components/eventForm';

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
        title: 'Big storm in London',
        venue: 'Det går bra🚀🚀🤡',
        date: '2016-10-29T18:00:00.000Z',
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
    </>
  );
}

export default App;
