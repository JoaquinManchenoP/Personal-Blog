import "../styles/index.css";
import MainTitle from "../public/components/MainTitle.component";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-800">
      <MainTitle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
