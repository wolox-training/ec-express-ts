import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getUsers, getUserById, createUser } from './controllers/users';
import { getTodos } from './controllers/todos';
import { paramValidator } from './middlewares/paramValidator';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/users', getUsers);
  app.post('/users', [paramValidator], createUser);
  app.get('/users/:id', getUserById);
  app.get('/todos', getTodos);
};
