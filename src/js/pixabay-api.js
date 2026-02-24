import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const apiKey = '54780926-f74047f8bb106b77773b760bb';

export function getImagesByQuery(query) {
  return axios
    .get(baseURL, {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
