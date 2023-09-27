const movieWatchListDiv = document.getElementById("movie-watch-list")

document.addEventListener("DOMContentLoaded", function(){
    movieWatchListDiv.innerHTML = ``
    let ids = JSON.parse(localStorage.getItem('ids'))
    if (ids.length > 0) {
    for (let id in ids){
        fetch(`https://www.omdbapi.com/?i=${ids[id]}&apikey=80d36601`)
        .then(response => response.json())
        .then(function (data) {
        movieWatchListDiv.innerHTML += `
        <div id="movie-div">
            <div id="poster-div">
                <img src="${data.Poster}" id="poster" />
            </div>
            <div id="text-div">
                <div id="title-div">
                    <h2>${data.Title}</h2>
                    <p><img src="images/star.svg" alt="star icon" id="star-icon"> ${data.imdbRating}</p>
                </div>
                <div id="details-div">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button class="watchlist-button" id=${data.imdbID}><span class="circle-button remove">-</span> Remove</button>
                </div>
                <div id="plot-div">
                    <p>${data.Plot}</p>
                <div>
                </div>
            <div>
        </div>
    `
    const watchListButtonCollection = document.querySelectorAll(".watchlist-button")
    for (const button of watchListButtonCollection){
        button.addEventListener("click", function(e){
        ids.splice((ids.indexOf(e.target.id)),1);
        localStorage.setItem('ids', JSON.stringify(ids))
        window.location.reload()
        })
    }

        })
    }
} else {
    movieWatchListDiv.innerHTML += `
    <div id="no-watchlist">
      <p>Your watchlist is looking a little empty...</p>
      <p class="add-movies"><a href="index.html"><span class="circle-button remove">+</span> Let's add some movies</a></p>
    </div>
    `
}
})
