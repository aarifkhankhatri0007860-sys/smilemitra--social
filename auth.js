console.log("AUTH JS LOADED");

// ==========================
// SIGNUP
// ==========================

function signup() {

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !username || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        name: name,
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully");

    window.location.href = "login.html";
}


// ==========================
// LOGIN
// ==========================

function login() {

    const loginInput =
        document.getElementById("loginEmail").value.trim();

    const loginPassword =
        document.getElementById("loginPassword").value;

    const savedUser =
        JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found. Please create account first.");
        return;
    }

    const validUser =
        loginInput === savedUser.email ||
        loginInput === savedUser.username;

    const validPassword =
        loginPassword === savedUser.password;

    if (validUser && validPassword) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        alert("Login Successful");

        window.location.href =
            "dashboard.html";

    } else {

        alert("Invalid Username/Email or Password");

    }
}


// ==========================
// CHECK LOGIN
// ==========================

function checkLogin() {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        window.location.href =
            "login.html";
    }
}


// ==========================
// LOGOUT
// ==========================

function logout() {

    localStorage.removeItem("isLoggedIn");

    window.location.href =
        "login.html";
}
