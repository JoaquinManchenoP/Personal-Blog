import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="myapp mx-80">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
