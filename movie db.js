
/* 
https://codepen.io/antoncabon/pen/mdBjNVq
*/ 
let noOfMovies=20;
let movies = [];
readMovieDatabase();

function readMovieDatabase() {
    const urlForData = "https://api.themoviedb.org/3/trending/movie/day?api_key=d5c106b7e0852dc4ca8fdba221f94de2&page=1";
    fetch(urlForData)
        .then((response) => response.json())
        .then((json) => {
            json["results"].forEach((item) => {
                movies.push(item);
            });
            createList();
        });
}
let createList = _ => {
    const posterPath = "https://image.tmdb.org/t/p/w185/";
    const backdropPath = "https://image.tmdb.org/t/p/w780/";
    /* Main action of function */
    let setDataCardNoX = no => {
        /* helper functions */
        //let setCardDataText = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].innerHTML = cardData[no][dataName];
        let setCardDataText = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].innerHTML = movies[no][dataName];
        let setCardNo = (no, htmlName) => cardsList[no].getElementsByClassName(htmlName)[0].innerHTML = no+1;
        let setCardDataSrc = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].setAttribute("src",  posterPath+movies[no][dataName]);
        let setCardDataLink = (no, htmlName, dataName) => cardsList[no].getElementsByClassName(htmlName)[0].setAttribute("href", cardData[no][dataName]);
        let setCardParentBackImage = (no, dataName) => cardsList[no].style.backgroundImage = "url("+backdropPath +movies[no][dataName] + ")";
        /* set the values of the card */
        setCardDataText(no, "card-title", "title");
        setCardDataSrc(no, "card-poster", "poster_path");
        setCardNo(no, "card-no");
        setCardParentBackImage(no, "backdrop_path");
    }
    let getFirstCard = (no, htmlName) => cardsList[no].getElementsByClassName(htmlName);
    // Read first and template: 'card'
    const firstCard = document.getElementsByClassName("card")[0];
    // Read parent:'cards'
    const cards = document.getElementsByClassName("cards")[0];
    // Add new cards 'card' to the parent=container 'cards'
    for (let i = 1; i <= noOfMovies - 1; i++)
        cards.appendChild(firstCard.cloneNode(true));
    // Fill all childs 'cards' with the data
    const cardsList = document.getElementsByClassName("card");
    for (let i = 0; i < noOfMovies ; i++)
        setDataCardNoX(i);
}



