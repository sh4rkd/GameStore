const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

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
}


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  registerAccount(  
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.age)
  console.log(accounts)
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
