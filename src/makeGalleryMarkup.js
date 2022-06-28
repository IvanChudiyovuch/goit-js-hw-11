export const makeGalleryMarkup = hits => {
  return hits
    .map(hits => {
      return `
    <div class="photo-card">
        <img src="${hits.previewURL}" alt="${hits.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes:${hits.likes}</b>
          </p>
          <p class="info-item">
            <b>Views:${hits.views}</b>
          </p>
          <p class="info-item">
            <b>Comments:${hits.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads:${hits.downloads}</b>
          </p>
        </div>
      </div>
    `;
    })
    .join();
};
