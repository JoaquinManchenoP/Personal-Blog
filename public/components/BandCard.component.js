import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS_PARAGRAPH = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="pb-4">{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      {
        console.log("https:" + node.data.target.fields.file.url);
      }
      return (
        <img
          className="h-60 w -60"
          src={"https:" + node.data.target.fields.file.url}
        ></img>
      );
    },
  },
};

export default function BandCard({ band }) {
  return (
    <div className="">
      <h1>{band.fields.bandName}</h1>
      <div className="">
        {documentToReactComponents(
          band.fields.content,
          RICHTEXT_OPTIONS_PARAGRAPH
        )}
      </div>
    </div>
  );
}
