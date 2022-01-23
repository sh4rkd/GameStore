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
document.getElementById("completeData").addEventListener("submit",(e)=>{    
    e.preventDefault()
    const form = document.getElementById("completeData");
    registerAccount(form.children[1].value,form.children[2].value,form.children[3].value,form.children[4].value,parseInt(form.children[5].value));
    for(let i=0;i<form.children.length-1;i++){
        form[i].value = "";
    }
    let completed = document.createElement("p");
    completed.innerHTML = "Registration successful!";
    form.appendChild(completed)
});


