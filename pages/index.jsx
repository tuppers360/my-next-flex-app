import styles from "../styles/Home.module.scss";
import Layout from "./../components/layout/index";

export default function Home() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <section className={styles.banner_area}>
        <div className={styles.banner_img}></div>
        <h1>Flexbox Website</h1>
        <h3>Responsive Web Design</h3>
        <a href="#" className={styles.banner_button}>
          Contact Us
        </a>
      </section>

      <section className={styles.about_area} id="about">
        <h3 className={styles.section_title}>About Us</h3>
        <ul className={styles.about_content}>
          <li className={styles.about_left}></li>
          <li className={styles.about_right}>
            <h2>About Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolorum saepe libero laboriosam aliquam hic dolorem
              maxime rerum in. Aperiam et alias, ullam tenetur voluptatum
              voluptates ipsam molestiae quidem iure.
            </p>
            <a href="" className={styles.about_btn}>
              Learn more
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
