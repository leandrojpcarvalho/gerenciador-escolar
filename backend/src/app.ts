import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/login', routes.login);

export default app;