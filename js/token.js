const Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjRiYjg5YmQxY2UxNjRlMzk1MTdlYmI1M2QzOTk5OCIsIm5iZiI6MTc5MDU4NjIzOC4xNzIsInN1YiI6IjZhYmEyZDdlZDYxY2JiNjhiYzFiNzNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZ-cFlK5JkUft2uC76PzXrCG7M41kcdgizI9ZgjXhww"

const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const faceUrl = "https://image.tmdb.org/t/p/w185";

const options = {
    headers: {
        accept: `aplication/json`,
        Authorization: "Bearer " + Token,
    },
};
