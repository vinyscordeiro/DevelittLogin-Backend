import express, { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
routes.use(express.json());

routes.use('/user', usersRouter );
routes.use('/sessions', sessionsRouter );

export default routes;
