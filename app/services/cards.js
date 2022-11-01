import axios from 'axios';
import { options } from '../constants/api-constants';

const cardsInfo = axios.create(options);

export async function getCardsInfo(){
  const response = await cardsInfo.get('/info');
  return response.data;
}

export async function getAllCards(){
  const response = await cardsInfo.get('/cards');
  return response.data;
}

export default {
  getCardsInfo,
  getAllCards
};
