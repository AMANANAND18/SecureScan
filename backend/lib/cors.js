import Cors from 'cors';
import initMiddleware from './initMiddleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true,
  })
);

export default cors;
