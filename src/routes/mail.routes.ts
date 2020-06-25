import { Router } from 'express';
import Mail from '../app/services/Mail';

const mailRouter = Router();

mailRouter.post('/contact', async (req, res) => {
    try {
        const mailer = new Mail();

        const work = await mailer.send(req.body);

        return res.json(work);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default mailRouter;
