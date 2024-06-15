document.addEventListener('scroll', function () {
  const scrolled = window.scrollY;

  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(function (element) {
    const speed = parseFloat(element.dataset.parallaxSpeed);
    const offset = scrolled * speed;
    const scale = 1 + scrolled * 0.0005;
    const opacity = 1 - scrolled * 0.002;
    element.style.transform = `translateY(${offset}px) scale(${scale})`;
    element.style.opacity = `${Math.max(opacity, 0)}`;
  });
});

let hasScrolled = false;

document.addEventListener('scroll', function () {
  const titleWrapper = document.querySelector('.title-wrapper');
  const persons = document.querySelectorAll('.persons img');

  function animateElements() {
    const contentAbout = `
        <div class="circle"></div>
        <div class="line left"></div>
        <div class="line right"></div>
        <div class="bracket left"></div>
        <div class="bracket right"></div>
        <div class="small top">OUR</div>
        <div class="big">TEAM DEVELOPER</div>
        <div class="small bottom">PRESENTS</div>
        <div class="hide top"></div>
        <div class="hide bottom"></div>
    `;
    titleWrapper.innerHTML += contentAbout;
    setTimeout(() => {
      titleWrapper.style.transform = 'translate(-50%,-100%)';
      titleWrapper.style.transition = 'transform 0.8s ease-in-out';
    }, 2500);

    setTimeout(() => {
      persons.forEach((img, index) => {
        setTimeout(() => {
          img.style.transform = 'translate(0, -100%)';
          img.style.transition = 'transform .8s ease-in-out';
        }, index * 800);
      });
    }, 3000);
  }

  function resetElements() {
    titleWrapper.innerHTML = '';
    titleWrapper.style.transform = 'translate(-50%,-50%)';
    persons.forEach((img) => {
      img.style.transform = 'translate(0, 130%)';
    });
  }

  const scrollThreshold = 500;
  const resetThreshold = 100;
  if (window.scrollY > scrollThreshold && !hasScrolled) {
    animateElements();
    hasScrolled = true;
  } else if (window.scrollY < resetThreshold && hasScrolled) {
    resetElements();
    hasScrolled = false;
  }
});
