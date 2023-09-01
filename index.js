const movieLists = {
  homeMovie: [
    {
      id: "movie-uuid-0",
      movie_name: "Tamasha",
      year: 2015,
      score: 7.3,
      favorite: false,
      viewed: false,
    },
  ],

  mustwatch: [
    {
      id: "movie-uuid-1",
      movie_name: "Kumbalangi Nights",
      year: 2019,
      score: 8.6,
      favorite: false,
      viewed: false,
    },
    {
      id: "movie-uuid-2",
      movie_name: "The Lunchbox",
      year: 2013,
      score: 7.7,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-3",
      movie_name: "Haider",
      year: 2014,
      score: 8.4,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-4",
      movie_name: "Aamis",
      year: 2019,
      score: 8.0,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-5",
      movie_name: "Court",
      year: 2014,
      score: 7.6,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-6",
      movie_name: "Masaan",
      year: 2015,
      score: 8.1,
      favorite: true,
      viewed: false,
    },
  ],

  recommended: [
    {
      id: "movie-uuid-8",
      movie_name: "96",
      year: 2018,
      score: 8.6,
      favorite: false,
      viewed: false,
    },
    {
      id: "movie-uuid-9",
      movie_name: "Swades",
      year: 2004,
      score: 8.2,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-10",
      movie_name: "Andhadhun",
      year: 2018,
      score: 8.2,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-11",
      movie_name: "Sarpatta Paramba...",
      year: 2021,
      score: 8.8,
      favorite: false,
      viewed: false,
    },
    {
      id: "movie-uuid-12",
      movie_name: "Piku",
      year: 2015,
      score: 7.6,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-13",
      movie_name: "Hotel Mumbai",
      year: 2018,
      score: 7.6,
      favorite: false,
      viewed: false,
    },
  ],

  classics: [
    {
      id: "movie-uuid-14",
      movie_name: "Dil Chahta Hai",
      year: 2001,
      score: 8.1,
      favorite: false,
      viewed: false,
    },
    {
      id: "movie-uuid-15",
      movie_name: "3 Idiots",
      year: 2009,
      score: 8.5,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-16",
      movie_name: "Rockstar",
      year: 2011,
      score: 7.8,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-17",
      movie_name: "Jaane Tu... Ya Jaa...",
      year: 2008,
      score: 7.4,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-18",
      movie_name: "Dilwale Dulhaniya...",
      year: 1995,
      score: 7.2,
      favorite: true,
      viewed: false,
    },
    {
      id: "movie-uuid-19",
      movie_name: "My Name is Khan",
      year: 2010,
      score: 8.0,
      favorite: true,
      viewed: false,
    },
  ],
};

const mustwatch = [
  {
    id: "movie-uuid-1",
    movie_name: "Kumbalangi Nights",
    year: 2019,
    score: 8.6,
    favorite: false,
    viewed: false,
  },
  {
    id: "movie-uuid-2",
    movie_name: "The Lunchbox",
    year: 2013,
    score: 7.7,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-3",
    movie_name: "Haider",
    year: 2014,
    score: 8.4,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-4",
    movie_name: "Aamis",
    year: 2019,
    score: 8.0,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-5",
    movie_name: "Court",
    year: 2014,
    score: 7.6,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-6",
    movie_name: "Masaan",
    year: 2015,
    score: 8.1,
    favorite: true,
    viewed: false,
  },
];

const recommended = [
  {
    id: "movie-uuid-8",
    movie_name: "96",
    year: 2018,
    score: 8.6,
    favorite: false,
    viewed: false,
  },
  {
    id: "movie-uuid-9",
    movie_name: "Swades",
    year: 2004,
    score: 8.2,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-10",
    movie_name: "Andhadhun",
    year: 2018,
    score: 8.2,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-11",
    movie_name: "Sarpatta Paramba...",
    year: 2021,
    score: 8.8,
    favorite: false,
    viewed: false,
  },
  {
    id: "movie-uuid-12",
    movie_name: "Piku",
    year: 2015,
    score: 7.6,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-13",
    movie_name: "Hotel Mumbai",
    year: 2018,
    score: 7.6,
    favorite: false,
    viewed: false,
  },
];

