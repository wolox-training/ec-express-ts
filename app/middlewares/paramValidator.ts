import { Response, NextFunction, Request } from 'express';
import { validationResult, check } from 'express-validator';

export async function paramValidator(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<object | void> {
  await check('email')
    .isEmail()
    .withMessage('Email debe ser del dominio Wolox')
    .contains('wolox')
    .run(req);
  await check('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe ser de mas de 8 caracteres')
    .run(req);
  await check('firstName')
    .isLength({ min: 2 })
    .withMessage('Ingrese un nombre de mas de 2 caracteres')
    .run(req);
  await check('lastName')
    .isLength({ min: 2 })
    .withMessage('Ingrese un apellido de mas de 2 caracteres')
    .run(req);
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  } catch (error) {
    throw error;
  }
}
