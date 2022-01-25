shoppingCart = [];

function shoppingCartLocalStorage(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(localStorageShoppingCart != null){
        localStorageShoppingCart.forEach(shopping => {
            shoppingCart.push(shopping);
        });
    }
}

shoppingCartLocalStorage();

function shoppingCartLabel(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(localStorageShoppingCart!=null){
        let cart = document.getElementById("lblCartCount");
        cart.innerHTML = localStorageShoppingCart.length;
    }
}

shoppingCartLabel();

function shoppingHtml(){
    try {
        const shoppingHtml = document.getElementById("cart");
        const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        let shoppingItem = document.createElement('ul');
        let total = 0;
        if(localStorageShoppingCart == null){
            let message = document.createElement("p");
            message.innerHTML = "Sorry, you don't have any items please go to home";
            shoppingHtml.appendChild(message);
        }else{
            localStorageShoppingCart.forEach(shopping => {
                let message = document.createElement("li");
                message.innerHTML = `<p id="cart${shopping.id}">${shopping.name} - $${shopping.price}</p> <p id="deleteShopping${shopping.id}">x</p>`;
                shoppingItem.appendChild(message);
                total += parseFloat(shopping.price);
                
            });
            shoppingHtml.appendChild(shoppingItem);
            localStorageShoppingCart.forEach(shopping =>{
                document.getElementById("deleteShopping"+shopping.id).addEventListener("click",()=>{
                        document.getElementById("cart"+shopping.id).remove();
                        document.getElementById("deleteShopping"+shopping.id).remove();
                        deleteShoppingCartLocalStorage(shopping.id);
                        shoppingCartLabel();
                });
            })          
        }
    } catch (error) {
        console.log(error);
    }
}

function deleteShoppingCartLocalStorage(id){
    let temporal = [];
    shoppingCart.forEach(shopping => {
        if(shopping.id != id){
            temporal.push(shopping);
        }
    })
    shoppingCart = temporal;
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

shoppingHtml();