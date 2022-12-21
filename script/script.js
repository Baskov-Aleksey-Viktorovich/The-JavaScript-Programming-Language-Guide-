let navMenu = document.querySelector(".navbar");
let mainDoc = document.querySelector(".main__doc");
let menuActive = document.querySelector(".menu__active");

function activeMenu() {
  navMenu.classList.toggle("actives");
  console.log("i am work");
}
menuActive.onclick = activeMenu;
function closeMenu() {
  navMenu.classList.remove("actives");
}
mainDoc.onclick = closeMenu;
