const movieResultDiv = document.getElementById("movie-result")
const searchForm = document.getElementById("search-form")
const searchValue = document.getElementById("movie-search");

searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(searchValue.value)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=80d36601&t=${searchValue.value}`)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
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
        }
        )
})
