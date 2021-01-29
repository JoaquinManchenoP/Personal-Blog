import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <ul>
        <Link href="/2021">
          <li style={{ cursor: "pointer" }}>Favorite Songs of 2021 so far</li>
        </Link>
        <Link href="/2020">
          <li style={{ cursor: "pointer" }}>My favorite Songs of all time</li>
        </Link>
      </ul>
    </div>
  );
}
