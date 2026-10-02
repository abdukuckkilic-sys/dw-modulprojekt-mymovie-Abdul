
//Detalje siden
const id = new URLSearchParams(location.search).get('id');
const app = document.querySelector('#app');

fetch("${baseUrl}/movie/${id}", options)
    .then((res) => res.json())
    .then((movies) => {
        document.title = movies.title + ' – MyMovies';

        let pop = '';
        movies.genres.slice(0, 3).forEach((g) => (pop += `<li>${g.name}</li>`));

        let cast = '';
        movies.credits.cast.slice(0, 4).forEach((c) => {
            cast += `<li><img src="${faceUrl}${p.profile_path}" alt="${c.name}"><span>${p.name}</span></li>`;
        });

        app.innerHTML = `
      <header class="movies-billede"${movies.backdrop_path}')">
        <a class="tilbage-knap" href="index.html">←</a>
      </header>
      <section class="movies-info">
        <h1>${movies.title}</h1>
        <p class="rating"><span class="star">★</span> ${movies.vote_average.toFixed(1)}/10</p>
        <ul class="pop">${pop}</ul>
        `
    });

