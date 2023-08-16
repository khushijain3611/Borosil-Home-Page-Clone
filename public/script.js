
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var carouselIndex = 0;
var carouselImages = document.querySelectorAll('.carousel img');
var carouselIndicators = document.querySelectorAll('.carousel-indicators button');
var carouselArrows = document.querySelectorAll('.carousel .arrow');

function showCarouselImage(index) {
    for (var i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = 'none';
        carouselIndicators[i].classList.remove('active');
    }

    carouselImages[index].style.display = 'block';
    carouselIndicators[index].classList.add('active');
}

function navigateCarousel(direction) {
    carouselIndex += direction;
    if (carouselIndex < 0) {
        carouselIndex = carouselImages.length - 1;
    } else if (carouselIndex >= carouselImages.length) {
        carouselIndex = 0;
    }
    showCarouselImage(carouselIndex);
}

function cycleCarouselImages() {
    navigateCarousel(1);
}

var carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', function() {
    for (var i = 0; i < carouselArrows.length; i++) {
        carouselArrows[i].style.opacity = 1;
    }
});

carousel.addEventListener('mouseleave', function() {
    for (var i = 0; i < carouselArrows.length; i++) {
        carouselArrows[i].style.opacity = 0;
    }
});

setInterval(cycleCarouselImages, 3000);