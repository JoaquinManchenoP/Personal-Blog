import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

const RICHTEXT_OPTIONS_PARAGRAPH = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <div className="paragraph my-20 pl-16">
          <p>{children}</p>
        </div>
      );
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      {
        console.log("https:" + node.data.target.fields.file.url);
      }
      return (
        <img
          className="h-96 w-72 mx-auto my-16 rounded-lg shadow-2xl"
          src={"https:" + node.data.target.fields.file.url}
        ></img>
      );
    },
  },
};

export default function MovieCard({ movie }) {
  console.log(movie.fields.movieTitle);
  return (
    <div className="movieCard ">
      <div className="movieTitle text-3xl pb-2 font-londrina font-light pt-10 ">
        <h1>{movie.fields.movieTitle}</h1>
      </div>
      <div className="flex">
        {documentToReactComponents(
          movie.fields.movieDescription,
          RICHTEXT_OPTIONS_PARAGRAPH
        )}
      </div>
    </div>
  );
}
