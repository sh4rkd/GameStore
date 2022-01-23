function shoppingCartLabel(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(localStorageShoppingCart!=null){
        let cart = document.getElementById("lblCartCount");
        cart.innerHTML = localStorageShoppingCart.length;
    }
}

shoppingCartLabel();