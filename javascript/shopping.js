//Array de carrito de compras
shoppingCart = [];

//funcion que agrega todos los datos del localstorage al shoppingcart
function shoppingCartLocalStorage(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(localStorageShoppingCart != null){
        localStorageShoppingCart.forEach(shopping => {
            shoppingCart.push(shopping);
        });
    }
}

shoppingCartLocalStorage();

//funcion para actualizar el numero de elementos contenidos en el carrito en un label
function shoppingCartLabel(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if(localStorageShoppingCart!=null){
        let cart = document.getElementById("lblCartCount");
        cart.innerHTML = localStorageShoppingCart.length;
    }
}

shoppingCartLabel();

//funcion que agrega los juegos contenidos en el carrito a la pagina
function shoppingHtml(){
    try {
        const shoppingHtml = document.getElementById("cart");
        const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        let shoppingItem = document.createElement('ul');
        let total = 0;
        if(localStorageShoppingCart == null || localStorageShoppingCart.length == 0){
            let message = document.createElement("p");
            message.innerHTML = "Sorry, you don't have any items please go to home";
            shoppingHtml.appendChild(message);
        }else{
            localStorageShoppingCart.forEach(shopping => {
                let message = document.createElement("li");
                message.innerHTML = `<p id="cart${shopping.id}">${shopping.name} - $${shopping.price}    <strong id="deleteShopping${shopping.id}"  onMouseOver="this.style.cursor='pointer'">x</strong></p>`;
                shoppingItem.appendChild(message);
                total += parseFloat(shopping.price);                
            });
            shoppingHtml.appendChild(shoppingItem);
            localStorageShoppingCart.forEach(shopping =>{
                document.getElementById("deleteShopping"+shopping.id).addEventListener("click",()=>{
                        total -= parseFloat(shopping.price);
                        document.getElementById("cart"+shopping.id).remove();
                        deleteShoppingCartLocalStorage(shopping.id);
                        shoppingCartLabel();
                        document.getElementById("shoppingTotal").remove();
                        if(shoppingCart.length>0){
                            repaintTotalSubtraction(total,shoppingHtml);
                        }else{
                            let message = document.createElement("p");
                            message.innerHTML = "Sorry, you don't have any items please go to home";
                            shoppingHtml.appendChild(message);
                        }
                });
            })
            repaintTotalSubtraction(total,shoppingHtml);
        }
    } catch (error) {
        console.log(error);
    }
}

function repaintTotalSubtraction(total,shoppingHtml){
    let message = document.createElement("li");
    message.innerHTML = `<p>total: $${total.toFixed(2)}</p>`;
    message.setAttribute("id","shoppingTotal");
    shoppingHtml.appendChild(message);
}

//funcion para eliminar los juegos contenidos en pagina, localstorage y actualizar el label
function deleteShoppingCartLocalStorage(id){
    shoppingCart.splice(shoppingCart.findIndex(el => el.id == id),1);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

shoppingHtml();