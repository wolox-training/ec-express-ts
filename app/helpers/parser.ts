import bcrypt from 'bcryptjs';
import logger from '../logger';
import { DEFAULT_ERROR } from '../errors';

export async function passwordParser(password: string): Promise<string> {
  try {
    return await bcrypt.hashSync(password, Number(process.env.AUTH_ROUNDS));
  } catch (error) {
    logger.error(error);
    throw DEFAULT_ERROR;
  }
}

export default {
  passwordParser
};
