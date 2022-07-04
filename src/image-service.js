import axios from 'axios';

export default class ImageApiService {
  constructor() {
    this.galerryImage = '';
    this.page = 1;
  }

  async fetchGallery() {
    const userImageURL = 'https://pixabay.com/api/';
    const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

    const { data } = await axios.get(
      `${userImageURL}?key=${API_KEY}&q=
      ${this.galerryImage}&image_type=photo&
      orientation=horizontal&safesearch=true&
      page=${this.page}&per_page=40`
    );
    this.page += 1;
    return data;
  }

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.galerryImage;
  }

  set searchQuery(newSearchQuery) {
    this.galerryImage = newSearchQuery;
  }
}
