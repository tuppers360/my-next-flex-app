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

      <section className={styles.aboutarea} id="about">
        <h3 className={styles.sectiontitle}>About Us</h3>
        <ul className={styles.aboutcontent}>
          <li className={styles.aboutleft}></li>
          <li className={styles.aboutright}>
            <h2>About Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolorum saepe libero laboriosam aliquam hic dolorem
              maxime rerum in. Aperiam et alias, ullam tenetur voluptatum
              voluptates ipsam molestiae quidem iure.
            </p>
            <a href="" className={styles.aboutbtn}>
              Learn more
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
