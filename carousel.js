var carousel = document.querySelector('.carousel');
var images = carousel.querySelectorAll('img');
var currentImage = 0;

function showImage(image) {
  images.forEach(function(image) {
    image.style.display = "none";
  });

  images[image].style.display = "block";
}

function nextImage() {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  showImage(currentImage);
}

function prevImage() {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  showImage(currentImage);
}

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);