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
];

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

//funcion para registrar un usuario hace push al array account
function registerAccount(username,email,password,name,age){
    accounts.push(new User(accounts.length,1,username,email,password,name,age));    
    updateAccounts(accounts);
}

//funcion para logear retorna la posicion en el array accounts
function loginAccount(user,password){
    if(accounts[accounts.findIndex(el => el.user === user)] === accounts[accounts.findIndex(el => el.password === password)] && accounts[accounts.findIndex(el => el.user === user)] != null){
        return accounts.findIndex(el => el.user === user);
    }
    return null;
}

//funcion para agregar al localstorage los elementos del array accounts
function updateAccounts(accounts){
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

//funcion para agregar al array accounts del local storage el contenido
function updateArrayAccounts(){
    const localStorageAccounts = JSON.parse(localStorage.getItem('accounts'));
    if(localStorageAccounts.length>1){
        localStorageAccounts.forEach(account =>{
            if(account.id != 0){
                accounts.push(account);
            }
        });
    }
}

updateArrayAccounts();

//funcion para agregar usuarios al localstorage y al array accounts
$("#completeData").submit((e)=>{    
    e.preventDefault()
    const data = $("#completeData");
    $("main").prepend('<p  style="display: none" id="p-user">Registration successful!</p><img id="img-user" src="https://i.pinimg.com/originals/d9/7e/5e/d97e5e00210b6bed29c5aefab712e44f.gif"/>');
    registerAccount(data[0].firstElementChild.children[1].value,data[0].firstElementChild.children[2].value,data[0].firstElementChild.children[3].value,data[0].firstElementChild.children[4].value,parseInt(data[0].firstElementChild.children[5].value));
    for(let i=0;i<data[0].firstElementChild.children.length-1;i++){
        data[0].firstElementChild.children[i].value = "";
    }
    $("#p-user").fadeIn("slow", function(){
        $("#p-user").fadeOut(1700);
    });
    $("#img-user").fadeOut("slow",function(){
        $("#img-user").show();
        $("#img-user").fadeOut(2700);
    });
    $("#p-user").remove
    $("#img-user").remove
});


