export const makeGalleryMarkup = hits => {
  return hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" width="240" height="240"/>
        </a>
        
        <div class="info">
              <div class="info-wraper">
                <p class="info-item">Likes
                  <b>${likes}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Views
                  <b>${views}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Comments
                  <b>${comments}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Downloads
                  <b>${downloads}</b>
                </p>
              </div>
            </div>
      </div>
    `;
      }
    )
    .join();
};
