
function ShowPass() {
    let mk = document.getElementById("mk");
    if (mk.type === "password") {
        mk.type = "text";
    }
    else {
        mk.type = "password";
    }
}