const classics = [
  {
    id: "movie-uuid-14",
    movie_name: "Dil Chahta Hai",
    year: 2001,
    score: 8.1,
    favorite: false,
    viewed: false,
  },
  {
    id: "movie-uuid-15",
    movie_name: "3 Idiots",
    year: 2009,
    score: 8.5,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-16",
    movie_name: "Rockstar",
    year: 2011,
    score: 7.8,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-17",
    movie_name: "Jaane Tu... Ya Jaa...",
    year: 2008,
    score: 7.4,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-18",
    movie_name: "Dilwale Dulhaniya...",
    year: 1995,
    score: 7.2,
    favorite: true,
    viewed: false,
  },
  {
    id: "movie-uuid-19",
    movie_name: "My Name is Khan",
    year: 2010,
    score: 8.0,
    favorite: true,
    viewed: false,
  },
];

function renderCard(cardObject) {
  if (!cardObject || typeof cardObject !== "object") {
    return;
  }

  let favStateClass = "";
  let viewedStateClass = "";
  let movieNameURL = cardObject.movie_name.split(" ").join("-");

  if (cardObject.favorite) {
    favStateClass = "text-red-600";
  } else if (!cardObject.favorite) {
    favStateClass = "";
  }

  if (cardObject.viewed) {
    viewedStateClass = "text-red-600";
  } else if (!cardObject.viewed) {
    viewedStateClass = "";
  }

  return `<div class="movie-card lg:w-1/6 md:w-1/4 sm:w-1/2 w-full rounded-lg">
            <img class="w-full pr-1" src="./public/images/Movies/${movieNameURL}.png" alt="${cardObject.movie_name}">
            <h4 class="card-title font-semibold">${cardObject.movie_name}</h4>
            <p class="card-year text-sm">${cardObject.year}</p>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <img class="card-imdb w-1/2 h-3/4 pr-2" src="./public/images/IMDb.png" alt="">
                    <p class="card-imdb-rating text-sm font-semibold text-yellow-400">${cardObject.score}</p>
                </div>
                <div class="flex">
                    <!-- <a class="card-views" href=""><img src="./public/images/eye-11.svg" alt=""></a> -->
                    <a class="card-views pr-2 ${viewedStateClass}" href=""><i class="fa-regular fa-eye"></i></a>
                    <!-- <a class="card-heart" href=""><img src="./public/images/image-4.png" alt=""></a> -->
                    <a class="card-heart pr-4 ${favStateClass}" href=""><i class="fa-solid fa-heart"></i></a>
                </div>
            </div>
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

  const movieListElement = document.getElementsByClassName("mustwatch")[0];
  let renderedMovies = [];
  for (let i = 0; i < mustwatch.length; i++) {
    renderedMovies.push(renderCard(mustwatch[i]));
  }
  movieListElement.innerHTML = renderedMovies.join("\n");

  const recommendedListElement =
    document.getElementsByClassName("recommended")[0];
  let recommendedMovies = [];
  for (let i = 0; i < recommended.length; i++) {
    recommendedMovies.push(renderCard(recommended[i]));
  }
  recommendedListElement.innerHTML = recommendedMovies.join("\n");

  const classicListElement = document.getElementsByClassName("classics")[0];
  let classicMovies = [];
  for (let i = 0; i < classics.length; i++) {
    classicMovies.push(renderCard(classics[i]));
  }
  classicListElement.innerHTML = classicMovies.join("\n");
}

// renderCards(movieLists.mustwatch)
// renderCards(movieLists.recommended)
// renderCards(movieLists.classics)

renderCards();
