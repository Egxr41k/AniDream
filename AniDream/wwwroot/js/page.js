'use strict';

function GetAnimeJSON() {
    return fetch("https://localhost:7060/Home/GetTop")
        .then(data => data.json());
}

const Id = document.querySelector('.main').getAttribute('id');
console.log(Id);

GetAnimeJSON().then(animeData => {

    console.log(animeData); 

    let Anime;
    animeData.forEach(object => {
        if (object.mal_id == Id) {
            Anime = object;
        }
    });


    console.log(Anime);

    // setting the card img
    document.querySelector('img')
        .src = Anime.images.jpg.image_url;
    
    // setting the card title
     document.querySelector('.card__title')
         .innerHTML = Anime.title;
    
    // setting the card rate
    document.querySelector('.card__rate')
        .innerHTML = "${Anime.score}★";
    
    // setting the card genre
    let genres = [];
    Anime.genres.forEach(item => {
        genres.push(item.name)
    });
    
    document.querySelector("#genre")
        .innerHTML = (genres).join(', ');
    
    // setting the card age
    document.getElementById("age")
        .innerHTML = Anime.rating;
    
    // setting the card year
    document.getElementById("year")
        .innerHTML = Anime.year;
    
    // setting the card description
        document.getElementById("description")
        innerHTML = Anime.synopsis;
    
    // setting the trailer link
    document.querySelector('.player')
        .src = Anime.trailer.embed_url;
});