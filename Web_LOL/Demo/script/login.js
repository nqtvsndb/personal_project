function ShowPass() {
    let mk = document.getElementById("pass");
    if (mk.type === "password") {
        mk.type = "text";
    }
    else {
        mk.type = "password";
    }
}