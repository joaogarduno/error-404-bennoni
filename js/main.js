// BUTTON - MENU
const buttonMenu = () => {
  const btnMenu = document.querySelector('#btnMenu');
  
  btnMenu.addEventListener('click', () => {
    window.location.href = '../pages/menu.html';
    // window.location.href = '../../bennoni-restaurant/pages/menu.html';
    // window.location.href = 'menu.html';
    // window.location.href = '../pages/menu.html';
  })

}
buttonMenu();