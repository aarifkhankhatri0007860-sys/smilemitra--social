// ==========================
// SMILE SOCIAL AUTH SYSTEM
// ==========================

// SIGNUP

function signup() {

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (
        name === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password does not match");
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

    alert("Account Created Successfully");

    window.location.href = "login.html";
}



// LOGIN

function login() {

    let loginInput =
        document.getElementById("loginEmail").value.trim();

    let loginPassword =
        document.getElementById("loginPassword").value;

    let savedUser =
        JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {

        alert("No account found. Create account first.");

        return;
    }

    let emailMatch =
        loginInput === savedUser.email;

    let usernameMatch =
        loginInput === savedUser.username;

    let passwordMatch =
        loginPassword === savedUser.password;

    if (
        (emailMatch || usernameMatch)
        &&
        passwordMatch
    ) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        alert("Login Successful");

        window.location.href =
            "dashboard.html";

    } else {

        alert("Invalid Login Details");

    }
}



// CHECK LOGIN

function checkLogin() {

    let isLoggedIn =
        localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        alert("Please Login First");

        window.location.href =
            "login.html";
    }

}



// LOGOUT

function logout() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out");

    window.location.href =
        "login.html";

}
