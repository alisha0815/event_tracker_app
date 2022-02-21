import { useEffect, useState } from 'react';

// import styled from 'styled-components';
import EventForm from './components/eventForm';
import EventService from './service/eventService';

function App() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    venue: '',
  });

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    EventService.callEvents()
      .then((events) =>
        setEvents([
          ...events
            .slice()
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            ),
        ])
      )
      .catch((err) => console.error(err));
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
      <div>
        <EventForm
          event={event}
          setEvent={setEvent}
          events={events}
          setEvents={setEvents}
          inputHandler={inputHandler}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
}

export default App;
