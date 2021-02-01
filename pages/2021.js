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
      className="myapp mx-96  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        {allBands.map((band) => (
          <div className="pt-16 pb-16 pl-24" li={band.sys.id}>
            <BandCard band={band} />
          </div>
        ))}
      </div>
      <div className="footer pl-24 pb-12">
        <Profile />
      </div>
    </motion.div>
  );
}
