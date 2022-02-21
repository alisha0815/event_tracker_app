const EventService = {
  async callEvents() {
    const response = await fetch(`http://localhost:8080/events`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    if (response.status !== 200) {
      throw new Error('error fetching data 💥');
    }
    return response.json();
  },

  async createEvent(title, date, venue) {
    const response = await fetch(`http://localhost:8080/events`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title: title, date: date, venue: venue }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  },
};

export default EventService;
