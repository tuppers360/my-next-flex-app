import React from "react";
import Head from "next/head";
import styles from "./layout.module.scss";

const Layout = ({ children, title = "Flex App" }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <header>
      <h2>
        <a href="#">Flex App</a>
      </h2>
      <nav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
    </header>
    {children}
    <footer></footer>
  </>
);

export default Layout;
