import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input');

form.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Поле не може бути порожнім. Введіть запит для пошуку.',
      position: 'topRight',
    });
    return;
  }

  clearGallery(); // очищаємо галерею перед новим пошуком
  showLoader(); // показуємо лоадер

  getImagesByQuery(query)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      console.log(`Знайдено ${images.length} зображень`);
      createGallery(images); // рендеримо нові картки
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Сталася помилка при завантаженні зображень.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader(); // завжди ховаємо лоадер
      input.value = ''; // очищаємо поле вводу
    });
}
