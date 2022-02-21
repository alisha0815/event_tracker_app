const baseURL = 'http://localhost:8080';

export default class EventService {
  async getEvents() {
    const response = await fetch(`${baseURL}/events`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
  }

  async postEvent(title, date, venue) {
    const response = await fetch(`${baseURL}/events`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title: title, date: date, venue: venue }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  }
}
