$(function () {
    const removeCartItemButtons = document.getElementsByClassName('cart-page__delete-product')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-page__quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    function removeCartItem(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function quantityChanged(event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        } else if (input.value > 100) {
            input.value = 100
        }
        updateCartTotal()
        updateItemsTotal()
    }

    function updateCartTotal() {
        let cartItemContainer = document.getElementsByClassName('cart-page__products')[0]
        let cartItems = cartItemContainer.getElementsByClassName('cart-page__product')
        let subTotal = 0
        for (let i = 0; i < cartItems.length; i++) {
            let cartItem = cartItems[i]
            let priceElement = cartItem.getElementsByClassName('cart-page__price')[0]
            let quantityElement = cartItem.getElementsByClassName('cart-page__quantity')[0]
            let price = parseFloat(priceElement.innerText.replace('$', ''))
            let quantity = quantityElement.value
            subTotal = subTotal + (price * quantity)
        }
        subTotal = Math.round(subTotal * 100) / 100
        document.getElementsByClassName('calculator__subtotal')[0].innerText = '$' + subTotal
        let total = 0
        total = subTotal
        document.getElementsByClassName('calculator__total')[0].innerText = '$' + total
    }

    function updateItemsTotal() {
        let cartItemContainer = document.getElementsByClassName('cart-page__products')[0]
        let cartItems = cartItemContainer.getElementsByClassName('cart-page__product')
        let itemsTotal = 0
        let cartItem = cartItems[0]
        let priceElement = cartItem.getElementsByClassName('cart-page__price')[0]
        let quantityElement = cartItem.getElementsByClassName('cart-page__quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        itemsTotal = itemsTotal + (price * quantity)
        itemsTotal = Math.round(itemsTotal * 100) / 100
        document.getElementsByClassName('cart-page__price_counted')[0].innerText = '$' + itemsTotal
    }
})