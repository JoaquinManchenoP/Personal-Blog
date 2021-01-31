import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS_PARAGRAPH = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="pb-4">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      {
        console.log("https:" + node.data.target.fields.file.url);
      }
      return (
        <img
          className="h-96 w-96 mx-auto my-16 rounded-lg shadow-2xl"
          src={"https:" + node.data.target.fields.file.url}
        ></img>
      );
    },
  },
};

export default function BandCard({ band }) {
  return (
    <div className="text-white ">
      <div className="title text-4xl font-londrina font-light">
        <h1>My favorite Bands of 2021 so far...</h1>
      </div>
      <div className="date font-extralight pt-2">
        <p>todays date</p>
      </div>
      <p className="text-3xl pb-16 font-londrina font-light pt-10 ">
        {band.fields.bandName}
      </p>
      <div className="">
        {documentToReactComponents(
          band.fields.content,
          RICHTEXT_OPTIONS_PARAGRAPH
        )}
      </div>
    </div>
  );
}
