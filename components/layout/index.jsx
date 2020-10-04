import React from "react";
import Head from "next/head";
import Nav from "../nav";

const Layout = ({ children, title = "My Next Flex App" }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer></footer>
  </>
);

export default Layout;
