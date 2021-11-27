import { Fragment } from "react";
import "../styles/globals.css";
import TopNav from "./components/layout/TopNav/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <TopNav></TopNav>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
