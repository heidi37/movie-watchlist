const movieResultDiv = document.getElementById("movie-result")
const searchForm = document.getElementById("search-form")
const searchValue = document.getElementById("movie-search");

searchForm.addEventListener("submit", function(event){
    movieResultDiv.innerHTML = ``
    event.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${searchValue.value}&apikey=80d36601`)
        .then(response => response.json())
        .then(function (data) {
            const limitedResults = data.Search.slice(0, 10)
            for (title in limitedResults){
                fetch(`http://www.omdbapi.com/?i=${data.Search[title].imdbID}&apikey=80d36601`)
                .then(response => response.json())
                .then(function (data) {
                movieResultDiv.innerHTML += `
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
                        <button><span id="circle-button">+</span> Watchlist</button>
                    </div>
                    <div id="plot-div">
                        <p>${data.Plot}</p>
                    <div>
                    </div>
                <div>
            </div>
            `
                })
            }
        }
        )
})
