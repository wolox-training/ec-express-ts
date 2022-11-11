import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import bcrypt from 'bcryptjs';

import userService from '../services/users';
import { User } from '../models/user';
import { notFoundError } from '../errors';

export function getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return userService
    .findAll()
    .then((users: User[]) => res.send(users))
    .catch(next);
}

export function createUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const cryptPassword = bcrypt.hashSync(req.body.password, Number(10));
  return userService
    .createAndSave({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: cryptPassword
    } as User)
    .then((user: User) => res.status(HttpStatus.CREATED).send({ user }))
    .catch(next);
}

export function getUserById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return userService
    .findUser({ id: parseInt(req.params.id) })
    .then((user: User) => {
      if (!user) {
        throw notFoundError('User not found');
      }
      return res.send(user);
    })
    .catch(next);
}
