import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

//Routes

import player_config from './routes/player_config';

const app = express();

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use(player_config);

export default app;