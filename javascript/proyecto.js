//array de games name,categorie,price,image
const games = [
    {
        idGame: 0,
        gameName : "Project Zomboid",
        gameCategorie: "Horror",
        gamePrice : 9.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg?t=1639992670"
    },
    {
        idGame: 1,
        gameName : "Phasmophobia",
        gameCategorie: "Horror",
        gamePrice : 14.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1638041534"
    },
    {
        idGame: 2,
        gameName : "Dead By Daylight",
        gameCategorie: "Horror",
        gamePrice : 19.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1639165101"
    },
    {
        idGame: 3,
        gameName : "The Forest",
        gameCategorie: "Horror",
        gamePrice : 4.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg?t=1590522045"
    },
    {
        idGame: 4,
        gameName : "Red Dead Redemption 2",
        gameCategorie: "Adventure",
        gamePrice : 19.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907"
    },
    {
        idGame: 5,
        gameName : "Sea of Thieves",
        gameCategorie: "Adventure",
        gamePrice : 29.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1638484040"
    },
    {
        idGame: 6,
        gameName : "Forza Horizon 5",
        gameCategorie: "Adventure",
        gamePrice : 9.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1640881911"
    },
    {
        idGame: 7,
        gameName : "Grand Theft Auto V",
        gameCategorie: "Adventure",
        gamePrice : 49.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444"
    },
    {
        idGame: 8,
        gameName : "Lost Ark",
        gameCategorie : "MMOARPG",
        gamePrice : 99.99,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/header.jpg?t=1642093292"
    }
]

//funcion agregar iva
function addIva(price){
    return parseFloat(price+(price*.16)).toFixed(2);
}

//funcion descuento
function addDiscount(price,discount){
    return price-(price*parseFloat(discount));
}

//verifica que el codigo sea 'coder' para agregar descuento
function correctDiscount(discount){
    if(discount == "coder"){
        return .50;
    }else{
        return 0;
    }
}

//agrega todos los juegos y sus secciones al index.html
function gameToHtml(games){
    const uniqueArr = [];
    games.forEach((item)=>{
        if(!uniqueArr.includes(item.gameCategorie)){
            uniqueArr.push(item.gameCategorie);
        }
    })
    const gameSection = document.getElementById('games');
    for(let i=0;i<uniqueArr.length;i++){
        let categorie = document.createElement('h2');
        let gameItem = document.createElement('ul');
        gameItem.setAttribute("class","games");
        categorie.innerHTML = `${uniqueArr[i]}`;
        gameSection.appendChild(categorie);
        games.forEach(game =>{
            let gameLi = document.createElement('li');
            if(game.gameCategorie == uniqueArr[i]){
                gameLi.innerHTML = `
                    <h3>${game.gameName}</h3>
                    <img src="${game.image}"/>
                    <a href="" class="btn btn-primary" id="buy${game.idGame}">BUY FOR $${game.gamePrice}</a>
                `;
            }
                gameItem.appendChild(gameLi)
        });
                gameSection.appendChild(gameItem);
    }
}

gameToHtml(games);

const shoppingCarts = [];

class Shopping{
    constructor(id,name,image,price){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

games.forEach(game =>{
    document.getElementById("buy"+game.idGame).addEventListener("click",(e)=>{
        e.preventDefault();
        let cart = document.getElementById("lblCartCount");
        cart.innerHTML = parseInt(cart.textContent)+1;
        addShoppingLocalStorage(game.idGame);
        console.log(shoppingCarts);
    });
});

function addShoppingLocalStorage(position){
    shoppingCarts.push(new Shopping(shoppingCarts.length,games[position].gameName,games[position].image,games[position].gamePrice));
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCarts));
}

function addArrayShoppingCart(){
    const localStorageShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if(localStorageShoppingCart!=null){
            localStorageShoppingCart.forEach(shoppingCart =>{
                    shoppingCarts.push(shoppingCart);
            });
        }
}

addArrayShoppingCart();