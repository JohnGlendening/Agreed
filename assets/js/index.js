$(document).ready(() => {
    document.getElementById("hostBtn").addEventListener("click", function() {
        window.location.replace("./host.html");
    });

    document.getElementById("joinBtn").addEventListener("click", function() {
        window.location.replace("./../public/login.html");
    });
})