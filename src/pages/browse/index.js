import Link from "next/link";

import PreviewCard from "../../../components/PreviewCard";

import { BellIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import NetflixLogo from "../../../public/images/netflix-logo.svg";

import requests from "../../../services/requests";
import { useEffect, useState } from "react";

const baseURL = "https://api.themoviedb.org/3";
const imageURL = "https://image.tmdb.org/t/p/original/";

export default function Home() {
  //Pedir películas toprated
  const [heroMovie, setHeroMovie] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [genresMovies, setGenresMovies] = useState();

  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTopRated}`)
      .then((res) => res.json())
      .then((data) => {
        setHeroMovie(data.results[0]);
      });
  }, []);

  //Pedir lista de películas trending
  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTrendingMovies}`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.results);
      });
  });

  return (
    <div className="bg-black w-full flex flex-col overflow-y-auto">
      <header className="absolute w-full z-10 flex flex-row items-center justify-between px-8 pt-4">
        <div className="flex flex-row items-center relative z-10">
          <NetflixLogo className="scale-[.65]" />
          <nav className="ml-8">
            <ul className="flex flex-row gap-6 text-sm">
              <li>
                <Link href="#" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  New & Popular
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  My List
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Browse by Language
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-4 relative z-10">
          <MagnifyingGlassIcon className={"h-5 w-5 text-white"} />
          <Link href={"#"} className="text-white text-sm">
            Kids
          </Link>
          <BellIcon className={"h-5 w-5 text-white"} />
          <img
            className="inline-block h-8 w-8 rounded-sm"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt=""
          />
          <img
            className="inline-block h-2 w-2 rounded-md"
            src="../images/arrow.svg"
            alt=""
          />
        </div>
        <div className="absolute h-16 w-full top-0 left-0 bg-gradient-to-b from-black/70"></div>
      </header>
      <section className="w-2/4 ml-10 mt-20 relative z-10 text-white mb-5">
        <div className="flex items-center mb-10">
          <img
            className="scale-50 mr-1"
            src="../images/n-logo.svg"
            alt="Logo de Netflix"
          />
          <h1 className="tracking-[.4rem] text-l font-light">MOVIES</h1>
        </div>
        <div className="h-fit text-[3rem] mb-2">
          {heroMovie?.original_title}
        </div>
        <div className="flex items-center mb-2">
          <img
            className="scale-50"
            src="../images/top10-logo.svg"
            alt="SVG image"
          />
          <h2 className="text-2xl">#1 in TV Shows Today</h2>
        </div>
        <div>
          <p className="break-words text-justify text-sm">
            {heroMovie?.overview}
          </p>
        </div>
        <div className="flex gap-4 mt-5">
          <button className="flex items-center w-28 h-10 bg-white text-black text-xl justify-center rounded hover:bg-white/70">
            <PlayIcon className="h-6 w-6 mr-2" />
            Play
          </button>
          <button className="flex items-center w-36 h-10 bg-gray-700/90 justify-center rounded hover:bg-gray-700/70">
            <InformationCircleIcon className="h-6 w-6 mr-2" />
            More Info
          </button>
        </div>
      </section>
      <div className="absolute w-full h-screen bg-white/80 z-0 top-0 left-0 overflow-hidden">
        <div
          className={"bg-cover bg-center w-full h-full brightness-[.75]"}
          style={{
            backgroundImage: `url(${imageURL}${heroMovie?.backdrop_path})`,
          }}
        ></div>
        <div className="absolute z-10 h-24 w-full bottom-0 left-0 bg-gradient-to-t from-black"></div>
      </div>
      <h2 className={'text-white text-xl z-10 px-10 mt-20'}>Trending Movies</h2>
      <PreviewCard trendingMovies={trendingMovies} />
    </div>
  );
}
