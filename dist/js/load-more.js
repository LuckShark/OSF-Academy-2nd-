// ----- Add Items to Wishlist and Cart -----
function addItems() {
    const addToCartButtons = document.getElementsByClassName('products__button_buy')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let buttonCart = addToCartButtons[i]
        buttonCart.addEventListener('click', addToCartClicked)
    }

    function addToCartClicked() {
        let cartCounter = document.querySelector('.login-cart__counter_cart')
        cartCounterNumber = parseFloat(cartCounter.innerHTML)
        if (cartCounter.innerHTML < 99) {
            cartCounter.innerHTML = cartCounterNumber + 1
        }
    }

    const addToWishlistButtons = document.getElementsByClassName('products__button_like')

    for (let i = 0; i < addToWishlistButtons.length; i++) {
        let buttonWishlist = addToWishlistButtons[i]
        buttonWishlist.addEventListener('click', addToWishlistClicked)
    }

    function addToWishlistClicked() {
        let wishlistCounter = document.querySelector('.login-cart__counter_wishlist')
        wishlistCounterNumber = parseFloat(wishlistCounter.innerHTML)
        if (wishlistCounter.innerHTML < 99) {
            wishlistCounter.innerHTML = wishlistCounterNumber + 1
        }
    }
}
addItems()
// ----- // Add Items to Wishlist and Cart -----

// ----- AJAX Request-----
let productContainer = document.getElementById('loaded-products')
let btn = document.getElementById('btn-main')
let count = 0

btn.addEventListener('click', function () {
    let productRequest = new XMLHttpRequest()
    productRequest.open('GET', 'https://gist.githubusercontent.com/pmAndrian/4a40670d9296f44c85d4bda448ea115f/raw/f608a0a86c72827765e3e418948aedb73ec3e902/data.json')
    productRequest.onload = function () {
        let productData = JSON.parse(productRequest.responseText)
        renderHTML(productData)
    };
    productRequest.send()
})

function renderHTML(data) {
    let start = count > 0 ? 4 * count : count
    let end = start + 4
    let htmlString = ''

    for (i = start; i < end; i++) {
        htmlString += '<div class="col-12 col-md-6 col-xl-3 products__item">' +
            '<div class="products__photo products__photo_' + data[i].photoCounter + '">' +
            '<div class="products__hover"> <button class="products__button products__button_buy"><i class="fa fa-plus" aria-hidden="true"></i></button> <button class="products__button products__button_like"><i class="fa fa-heart" aria-hidden="true"></i></button> </div>' +
            '</div>' +
            '<div class="products__description">' +
            '<div class="products__name">' + data[i].title + '</div>' +
            '<div class="products__price">' + data[i].price + '</div>' +
            '</div>' +
            '</div>'
    }
    count++;

    if (start >= data.length - 4) {
        btn.classList.add('products__load-more_hide')
    }
    productContainer.insertAdjacentHTML('beforeend', htmlString)
    addItems()
}
// ----- // AJAX Request -----