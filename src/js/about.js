function moveH1ToTop() {
  let title = document.querySelector('.title h1');
  setInterval(() => {
    title.style.transform = 'translateY(-250%)';
    title.style.transition = 'transform .8s ease-in-out';
  }, 2000);
}
function moveAvatarToTop() {
  let persons = document.querySelectorAll('.persons img');
  setInterval(() => {
    persons.forEach((img, index) => {
      setTimeout(() => {
        img.style.transform = 'translateY(0em)';
        img.style.transition = 'transform .8s ease-in-out';
        console.log(index);
      }, index * 1000);
    });
  }, 3000);
}

moveH1ToTop();
moveAvatarToTop();
