const movieResultDiv = document.getElementById("movie-result")

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=80d36601&t=Blade+Runner")
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
