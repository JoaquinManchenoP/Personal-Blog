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
      className="myMovies lg:mx-96 md:mx-52 sm:mx-40 xs:mx-12 text-white pt-20 font-extralight tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title__section">
        <div className="title text-5xl font-londrina font-light">
          <h1>Movies I would recomend</h1>
        </div>
        <div className="post__date date font-extralight pt-4">
          <p>february, 3 2021</p>
        </div>
      </div>
      <div className="content">
        {allMovies.map((movie) => (
          <div className="movieCard pt-16">
            {console.log(movie.fields.movieTitle)}
            <MovieCard movie={movie} key={movie.sys.id} />
          </div>
        ))}
      </div>
      <div className="footer py-16">
        <Profile />
      </div>
    </motion.div>
  );
}
