'use client';

import Link from 'next/link';
import styles from './navbar.module.scss';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        (pathname === '/contactus' || pathname === '/our-brands') &&
        styles.contact_page
      } ${styles.nav}`}
    >
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
          <Link
            className={`${pathname === '/our-brands' && styles.active_item}`}
            href="our-brands"
          >
            Our Brands
          </Link>
        </li>
        <li className={`${styles.nav__list__item} ${styles.nav__list__btn}`}>
          <Link
            className={`${pathname === '/contactus' && styles.active_item}`}
            href="contactus"
          >
            Contact us
          </Link>
        </li>
        <li
          className={`${styles.nav__list__item} ${styles.nav__list__lang_switch}`}
        >
          <a href="#!">EN</a>
        </li>
      </ul>
    </nav>
  );
};
