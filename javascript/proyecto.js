//array de games name,categorie,price,image
const games = [
    {
        gameName : "Project Zomboid",
        gameCategorie: "Horror",
        gamePrice : 9.99,
        image : ""
    },
    {
        gameName : "Phasmophobia",
        gameCategorie: "Horror",
        gamePrice : 14.99,
        image : ""
    },
    {
        gameName : "Dead By Daylight",
        gameCategorie: "Horror",
        gamePrice : 19.99,
        image : ""
    },
    {
        gameName : "The Forest",
        gameCategorie: "Horror",
        gamePrice : 4.99,
        image : ""
    },
    {
        gameName : "Red Dead Redemption 2",
        gameCategorie: "Adventure",
        gamePrice : 19.99,
        image : ""
    },
    {
        gameName : "Sea of Thieves",
        gameCategorie: "Adventure",
        gamePrice : 29.99,
        image : ""
    },
    {
        gameName : "Forza Horizon 5",
        gameCategorie: "Adventure",
        gamePrice : 9.99,
        image : ""
    },
    {
        gameName : "Grand Theft Auto V",
        gameCategorie: "Adventure",
        gamePrice : 49.99,
        image : ""
    }
]

//array de cuentas id,level,name,age,user,password
const accounts = [
    {
        id: 0,
        level: 0,
        name: "Fred",
        age: 28,
        user: "admin",
        password: "admin"
    }
]

//funcion para ordenar de forma ascendente o descentente el array games
function gameSort(property,ascDesc){
    switch(property){
        case 1:
                if(ascDesc == 1){
                    console.log({...games.sort((a,b) => (a.gameName < b.gameName) ? -1 : (a.gameName > b.gameName) ? 1 : 0)});
                }else{
                    console.log({...games.sort((a,b) => (a.gameName < b.gameName) ? 1 : (a.gameName > b.gameName) ? -1 : 0)});
                }
            break;
        case 2:
                if(ascDesc == 1){
                    console.log({...games.sort((a,b) => (a.gameCategorie < b.gameCategorie) ? -1 : (a.gameCategorie > b.gameCategorie) ? 1 : 0)});
                }else{
                    console.log({...games.sort((a,b) => (a.gameCategorie < b.gameCategorie) ? 1 : (a.gameCategorie > b.gameCategorie) ? -1 : 0)});
                }
            break;
        case 3:
                if(ascDesc == 1){
                    console.log({...games.sort((a,b) => a.gamePrice - b.gamePrice)});
                }else{
                    console.log({...games.sort((a,b) => b.gamePrice - a.gamePrice)});
                }
            break;
        default:
            console.log("Error type a number 1 - 3");
    }
}

