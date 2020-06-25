import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}assets`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use(express.json());
app.use(routes);

export default app;
