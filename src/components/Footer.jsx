export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {year} Honnete — Built with curiosity, consistency, and care.
      </p>

      <a href="#top" className="footer__link">
        Back to top ↑
      </a>
    </footer>
  );
}
