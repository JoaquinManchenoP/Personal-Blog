import React from "react";
import Profile from "../public/components/Profile.component";
import { motion } from "framer-motion";

import BandCard from "../public/components/BandCard.component";

let client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "myBands",
  });

  return {
    props: {
      allBands: data.items,
    },
  };
}

export default function TwentyTwentyOne({ allBands }) {
  return (
    <motion.div
      className="myapp lg:mx-72 md:mx-28 sm:mx-16 xs:mx-12  text-white pt-20 font-extralight tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title lg:pl-24 md:pl-24 sm:pl-24">
        <div className="text-5xl font-londrina font-light ">
          <h1>My favorite Bands of 2021 so far...</h1>
        </div>
        <div className="date font-extralight pt-4">
          <p>January 24, 2021</p>
        </div>
      </div>
      <div>
        {allBands.map((band) => (
          <div className="pt-16 pb-8 pl-24 xs:pr-20" key={band.sys.id}>
            <BandCard band={band} />
          </div>
        ))}
      </div>
      <div className="footer pl-24 py-20">
        <Profile />
      </div>
    </motion.div>
  );
}
