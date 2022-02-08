//funcion para logear retorna la posicion en el array accounts
function loginAccount(user,password){
    if(accounts[accounts.findIndex(el => el.user === user)] === accounts[accounts.findIndex(el => el.password === password)] && accounts[accounts.findIndex(el => el.user === user)] != null){
        return accounts.findIndex(el => el.user === user);
    }
    return null;
}

//funcion para agregar usuarios al localstorage y al array accounts
$("#completeData").submit((e)=>{ 
    e.preventDefault()
    let loading = false;   
    if (!loading) {
      loading = true;
      const data = $("#completeData");
      username = data[0].firstElementChild.children[1].value;
      email = data[0].firstElementChild.children[2].value;
      password = data[0].firstElementChild.children[3].value;
      name = data[0].firstElementChild.children[4].value;
      age = parseInt(data[0].firstElementChild.children[5].value);
          $("main").prepend('<p  style="display: none" id="p-user">Registration successful!</p><img id="img-user" src="https://i.pinimg.com/originals/d9/7e/5e/d97e5e00210b6bed29c5aefab712e44f.gif"/>');
          $.ajax({
            method: "POST",
            url: "http://localhost:5500/register",
            data: {
              username,
              email,
              password,
              name,
              age
            },
            success: function (response) {
              if (response === "ok") {
                $("#p-user").fadeIn("slow", function(){
                  $("#p-user").fadeOut(1700);
              });
              $("#img-user").fadeOut("slow",function(){
                  $("#img-user").show();
                  $("#img-user").fadeOut(2700);
              });
              $("#p-user").remove
              $("#img-user").remove
              loading = false;
              }
            },
          });
          for(let i=0;i<data[0].firstElementChild.children.length-1;i++){
              data[0].firstElementChild.children[i].value = "";
          }
    }
    
});




