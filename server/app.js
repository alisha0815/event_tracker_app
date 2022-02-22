import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import eventsRouter from './router/eventsRouter.js';
import { connectDB } from './database/db.js';

dotenv.config();

const app = express();

// req.body를 읽기 위해서 json으로 파싱해주는 미들웨어 연결
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/events', eventsRouter);
// app.post('/', eventsRouter);
// const port = process.env.PORT || 8080;

// error handling
//잘못된 경로로 들어갔을때 에러 처리 *404
app.use((req, res, next) => {
  res.status(404).send({ message: 'pile path is not correct' });
});

//에러가 있을시 에러 처리 *처리코드 500
app.use((err, req, res, next) => {
  console.error(error);
  res.status(500);
});
const port = 8080;

connectDB()
  .then(() => {
    console.log('init yayyyy');
    app.listen(port, () => console.log('server running on 8080'));
  })
  .catch(console.error);
