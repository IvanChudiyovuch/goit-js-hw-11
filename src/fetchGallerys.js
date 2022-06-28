export const fetchGallery = galerryImage => {
  const userImageURL = 'https://pixabay.com/api/';
  const API_KEY = '28317670-7d33057fc4b50d7a50d831995';

  return fetch(
    `${userImageURL}?key=${API_KEY}&q=${galerryImage}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
  ).then(respons => {
    if (!respons.ok) {
      throw new Error(respons.statusText);
    }
    return respons.json();
  });
};
