import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();

  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      class: 'my-toast',
      title: '',
      timeout: 10000,
      message: 'Будь ласка, введіть пошуковий запит!',
      theme: 'dark',
      position: 'topRight',
      backgroundColor: 'red',
    });

    return;
  }
  showLoader();
  getImagesByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          class: 'my-toast',
          title: '',
          timeout: 10000,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          position: 'topRight',
          backgroundColor: 'red',
        });

        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        class: 'my-toast',
        title: '',
        timeout: 10000,
        message: 'An error occurred during the request.!',
        theme: 'dark',
        position: 'topRight',
        backgroundColor: 'red',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
