const movieWatchListDiv = document.getElementById("movie-watch-list")

document.addEventListener("DOMContentLoaded", function(){
    movieWatchListDiv.innerHTML = ``
    let ids = JSON.parse(localStorage.getItem('ids'))
    console.log(ids)
        for (let id in ids){
            fetch(`http://www.omdbapi.com/?i=${ids[id]}&apikey=80d36601`)
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
                        <p>⭐️ ${data.imdbRating}</p>
                    </div>
                    <div id="details-div">
                        <p>${data.Runtime}</p>
                        <p>${data.Genre}</p>
                        <button class="watchlist-button" id=${data.imdbID}><span id="circle-button">-</span> Remove</button>
                    </div>
                    <div id="plot-div">
                        <p>${data.Plot}</p>
                    <div>
                    </div>
                <div>
            </div>
        `
        const watchListButtonCollection = document.querySelectorAll("#circle-button")
        for (const button of watchListButtonCollection){
            button.addEventListener("click", function(e){
                addIdToLocalStorage(e.target.parentNode.id)
            })
        }

            })
        }
})
