/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Loginbg from "./Login-bg.jpg";
import Navbar from "./Navbar.js";

const products = [
  
  {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
},
{
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
    "Title": "Avengers: Age of Ultron",
    "Year": "2015",
    "imdbID": "tt2395427",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
}
  // More products...
];
export default function App() {
  return (
    <div className="relative bg-[url('./background1.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black bg-opacity-60 rounded">
        <div className="relative">
          <Navbar />
          <div className="flex flex-col items-center justify-left">
            <main className="lex flex-col items-center justify-left  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex flex-col items-center justify-center lg:text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span> <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>

              <hr className="w-full bg-white md-3 mt-3 "></hr>

              <div className="card rounded-none grid grid-flow-col auto-cols-max">
                {products.map((product) => (
                  <a key={product.Title} className="group">
                    <div className="mt-3 md-3 sm:mt-3 sm:ml-3">
                      <img src={product.Poster} alt={product.Poster} className="mt-3 sm:mt-0 sm:ml-3 weight-30 height-50" />
                      
                    <a href="" className="px-4 text-white font-medium">{product.Title}</a>
                    <p  className="px-4 justify-left text-white">{product.Year}</p>
                    </div>
                  </a>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
      {/* footer */}
      <div className="bg-black bg-opacity-60">
        <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>

      <div className="bg-black bg-opacity-60">
        <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      <div className="bg-black bg-opacity-60">
        <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
    </div>
  );
}
