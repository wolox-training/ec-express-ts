import { Response, NextFunction, Request } from 'express';
import { getAllCards } from '../services/cards';

export function getCards(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return getAllCards()
    .then((cards: string[]) => res.send(cards))
    .catch(next);
}
