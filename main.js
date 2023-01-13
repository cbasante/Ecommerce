const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer
.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer
    .classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer
.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer
    .classList.add('inactive');
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
    shoppingCartContainer
.classList.toggle('inactive');
};

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'cellphone',
    price: 620,
    image: 'https://cdn0.iconfinder.com/data/icons/basic-ui-3/512/Geeren_Background_06-512.png',
});
productList.push({
    name: 'laptop',
    price: 1120,
    image: 'https://cdn0.iconfinder.com/data/icons/basic-ui-3/512/Geeren_Background_06-512.png',
});

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/basic-ui-3/512/Geeren_Background_06-512.png');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);