const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const asideMyOrder = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isAsideClosed = asideMyOrder.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMyOrder.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = asideMyOrder.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMyOrder.classList.add('inactive');
    };
    menuMobile.classList.toggle('inactive');
};

function toggleShoppingCart() {
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isEmailMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed || !isEmailMenuClosed) {
        menuMobile.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    asideMyOrder.classList.toggle('inactive');
};