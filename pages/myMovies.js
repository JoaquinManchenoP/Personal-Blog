import React from "react";
import MovieCard from "../public/components/MovieCard";
import { motion } from "framer-motion";
import Profile from "../public/components/Profile.component";

let client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "movies",
  });

  return {
    props: {
      allMovies: data.items,
    },
  };
}

export default function myMovies({ allMovies }) {
  return (
    <motion.div
      className="myMovies xl:mx-96  md:mx-20 sm:mx-8 xs:mx-1  text-white pt-20 font-extralight tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title__section xl:pl-0  lg:pl-72 md:pl-32 sm:pl-0 xs:pl-2 ">
        <div className="title text-5xl font-londrina font-light xl:pl-0 lg:pl-4 ">
          <h1>Movies I would recomend</h1>
        </div>
        <div className="post__date date font-extralight pt-4  lg:pd-0 md:pd-0 sm:pl-0  xl:pl-0 lg:pl-4">
          <p>February, 3 2021</p>
        </div>
      </div>
      <div className="content">
        {allMovies.map((movie) => (
          <div className="movieCard pt-16 lg:flex-col ">
            {console.log(movie.fields.movieTitle)}
            <MovieCard movie={movie} key={movie.sys.id} />
          </div>
        ))}
      </div>
      <div className="footer py-16 ">
        <Profile />
      </div>
    </motion.div>
  );
}
