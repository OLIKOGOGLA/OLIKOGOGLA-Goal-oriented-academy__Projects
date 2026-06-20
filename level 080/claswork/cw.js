let movie = 'shrek'
let apiKey = "38c8a267e25940bf35aa75921cdd6af2"

fetch(`https://api.themoviedb.org/3/search/movie?api_key=
${apiKey}&query=${encodeURIComponent(movie)}`)
.then(res => res.json())
.then(items => {
        console.log(items);
    items.forEach(item => {
     let box = document.createElement("div");
     h1.textContent = item.results[0];

    let p = document.createElement("p");
     p.textContent = item.title;

    let p1 = document.createElement("p");
     p.textContent = item.release_date;   

    let p2 = document.createElement("p");
     p.textContent = item.original_language;

    let p3 = document.createElement("p");
     p.textContent = item.overview;

     let img = document.createElement("img");
     img.src = "https://image.tmdb.org/t/p/w400/"  + item.poster_path;
    })
    })