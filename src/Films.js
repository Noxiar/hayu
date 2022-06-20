import Navbar from "./Navbar";

const products = [
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Thor",
    Year: "2011",
    imdbID: "tt0800369",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Ragnarok",
    Year: "2017",
    imdbID: "tt3501632",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  },
  {
    Title: "Thor: The Dark World",
    Year: "2013",
    imdbID: "tt1981115",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
  },
  {
    Title: "Team Thor",
    Year: "2016",
    imdbID: "tt6016776",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Tales of Asgard",
    Year: "2011",
    imdbID: "tt1667903",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Team Thor: Part 2",
    Year: "2017",
    imdbID: "tt6599818",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Valhalla - The Legend of Thor",
    Year: "2019",
    imdbID: "tt8956872",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTA0OGZjODctYjg2ZS00YWQ1LWEyZjgtMDZkNmYyZDAwYzg0XkEyXkFqcGdeQXVyMzcwNjA5Mzg@._V1_SX300.jpg",
  },
  {
    Title: "Almighty Thor",
    Year: "2011",
    imdbID: "tt1792794",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Finding Korg",
    Year: "2018",
    imdbID: "tt8513006",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg",
  },
  {
    Title: "X-Men: Days of Future Past",
    Year: "2014",
    imdbID: "tt1877832",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "X-Men: First Class",
    Year: "2011",
    imdbID: "tt1270798",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg",
  },
  {
    Title: "X-Men",
    Year: "2000",
    imdbID: "tt0120903",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "X2: X-Men United",
    Year: "2003",
    imdbID: "tt0290334",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg",
  },
  {
    Title: "X-Men: The Last Stand",
    Year: "2006",
    imdbID: "tt0376994",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    Title: "X-Men Origins: Wolverine",
    Year: "2009",
    imdbID: "tt0458525",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    Title: "X-Men: Apocalypse",
    Year: "2016",
    imdbID: "tt3385516",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg",
  },
  {
    Title: "X-Men: Dark Phoenix",
    Year: "2019",
    imdbID: "tt6565702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
  },
  {
    Title: "The Fast and the Furious",
    Year: "2001",
    imdbID: "tt0232500",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "The Fast and the Furious: Tokyo Drift",
    Year: "2006",
    imdbID: "tt0463985",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
  },
  {
    "Title": "Captain Marvel",
    "Year": "2019",
    "imdbID": "tt4154664",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
},
{
    "Title": "Marvel One-Shot: Agent Carter",
    "Year": "2013",
    "imdbID": "tt3067038",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
    "Title": "Marvel One-Shot: All Hail the King",
    "Year": "2014",
    "imdbID": "tt3438640",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
    "Title": "Marvel One-Shot: Item 47",
    "Year": "2012",
    "imdbID": "tt2247732",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
    "Title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
    "Year": "2011",
    "imdbID": "tt2011109",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
    "Title": "Marvel One-Shot: The Consultant",
    "Year": "2011",
    "imdbID": "tt2011118",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
    "Title": "Marvel Studios: Legends",
    "Year": "2021–",
    "imdbID": "tt13650480",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzdiNGVlZGYtMGY1Ni00OGU1LTlmYzEtZDBjYjk3OGM3YTNkXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg"
},
{
    "Title": "Lego Marvel Super Heroes",
    "Year": "2013",
    "imdbID": "tt2620204",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5ODA2NTI2M15BMl5BanBnXkFtZTgwNTcxMzU1MDE@._V1_SX300.jpg"
},
{
    "Title": "Marvel Studios: Assembled",
    "Year": "2021–",
    "imdbID": "tt14094206",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWMyNWYyMmYtZjNiZi00MzFmLTg2MjYtYWEzZWY1MzBhY2I2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
}
  // More products...
];

export default function Example() {
  return (
    <div className="bg-magenta bg-center bg-no-repeat ">
      <div className="bg-black bg-opacity-60">

      <Navbar />
      <div className=" py-8 px-8 mt-4 md-4">
        <h1 className="text-white font-medium font-bold ">Movie List :</h1>
        <hr className="md-4 mt-4"></hr>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 md-4 mt-4">
          {products.map((product) => (
            <a key={product.Title} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={product.Poster} alt={product.Poster} className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="px-2 text-sm text-white">{product.Year}</h3>
              <p className="px-2 text-lg font-medium text-white">{product.Type}</p>
            </a>
          ))}
        </div>
      </div>
              </div>
    </div>
  );
}
