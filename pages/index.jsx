import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "./../components/layout/index";

export default function Home() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <section className={styles.bannerarea}>
        <div className={styles.bannerimg}></div>
        <h1>Flexbox Website</h1>
        <h3>Responsive Web Design</h3>
        <a href="#" className={styles.bannerbutton}>
          Contact Us
        </a>
      </section>
    </Layout>
  );
}
