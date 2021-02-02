import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Profile from "../public/components/Profile.component";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="lg:mx-96 md:mx-52 sm:mx-40 xs:mx-12  h-screen pt-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container space-y-12 ">
        <div className="profile pb-6">
          <Profile />
        </div>
        <div className="entry ">
          <Link href="/2021">
            <div style={{ cursor: "pointer" }}>
              <div className="title text-pink-400 text-3xl font-londrina hover:text-pink-500  ">
                <h2> My favorite Bands of 2021</h2>
              </div>
              <div className="description text-white details space-y-2 font-extralight pt-4 tracking-wider text-sm ">
                <p>January 24, 2021</p>
                <p>What I've been listening to recently</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="entry">
          <Link href="/myMovies">
            <div style={{ cursor: "pointer" }}>
              <div className="title text-pink-400 text-3xl font-londrina hover:text-pink-500">
                <h2>Movies I would recomend</h2>
              </div>
              <div className="description text-white details space-y-2 font-extralight pt-4 tracking-wider text-sm ">
                <p>February 3, 2021</p>
                <p>Movies I think everyone should watch</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
