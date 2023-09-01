const thisMovieInfo = {
  homeMovie: [
    {
      id: "movie-uuid-12",
      movie_name: "Piku",
      year: 2015,
      score: 7.6,
      favorite: true,
      viewed: false,
    },
  ],

  cast: [
    {
      id: "cast-uuid-0",
      cast_name: "Shoojit Sircar",
      cast_role: "Director",
    },
    {
      id: "cast-uuid-1",
      cast_name: "Deepika Paduko...",
      cast_role: "As Piku",
    },
    {
      id: "cast-uuid-2",
      cast_name: "Amitabh Bacchan",
      cast_role: "As Bhashkor Ba...",
    },
    {
      id: "cast-uuid-3",
      cast_name: "Irrfan Khan",
      cast_role: "As Rana",
    },
    {
      id: "cast-uuid-4",
      cast_name: "Moushumi Chat...",
      cast_role: "Choobhi Maasi",
    },
  ],

  similar: [
    {
      id: "movie-uuid-6",
      movie_name: "Masaan",
      year: 2015,
      score: 8.1,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-20",
      movie_name: "Dil Dhadakne do",
      year: 2004,
      score: 8.2,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-21",
      movie_name: "Aligarh",
      year: 2018,
      score: 8.2,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-22",
      movie_name: "Karwaan",
      year: 2021,
      score: 8.8,
      favorite: false,
      viewed: false,
    },
  ],
};

const cast = [
  {
    id: "cast-uuid-0",
    cast_name: "Shoojit Sircar",
    cast_role: "Director",
  },
  {
    id: "cast-uuid-1",
    cast_name: "Deepika Paduko...",
    cast_role: "As Piku",
  },
  {
    id: "cast-uuid-2",
    cast_name: "Amitabh Bacchan",
    cast_role: "As Bhashkor Ba...",
  },
  {
    id: "cast-uuid-3",
    cast_name: "Irrfan Khan",
    cast_role: "As Rana",
  },
  {
    id: "cast-uuid-4",
    cast_name: "Moushumi Chat...",
    cast_role: "Choobhi Maasi",
  },
];

const similar = [
  {
    id: "movie-uuid-6",
    movie_name: "Masaan",
    year: 2015,
    score: 8.1,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-20",
    movie_name: "Dil Dhadakne do",
    year: 2004,
    score: 8.2,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-21",
    movie_name: "Aligarh",
    year: 2018,
    score: 8.2,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-22",
    movie_name: "Karwaan",
    year: 2021,
    score: 8.8,
    favorite: false,
    viewed: false,
  },
];

function renderCast(castObject) {
  if (!castObject || typeof castObject !== "object") {
    return;
  }

  let castNameURL = castObject.cast_name.split(" ").join("-");

  return `<div class="cast-card w-1/4">
            <img
                class="w-10/12 aspect-[3/4] 2xl:rounded-xl rounded-lg border"
                src="./public/images/Piku/Piku-cast/${castNameURL}.png"
                alt="${castObject.cast_name}"
            />
            <h4 class="cast-name pt-2 text-sm font-semibold">
                ${castObject.cast_name}
            </h4>
            <p class="cast-role text-sm text-slate-700">${castObject.cast_role}</p>
        </div>`;
}

function renderMore(cardObject) {
  if (!cardObject || typeof cardObject !== "object") {
    return;
  }

  let movieNameURL = cardObject.movie_name.split(" ").join("-");

  return `<div class="movie-card md:w-1/4 sm:w-1/2 w-full ">
            <img
                class="w-full pr-1 aspect-[5/3] rounded-lg"
                src="./public/images/Piku/Piku-more-movies/${movieNameURL}.png"
                alt="${cardObject.movie_name}"
            />
        </div>`;
}

// function renderCards(movieList) {
//     const getMovieListName = varObj => Object.keys(varObj)[0]
//     const movieListName = getMovieListName({movieList})
//     const movieListElement = document.getElementsByClassName(movieListName)[0]
//     let renderedMovies = []
//     for (let i = 0; i < movieLists.mustwatch.length; i++) {
//         renderedMovies.push(renderCard(movieLists.mustwatch[i]))
//     }
//     movieListElement.innerHTML = renderedMovies.join('\n')
// }

function renderCards() {
  // for (let key in movieLists) {
  //     const movieListElement = document.getElementsByClassName(key)[0]
  //     let renderedMovies = []
  //     for (let i = 0; i < key.length; i++) {
  //         renderedMovies.push(renderCard(key[i]))
  //     }
  //     movieListElement.innerHTML = renderedMovies.join('\n')
  // }
  console.log("render cards is being run");
  const castListElement = document.getElementsByClassName("cast-list")[0];
  console.log(castListElement);
  let renderedCast = [];
  for (let i = 0; i < cast.length; i++) {
    renderedCast.push(renderCast(cast[i]));
  }
  castListElement.innerHTML = renderedCast.join("\n");

  const similarListElement =
    document.getElementsByClassName("simliar-movies")[0];
  console.log(similarListElement);
  let similarMovies = [];
  for (let i = 0; i < similar.length; i++) {
    similarMovies.push(renderMore(similar[i]));
  }
  similarListElement.innerHTML = similarMovies.join("\n");
}

// renderCards(movieLists.mustwatch)
// renderCards(movieLists.recommended)
// renderCards(movieLists.classics)

renderCards();
