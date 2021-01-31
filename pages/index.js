import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Profile from "../public/components/Profile.component";

export default function Home() {
  return (
    <div className="mx-96 h-screen pt-8 space-y-12 pl-24 ">
      <div className="profile pb-6">
        <Profile />
      </div>
      <div className="entry">
        <Link href="/2021">
          <div style={{ cursor: "pointer" }}>
            <div className="title text-pink-400 text-3xl font-londrina ">
              <h2>Bands 2021</h2>
            </div>
            <div className="description text-white details space-y-2 font-extralight pt-4 tracking-wider text-sm ">
              <p>Todays date</p>
              <p>A collection of my favorite new bands</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="entry">
        <Link href="/myMovies">
          <div style={{ cursor: "pointer" }}>
            <div className="title text-pink-400 text-3xl font-londrina">
              <h2>Movies 2021</h2>
            </div>
            <div className="description text-white details space-y-2 font-extralight pt-4 tracking-wider ext-sm ">
              <p>Todays date</p>
              <p>Favorite quarentine movies</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
