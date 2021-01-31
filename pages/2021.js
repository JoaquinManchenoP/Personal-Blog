import React from "react";

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
    <div className="myapp mx-96 ">
      <div>
        {allBands.map((band) => (
          <div className="pt-16 pb-16 pl-24" li={band.sys.id}>
            <BandCard band={band} />
          </div>
        ))}
      </div>
    </div>
  );
}
