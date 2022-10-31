import axios from 'axios';

export async function getAllCards() {
  try {
    const options = {
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
      headers: {
        'X-RapidAPI-Key': '63b0a84fe4msh3b616677ff69940p16f35ajsn1780a62f489f',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };
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
    const options = {
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
      headers: {
        'X-RapidAPI-Key': '63b0a84fe4msh3b616677ff69940p16f35ajsn1780a62f489f',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };
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
