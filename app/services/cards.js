import axios from 'axios';
import { options } from '../constants/api-constants';

export async function getAllCards() {
  try {
    options.url = options.url + '/cards';
    console.log(options.url)
    await axios.request(options).then(function (response) {
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    console.log(error)
    return;
  }
};

export async function getCardsInfo() {
  try {
    options.url = options.url + '/info';
    console.log(options.url)
    await axios.request(options).then(function (response) {
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    console.log(error)
    return;
  }
};
