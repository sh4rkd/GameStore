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

function addIva(price){
    return parseFloat(price+(price*.16)).toFixed(2);
}

function addDiscount(price,discount){
    return price-(price*parseFloat(discount));
}

function correctDiscount(discount){
    if(discount == "coder"){
        return .50;
    }else{
        return 0;
    }
}

class User{
    constructor(name,age,user,password){
        this.name = name;
        this.age = age;
        this.user = user;
        this.password = password;
    }

    showData(){
        return "your name: "+this.name+"\nyour age: "+this.age+"\nyour user: "+this.user+"\nyour password: "+this.password;
    }

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

document.onload = console.log("loading :D");

const user = new User(prompt("What's your name?"),parseInt(prompt("How old are you?")),prompt("Please type your username"),prompt("Type your password"));

alert("The total is: "+addIva(addDiscount(buyGames(user.name),correctDiscount(prompt("Type a discount code!")))));

// alert(user.showData());

// user.changeData(parseInt(prompt("Please select an option:\n1 - change your name\n2 - change your age\n3 - change your user\n4 - change your password")));

// alert(user.showData());

