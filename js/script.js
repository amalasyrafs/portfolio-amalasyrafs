var navBarNav = document.getElementById('navbarNav');
var navBarList = document.getElementById('menu-list');
var navbarBrand = document.getElementById('navbarBrand');
var menuImg = document.getElementById('menuImage');
var contentHolder = document.getElementById('content-holder');

var navLink = document.querySelectorAll('.nav-link');
var mainBanner = document.getElementById('main-banner');
var aboutSection = document.getElementById('about-section');
console.log(aboutSection);
var skillSection = document.getElementById('skill-section');
var portfolioSection = document.getElementById('portfolio-section');
var contactSection = document.getElementById('contact-section');
var movingLine = document.getElementById('moving-line');
var iteration = 1;

var isMenuActive = false;
var isScrolling = false;

var movingBox = {
  posX: 65,
  posY: 15,
};

setTimeout(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}, 10);

const navBrandOnMouseOver = (x) => {
  x.src = 'images/handsupface.PNG';
};

const navBrandOnMouseOut = (x) => {
  x.src = 'images/winkface.PNG';
};

function toggleMenu() {
  if (isMenuActive) {
    navBarList.classList.remove('animate__fadeInRight');
    navBarList.classList.add('animate__animated', 'animate__fadeOutRight');
    menuImg.classList.remove('animate__animated', 'animate__fadeInTopRight');
    menuImg.classList.add('animate__animated', 'animate__fadeOutTopRight');
    setTimeout(() => {
      navBarNav.style.display = 'none';
      navbarBrand.style.display = 'block';
    }, 750);
    document.querySelector('body').style.overflow = 'visible';
    document.querySelector('html').style.overflow = 'visible';
    isMenuActive = false;
    return;
  } else {
    navBarNav.style.display = 'flex';
    navBarList.classList.remove('animate__fadeOutRight');
    navBarList.classList.add('animate__animated', 'animate__fadeInRight');
    menuImg.classList.remove('animate__animated', 'animate__fadeOutTopRight');
    menuImg.classList.add('animate__animated', 'animate__fadeInTopRight');
    navbarBrand.style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
    isMenuActive = true;
    return;
  }
}

scrollStop(() => {
  navbarBrand.style.opacity = '1';
});

function scrollStop(callback, refresh = 100) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function (event) {
      navbarBrand.style.opacity = '0';
      navbarBrand.style.transition = 'all 500ms';

      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
}

window.addEventListener('scroll', onScroll);

function onScroll(event) {
  if (
    window.scrollY + 80 >= aboutSection.offsetTop &&
    window.scrollY + 65 < aboutSection.offsetTop + aboutSection.clientHeight
  ) {
    navLink.forEach((list) => {
      list.style.color = 'var(--secondary-color)';
    });
  } 
  else if (
    window.scrollY + 80 >= portfolioSection.offsetTop &&
    window.scrollY + 65 < portfolioSection.offsetTop + portfolioSection.clientHeight
  ) {
    navLink.forEach((list) => {
      list.style.color = 'var(--secondary-color)';
    });
  } else {
    navLink.forEach((list) => {
      list.style.color = 'black';
    });
  }
}

var movingLineInterval = setInterval(moveLine, 20);

function moveLine() {
  var x = 5;
  var y = 5;

  if (iteration === 1) {
    movingBox.posX += x;
    movingLine.style.left = `${movingBox.posX}px`;
    console.log('here1');
    if (movingBox.posX >= mainBanner.clientWidth - 115) {
      clearInterval(movingLineInterval);
      iteration++;
      movingLine.style.transition = `all 100ms`;
      movingLine.style.width = `5px`;
      movingLine.style.height = `2px`;
      movingLine.style.left = `${movingBox.posX + 95}px`;
      setTimeout(() => {
        movingLine.style.width = `2px`;
        movingLine.style.height = `100px`;
        movingLineInterval = setInterval(moveLine, 20);
      }, 100);
    }
    // return
  }

  if (iteration === 2) {
    console.log('here2');
    movingBox.posY += y;
    movingLine.style.top = `${movingBox.posY}px`;
    if (movingBox.posY >= mainBanner.clientHeight - 45) {
      clearInterval(movingLineInterval);
      iteration++;
      movingLine.style.transition = `all 100ms`;
      movingLine.style.width = `5px`;
      movingLine.style.height = `2px`;
      movingLine.style.top = `${movingBox.posY + 25}px`;
      movingLine.style.left = `${movingBox.posX - 35}px`;
      setTimeout(() => {
        movingLine.style.width = `100px`;
        movingLine.style.height = `2px`;
        movingLineInterval = setInterval(moveLine, 20);
      }, 100);
    }
      // return;
  }
  if (iteration === 3) {
    console.log('here3');
    movingBox.posX -= x;
    movingLine.style.left = `${movingBox.posX}px`;
    if (movingBox.posX <= 15) {
      clearInterval(movingLineInterval);
      iteration++;
      movingLine.style.transition = `all 100ms`;
      movingLine.style.width = `5px`;
      movingLine.style.height = `2px`;
      movingLine.style.top = `${movingBox.posY - 75}px`;
      movingLine.style.left = `${15}px`;
      setTimeout(() => {
        movingLine.style.width = `2px`;
        movingLine.style.height = `100px`;
        movingLineInterval = setInterval(moveLine, 20);
      }, 100);
    }
      // return;
  }
  if (iteration === 4) {
    console.log('here4');
    movingBox.posY -= y;
    movingLine.style.top = `${movingBox.posY}px`;
    if (movingBox.posY <= 15) {
      clearInterval(movingLineInterval);
      iteration = 1;
      movingLine.style.transition = `all 100ms`;
      movingLine.style.width = `5px`;
      movingLine.style.height = `2px`;
      movingLine.style.top = `${15}px`;
      movingLine.style.left = `${65}px`;
      setTimeout(() => {
        movingLine.style.width = `100px`;
        movingLine.style.height = `2px`;
        // movingLine.style.display = 'none';
        movingLineInterval = setInterval(moveLine, 25);
      }, 100);
    }
      // return;
  }
}
