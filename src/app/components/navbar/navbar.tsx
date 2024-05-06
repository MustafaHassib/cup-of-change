'use client';

import Link from 'next/link';
import styles from './navbar.module.scss';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo}`}>
        <h1>A cup of change</h1>
      </div>
      <ul className={`${styles.nav__list}`}>
        <li className={`${styles.nav__list__item}`}>
          <Link
            className={`${pathname === '/' && styles.active_item}`}
            href="./"
          >
            Home
          </Link>
        </li>
        <li className={`${styles.nav__list__item}`}>
          <Link
            className={`${pathname === '/about' && styles.active_item}`}
            href="about"
          >
            About us
          </Link>
        </li>
        <li className={`${styles.nav__list__item}`}>
          <a href="#!">Manufaturing & Certifications</a>
        </li>
        <li className={`${styles.nav__list__item}`}>
          <a href="#!">Our Selection</a>
        </li>
        <li className={`${styles.nav__list__item}`}>
          <a href="#!">Our Brands</a>
        </li>
        <li className={`${styles.nav__list__item} ${styles.nav__list__btn}`}>
          <a href="#!">Contact us</a>
        </li>
        <li
          className={`${styles.nav__list__item} ${styles.nav__list__lang_switch}`}
        >
          <a href="#!">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};
