import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3333;

app.use(cors({
    origin: process.env.SITE_ORIGIN
}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('HTTP Server running on port ' + PORT);
});