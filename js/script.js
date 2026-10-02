
// Viser, hvilken film der er i biograferne nu
fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
    .then(res => res.json())
    .then((data) => {
        data.results.forEach((movies) => {
            nowShowing.innerHTML += `
            <a class="card" href="detail.html?id=${movies.id}">
            <img src ="${imgUrl + movies.poster_path}" alt="${movies.title}"/>
            <h3>${movies.title}</h3>
            <p class="rating"><span class="star">★</span> ${movies.vote_average.toFixed(1)}/10</p>
            </a>
            `
        });
    });

// Popular-genre
fetch(baseUrl + '/genre/movie/list', options)
    .then((res) => res.json())
    .then((genreData) => {
        fetch(baseUrl + '/movie/popular', options)
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach((movies) => {
                    let pop = "";
                    movies.genre_ids.slice(0, 3).forEach((id) => {
                        const genre = genreData.genres.find((g) => g.id === id)
                        pop += `<li>${genre.name}</li>`
                        console.log(genre);
                    });

                    popular.innerHTML += `
                        <a class="pop-card" href="detail.html?id=${movies.id}">
                        <img src="${imgUrl}${movies.poster_path}" alt="${movies.title}">    
                        <div>   
                        <h3>${movies.title}</h3>
                        <p class="rating"><span class="star">★</span>${movies.vote_average.toFixed(1)}/10</p>
                        <ul class="pop">${pop}</ul>
                        </a>
                    `

                });
            });
    });