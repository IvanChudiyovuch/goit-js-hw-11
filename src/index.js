import Notiflix from 'notiflix';
import ImageApiService from './image-service';
import { makeGalleryMarkup } from './makeGalleryMarkup';

const refs = {
  form: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  makeMarkup: document.querySelector('.gallery'),
};

const imageApiService = new ImageApiService();

refs.form.addEventListener('submit', onFormSubmitClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onFormSubmitClick(event) {
  event.preventDefault();

  imageApiService.searchQuery = event.currentTarget.elements.searchQuery.value;
  imageApiService.resetPage();

  imageApiService.fetchGallery().then(hits => {
    clearHitsContainer();
    appendHitsMarkup(hits);
  });
}

function onLoadMoreBtnClick(event) {
  imageApiService.fetchGallery().then(appendHitsMarkup);
}

function appendHitsMarkup(hits) {
  refs.makeMarkup.insertAdjacentHTML('beforeend', makeGalleryMarkup(hits));
}

function clearHitsContainer() {
  refs.makeMarkup.innerHTML = '';
}
