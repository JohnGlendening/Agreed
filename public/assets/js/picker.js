// take the movie array (10 movies)
// cycle through each entry and display image, title, and overview on page
// clicking up or down arrow rotates to next entry and sends response to db


for (j=0; j<recMovies.length; j++) {
    let eyeDee = recMovies[j];
    document.getElementById("downBtn").addEventListener("click", function() {
        $.post("/api/matches", {
            movieId: eyeDee,
            like: false
        })
        .then(() => {
            return;
        })
    })
    
    document.getElementById("upBtn").addEventListener("click", function() {
        $.post("/api/matches", {
            movieId: eyeDee,
            like: true
        })
        .then(() => {
            return;
        })
    })

    
}