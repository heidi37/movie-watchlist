const movieResultDiv = document.getElementById("movie-result")

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=80d36601&t=Blade+Runner")
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        movieResultDiv.innerHTML += `
        <div>
            <div>
            <img src="${data.Poster}" id="poster" />
            <div>
            <div>
                <div>
                    <h2>${data.Title}</h2>
                    <p>${data.imdbRating}</p>
                </div>
                <div>
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button>+ Watchlist</button>
                <div>
                    <p>${data.Plot}</p>
                <div>
                </div>
            <div>
        </div>
        `
    }
    )
