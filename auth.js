function signup(){

let name =
document.getElementById("name").value;

let username =
document.getElementById("username").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let confirmPassword =
document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Password not match");

return;

}

const user = {

name,
username,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Account Created Successfully"
);

window.location.href =
"login.html";

}
