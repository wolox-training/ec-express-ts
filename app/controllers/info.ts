import { Response, NextFunction, Request } from 'express';
import { getCardsInfo } from '../services/cards';

export function getInfo(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getCardsInfo()
    .then((info: string[]) => res.send(info))
    .catch(next);
}
