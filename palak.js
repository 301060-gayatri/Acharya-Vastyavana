function login() {
    let email = document.getElementById("email").value;

    if (email.endsWith("@pce.edu")) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").style.display = "block";
    } else {
        alert("Please enter a valid college email!");
    }
}

function addPost() {
    let text = document.getElementById("postText").value;
    if (text == "") return;

    let postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerText = text;

    document.getElementById("feed").prepend(postDiv);
    document.getElementById("postText").value = "";
}