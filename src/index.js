import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImageApiService from './image-service';
import { makeGalleryMarkup } from './makeGalleryMarkup';
import axios from 'axios';

const refs = {
  form: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  makeMarkup: document.querySelector('.gallery'),
};

const imageApiService = new ImageApiService();

refs.form.addEventListener('submit', onFormSubmitClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onFormSubmitClick(event) {
  event.preventDefault();

  imageApiService.searchQuery =
    event.currentTarget.elements.searchQuery.value.trim();

  event.currentTarget.reset();
  imageApiService.resetPage();
  try {
    const { hits, totalHits } = await imageApiService.fetchGallery();

    if (hits.length === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    clearHitsContainer();
    appendHitsMarkup(hits);
    refs.loadMoreBtn.classList.remove('visually-hidden');

    console.log(hits);
  } catch (error) {
    console.log(error.massage);
  }
}

async function onLoadMoreBtnClick() {
  try {
    const { hits, totalHits } = await imageApiService.fetchGallery();
    appendHitsMarkup(hits);

    if (totalHits === 0) {
      refs.loadMoreBtn.classList.add('visually-hidden');
      return Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.log(error.massage);
  }
}

function appendHitsMarkup(hits) {
  refs.makeMarkup.insertAdjacentHTML('beforeend', makeGalleryMarkup(hits));

  new SimpleLightbox('.photo-card a', {
    captionDelay: 250,
    captionPosition: 'bottom',
  });
}

function clearHitsContainer() {
  refs.makeMarkup.innerHTML = '';
}
