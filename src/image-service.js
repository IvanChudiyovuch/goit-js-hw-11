import axios from 'axios';

export default class ImageApiService {
  constructor() {
    this.galerryImage = '';
    this.page = 1;
  }

  fetchGallery() {
    const userImageURL = 'https://pixabay.com/api/';
    const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

    return axios
      .get(
        `${userImageURL}?key=${API_KEY}&q=
      ${this.galerryImage}&image_type=photo&
      orientation=horizontal&safesearch=true&
      page=${this.page}&per_page=40`
      )
      .then(data => {
        this.page += 1;
        console.log(data.data.hits);
        return data.data.hits;
      });
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

// export default class ImageApiService {
//   constructor() {
//     this.galerryImage = '';
//     this.page = 1;
//   }

//   fetchGallery() {
//     console.log(this);

//     const userImageURL = 'https://pixabay.com/api/';
//     const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

//     return fetch(
//       `${userImageURL}?key=${API_KEY}&q=
//       ${this.galerryImage}&image_type=photo&
//       orientation=horizontal&safesearch=true&
//       page=${this.page}&per_page=40`
//     )
//       .then(respons => {
//         if (!respons.ok) {
//           throw new Error(respons.statusText);
//         }
//         return respons.json();
//       })
//       .then(({ hits }) => {
//         this.page += 1;

//         return hits;
//       });
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get searchQuery() {
//     return this.galerryImage;
//   }

//   set searchQuery(newSearchQuery) {
//     this.galerryImage = newSearchQuery;
//   }
// }
