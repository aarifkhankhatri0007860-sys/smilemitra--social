// SIGNUP

function signup(){

let name =
document.getElementById("name").value.trim();

let username =
document.getElementById("username").value.trim();

let email =
document.getElementById("email").value.trim();

let password =
document.getElementById("password").value;

let confirmPassword =
document.getElementById("confirmPassword").value;

if(
!name ||
!username ||
!email ||
!password ||
!confirmPassword
){
alert("Fill all fields");
return;
}

if(password !== confirmPassword){
alert("Password not match");
return;
}

let user = {
name,
username,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Account Created");

window.location.href =
"login.html";

}



// LOGIN

function login(){

let loginInput =
document.getElementById("loginEmail").value.trim();

let loginPassword =
document.getElementById("loginPassword").value;

let savedUser =
JSON.parse(
localStorage.getItem("user")
);

if(!savedUser){
alert("No account found");
return;
}

if(

(loginInput === savedUser.email ||

loginInput === savedUser.username)

&&

loginPassword === savedUser.password

){

localStorage.setItem(
"isLoggedIn",
"true"
);

window.location.href =
"dashboard.html";

}
else{

alert("Invalid Login");

}

}



// CHECK LOGIN

function checkLogin(){

let isLoggedIn =
localStorage.getItem(
"isLoggedIn"
);

if(isLoggedIn !== "true"){

window.location.href =
"login.html";

}

}



// LOGOUT

function logout(){

localStorage.removeItem(
"isLoggedIn"
);

window.location.href =
"login.html";

}
