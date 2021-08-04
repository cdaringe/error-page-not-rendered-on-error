import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  throw new Error("whoops, i have a bug"); // simulate an unintended bug
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = () => ({ ok: true });

export default MyApp;
