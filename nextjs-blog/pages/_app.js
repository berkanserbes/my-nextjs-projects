import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/*
you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
*/
