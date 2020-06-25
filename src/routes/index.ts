import { Router } from 'express';
import mailRouter from './mail.routes';

const routes = Router();

routes.use('/mail', mailRouter);
routes.get('/', (req, res) => res.json({ working: true }));

export default routes;
