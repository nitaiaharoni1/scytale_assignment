import express, { Application, Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import { prRoutes } from './routes/pullRequestsRoutes';
import { DB_CONNECTION } from './consts';

mongoose.connect(DB_CONNECTION);
const app: Application = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/prs', prRoutes);

app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../../client/dist', 'index.html')));

app.listen(process.env.PORT || 5000, () => console.log('Server running!'));