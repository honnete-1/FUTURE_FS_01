import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top">
          Honnete
        </a>

        <nav className={styles.links}>
          <a className={styles.link} href="#about">About</a>
          <a className={styles.link} href="#skills">Skills</a>
          <a className={styles.link} href="#projects">Projects</a>
          <a className={styles.link} href="#contact">Contact</a>
          <a className={styles.link} href="#blog">Blog</a>
        </nav>
      </div>
    </header>
  );
}
