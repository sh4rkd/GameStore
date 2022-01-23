//array de games name,categorie,price,image
const games = [
    {
        gameName : "Project Zomboid",
        gameCategorie: "Horror",
        gamePrice : 9.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg?t=1639992670"
    },
    {
        gameName : "Phasmophobia",
        gameCategorie: "Horror",
        gamePrice : 14.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1638041534"
    },
    {
        gameName : "Dead By Daylight",
        gameCategorie: "Horror",
        gamePrice : 19.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1639165101"
    },
    {
        gameName : "The Forest",
        gameCategorie: "Horror",
        gamePrice : 4.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg?t=1590522045"
    },
    {
        gameName : "Red Dead Redemption 2",
        gameCategorie: "Adventure",
        gamePrice : 19.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907"
    },
    {
        gameName : "Sea of Thieves",
        gameCategorie: "Adventure",
        gamePrice : 29.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1638484040"
    },
    {
        gameName : "Forza Horizon 5",
        gameCategorie: "Adventure",
        gamePrice : 9.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1640881911"
    },
    {
        gameName : "Grand Theft Auto V",
        gameCategorie: "Adventure",
        gamePrice : 49.99,
        image : "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444"
    },
    {
        gameName : "Lost Ark",
        gameCategorie : "MMOARPG",
        gamePrice : 99.99,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1599340/header.jpg?t=1642093292"
    }
]

//array de cuentas id,level,user,email,password,name,age
const accounts = [
    {
        id: 0,
        level: 0,
        user: "admin",
        email: "admin@admin.com",
        password: "admin",
        name: "Fred",
        age: 28
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


//clase User
class User{
    constructor(id,level,username,email,password,name,age){
        this.id = id;
        this.level = level;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.age = age;
    }
}

//funcion para logear retorna la posicion en el array accounts
function loginAccount(user,password){
    if(accounts[accounts.findIndex(el => el.user === user)] === accounts[accounts.findIndex(el => el.password === password)] && accounts[accounts.findIndex(el => el.user === user)] != null){
        return accounts.findIndex(el => el.user === user);
    }
    return null;
}

//funcion para registrar un usuario hace push al array account
function registerAccount(username,email,password,name,age){
    accounts.push(new User(accounts.length,1,username,email,password,name,age));    
    updateAccounts(accounts);
}

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
                    <a href="" class="btn btn-primary">BUY FOR $${game.gamePrice}</a>
                `;
            }
                gameItem.appendChild(gameLi)
        });
                gameSection.appendChild(gameItem);
    }
}

function updateAccounts(accounts){
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

gameToHtml(games);
