export const makeGalleryMarkup = hits => {
  return hits
    .map(hits => {
      return `
      <div class="photo-card">
        <a href="${hits.largeImageURL}">
          <img src="${hits.webformatURL}" alt="${hits.tags}" loading="lazy" width="240" height="240"/>
        </a>
        
        <div class="info">
              <div class="info-wraper">
                <p class="info-item">Likes
                  <b>${hits.likes}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Views
                  <b>${hits.views}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Comments
                  <b>${hits.comments}</b>
                </p>
              </div>
              <div class="info-wraper">
                <p class="info-item">Downloads
                  <b>${hits.downloads}</b>
                </p>
              </div>
            </div>
      </div>
    `;
    })
    .join();
};
