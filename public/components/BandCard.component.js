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
          className="lg:h-96 lg:w-96 mx-auto my-16 rounded-lg shadow-2xl"
          src={"https:" + node.data.target.fields.file.url}
        ></img>
      );
    },
  },
};

export default function BandCard({ band }) {
  return (
    <div className="text-white ">
      <p className="text-2xl font-extralight pb-8  pt-8  ">
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