//funcion para comprar juegos
function buyGames(name){
    let gamePrices = 0;
    let exit = true;
    alert("Hi! "+name+" Welcome to the Game Store.")

    while(exit){
        let categoriesSelected = parseInt(prompt("Select your option:\n1 - Horror Games \n2 - Adventure Games\n3 - Exit"));
        let gameSelected;
        if(categoriesSelected==1){
            gameSelected = parseInt(prompt("Welcome to Horror Section, what game do you want?\n1 - Project Zomboid\n2 - Phasmophobia\n3 - Dead By Daylight\n4 - The Forest"));
            if(gameSelected==1){
                                //games[0].
                gamePrices+= games[games.findIndex(el => el.gameName === "Project Zomboid")].gamePrice;
            }else if(gameSelected==2){
                gamePrices+= games[games.findIndex(el => el.gameName === "Phasmophobia")].gamePrice;
            }else if(gameSelected==3){
                gamePrices+= games[games.findIndex(el => el.gameName === "Dead By Daylight")].gamePrice;
            }else if(gameSelected==4){
                gamePrices+= games[games.findIndex(el => el.gameName === "The Forest")].gamePrice;
            }else{
                alert("Error please type a number 1 to 4");
            }
        }else if(categoriesSelected == 2){
            gameSelected = parseInt(prompt("Welcome to Adventure Section, what game do you want?\n1 - Red Dead Redemption 2\n2 - Sea of Thieves\n3 - Forza Horizon 5\n4 - Grand Theft Auto V"));
            if(gameSelected==1){
                gamePrices+= games[games.findIndex(el => el.gameName === "Red Dead Redemption 2")].gamePrice;
            }else if(gameSelected==2){
                gamePrices+= games[games.findIndex(el => el.gameName === "Sea of Thieves")].gamePrice;
            }else if(gameSelected==3){
                gamePrices+= games[games.findIndex(el => el.gameName === "Forza Horizon 5")].gamePrice;
            }else if(gameSelected==4){
                gamePrices+= games[games.findIndex(el => el.gameName === "Grand Theft Auto V")].gamePrice;
            }else{
                alert("Error please type a number 1 to 4");
            }
        }else if(categoriesSelected == 3){
            return gamePrices;
            exit = false;
        }else{
            alert("Error please select 1 to 3");
        }
    }    
}

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
    constructor(id,level,name,age,user,password){
        this.id = id;
        this.level = level;
        this.name = name;
        this.age = age;
        this.user = user;
        this.password = password;
    }

    //funcion que imprime los datos
    showData(){
        return "your name: "+this.name+"\nyour age: "+this.age+"\nyour user: "+this.user+"\nyour password: "+this.password;
    }

    //funcion para cambiar el valor de las propiedades de la clase user
    changeData(option){
        switch(option){
            case 1: this.name = prompt("Please type your name.");
            break;
            case 2: this.age = parseInt(prompt("Please type your age."));
            break;
            case 3: this.user = prompt("Please type your user");
            break;
            case 4: this.password = prompt("Pleade type your password");
            break;
            default: console.log("Error type a number 1 to 4");
        }
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
function registerAccount(){
    accounts.push(new User(accounts.length,1,prompt("What's your name?"),parseInt(prompt("What's your age?")),prompt("Please type your account"),prompt("Please type your password")));
}

//cargar la pagina primero
document.onload = console.log("loading :D");

//bucle del programa cuando logeas haces compras y sales, si no tienes cuenta te registras
let exit = true;
while(exit){
    let option = parseInt(prompt("1 - Login\n2 - Register\n3 - Exit"));
    switch(option){
        case 1:
                let acc = loginAccount(prompt("Your account?"),prompt("Your password?"));
                if(acc!=null){
                    alert("The total is: "+addIva(addDiscount(buyGames(accounts[acc].name),correctDiscount(prompt("Type a discount code!")))));
                    exit = false;
                }else{
                    alert("That account does not exist");
                }
            break;
        case 2: registerAccount();
                break;
        case 3:
                alert("Good bye!");
                exit = false;
                break;
        default:
            alert("Type a number 1 - 3");
    }
}

// document.onload = console.log("loading :D");

// const user = new User(prompt("What's your name?"),parseInt(prompt("How old are you?")),prompt("Please type your username"),prompt("Type your password"));

// alert("The total is: "+addIva(addDiscount(buyGames(user.name),correctDiscount(prompt("Type a discount code!")))));

// alert(user.showData());

// user.changeData(parseInt(prompt("Please select an option:\n1 - change your name\n2 - change your age\n3 - change your user\n4 - change your password")));

// alert(user.showData());

// let exit = true;
// while(exit){
//     let option = parseInt(prompt("Welcome to the ultra order object system 3.4 alpha\nPlease select what games do you want to order.\n1 - order by name\n2 - order by genre\n3 - order by price\nanother option >:D - exit"))

//     if(option == 1){
//         gameSort(1,parseInt(prompt("Select if you want asc or desc\n1 - asc\n2 - desc")));
//     }else if(option == 2){
//         gameSort(2,parseInt(prompt("Select if you want asc or desc\n1 - asc\n2 - desc")));
//     }else if(option == 3){
//         gameSort(3,parseInt(prompt("Select if you want asc or desc\n1 - asc\n2 - desc")));
//     }else{
//         alert("Goodbye :D");
//         exit = false;
//     }
// }