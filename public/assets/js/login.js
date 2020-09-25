$(document).ready(() => {
    

    document.getElementById("guestJoinBtn").addEventListener("click", function() {
        var guestCode = $("input#guestCodeInput");
        if (!guestCode) {
            return;
        }

        joinRoom(guestCode);        
    });

    function joinRoom(code) {
        $.post("/api/joinRoom", {
            code: code
        })
        .then(() => {
            window.location.replace("./../public/picker.html");
        })
    }
})