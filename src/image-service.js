import axios from 'axios';

const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class ImageApiService {
  constructor() {
    this.galerryImage = '';
    this.page = 1;
  }

  async fetchGallery() {
    const params = new URLSearchParams({
      key: API_KEY,
      q: `${this.galerryImage}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${this.page}`,
      per_page: 40,
    });
    const { data } = await axios.get(`?${params}`);
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
