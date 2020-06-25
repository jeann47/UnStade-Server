/* eslint-disable no-console */
import App from './App';
import 'dotenv/config';

App.listen(process.env.PORT, () =>
    console.log(`working at ${process.env.PORT}`),
);
