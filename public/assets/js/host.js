$(document).ready(() => {
    const hostForm = $("form.hostForm");
    const movieLanguage = $("select#hostLanguage");
    const recommended = $("input#hostMovieRecommendation");

    hostForm.on("submit", event => {
        event.preventDefault();

        const hostData = {
            lang: movieLanguage.val(),
            recommendation: recommended.val()
        };


        startLobby(hostData.lang, hostData.recommendation);

    });

    function startLobby(lang, recommendation) {
        $.post("/api/recommended", {
                lang: lang,
                recommendation: recommendation
            })
            .then((res) => {
                window.location.replace("picker.html")
            })
    }
})