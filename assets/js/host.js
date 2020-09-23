$(document).ready(() => {
    const hostForm = $("form.hostForm");
    const movieLanguage = $("select#hostLanguage");
    const movOrTv = $("select#movieOrTv");
    const genre = $("select#genreSelect");
    const recommended = $("input#hostMovieRecommendation");

    hostForm.on("submit", event => {
        event.preventDefault();

        if (!genre) {
            const hostData = {
                lang: movieLanguage.val(),
                movOrTv: movOrTv.val(),
                genre: null,
                recommendation: recommended.val()
            };
        } else {
            const hostData = {
                lang: moviLanguage.val(),
                movOrTv: movOrTv.val(),
                genre: genre.val(),
                recommendation: null
            };
        };

        if (!hostData.genre && !hostData.recommended) {
            return;
        };

        startLobby(hostData.lang, hostData.movOrTv, hostData.genre, hostData.recommendation);
        
    });
     
    function startLobby(lang, movOrTv, genre, recommendation) {
        $.post("/api/host", {
            lang: lang,
            movOrTv: movOrTv,
            genre: genre,
            recommendation: recommendation
        })
        .then((res) => {
            window.location.replace("./../public/picker.html")
        })
    }
})