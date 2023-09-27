const movieResultDiv = document.getElementById("movie-result")
const searchForm = document.getElementById("search-form")
const searchValue = document.getElementById("movie-search")

function addIdToLocalStorage(newId){
    let ids = JSON.parse(localStorage.getItem('ids')) || []
    ids.push(newId)
    localStorage.setItem('ids', JSON.stringify(ids))
}

searchForm.addEventListener("submit", function(event){
    movieResultDiv.innerHTML = ``
    event.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${searchValue.value}&apikey=80d36601`)
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
        if (data.Response === 'False'){
            movieResultDiv.innerHTML += `
            <div id="no-results">
            <p>Unable to find what you’re looking for. Please try another search.</p>
            </div>
            `
        } else {
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
                        <p><img src="images/star.svg" alt="star icon" id="star-icon"> ${data.imdbRating}</p>
                    </div>
                    <div id="details-div">
                        <p>${data.Runtime}</p>
                        <p>${data.Genre}</p>
                        <button class="watchlist-button" id=${data.imdbID}><span id=${data.imdbID} class="circle-button add">+</span> Watchlist</button>
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
                    let ids = JSON.parse(localStorage.getItem('ids')) || []
                    if (!ids.includes(e.target.id)){
                    ids.unshift(e.target.id)
                    localStorage.setItem('ids', JSON.stringify(ids))
                    window.location.href = 'watchlist.html'
                    }
                })
            }
            })

        }
    }
    })
})
