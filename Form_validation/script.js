// normal formate to write the arrow 
// function in js by using the return function
// let id = () => {
//   return  document.getElementById(id)
// }    


// Short method to write the arrow function without using return keyword
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");

});

let engine = (id, serial, message) => {
  if(id.value.trim() === ''){
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
  else {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}


