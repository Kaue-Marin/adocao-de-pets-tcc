document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.getElementById("menuBar");
  const menuClosed = document.getElementById("menuClosed");
  const navBar = document.querySelector(".navBar");

  menuBar.addEventListener("click", function () {
    navBar.classList.toggle("active");
    menuBar.style.display = "none";
    menuClosed.style.display = "block";
  });

  menuClosed.addEventListener("click", function () {
    navBar.classList.toggle("active");
    menuClosed.style.display = "none";
    menuBar.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");

  // Define a quantidade de pixels que o carrossel deve se mover
  const scrollAmount = 530;

  // Função para mover o carrossel para a esquerda
  function scrollLeft() {
    carousel.scrollLeft -= scrollAmount;
  }

  // Função para mover o carrossel para a direita
  function scrollRight() {
    carousel.scrollLeft += scrollAmount;
  }

  // Adiciona ouvintes de eventos aos botões
  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);
});
