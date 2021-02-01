import "../styles/index.css";
import MainTitle from "../public/components/MainTitle.component";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-800">
      <AnimatePresence exitBeforeEnter>
        <MainTitle />
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
