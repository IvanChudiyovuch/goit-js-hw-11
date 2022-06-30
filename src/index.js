import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
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

new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function onFormSubmitClick(event) {
  event.preventDefault();

  imageApiService.searchQuery = event.currentTarget.elements.searchQuery.value;
  imageApiService.resetPage();

  imageApiService.fetchGallery().then(hits => {
    clearHitsContainer();
    appendHitsMarkup(hits);
  });

  refs.loadMoreBtn.classList.remove('visually-hidden');
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
