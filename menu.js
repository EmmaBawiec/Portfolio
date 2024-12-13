document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox-overlay');
  document.body.appendChild(lightbox);

  const lightboxImg = document.createElement('img');
  lightboxImg.id = 'lightbox-image';
  lightbox.appendChild(lightboxImg);

  const caption = document.createElement('div');
  caption.id = 'caption';
  lightbox.appendChild(caption);

  const images = document.querySelectorAll('.gallery-container img');

  // Event listener to open the lightbox
  images.forEach((image) => {
    image.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      lightboxImg.src = image.src;
      caption.textContent = image.alt;
    });
  });

  // Event listener to close the lightbox
  lightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
});
