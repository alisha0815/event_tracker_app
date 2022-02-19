import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});
// const port = process.env.PORT || 8080;
const port = 8080;
app.listen(port, () => console.log(`server listening on ${port}`));
