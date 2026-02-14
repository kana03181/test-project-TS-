import { Link } from "react-router-dom";
import components from "./Header.module.css";

export default function Header() {
  return (
    <header className={components.header}>
      <div className={components.headerInner}>
        <div className={components.logo}>
          <Link to="/" className={components.logoLink}><h1>Blog</h1></Link>
        </div>
        <nav className={components.nav}>
          <div className={components.navInner}>
            <ul className={components.navList}>
              <li className={components.navListItem}>
                <Link to="/contact" className={components.navListLink}>お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
