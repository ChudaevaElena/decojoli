'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

interface HeaderProps {
  openModal: () => void;
}

const navLinks = [
  { href: '/', title: 'Главная' },
  { href: '/about', title: 'О нас' },
  { href: '/projects', title: 'Проекты' },
  { href: '/services', title: 'Услуги' },
  { href: '/contact', title: 'Контакты' },
];

export default function Header({ openModal }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('disableScroll');
    } else {
      document.body.classList.remove('disableScroll');
    }
    return () => document.body.classList.remove('disableScroll');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="https://decojoli-site.hb.ru-msk.vkcloud-storage.ru/favicon-96x96.png"
              alt="decojoli"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
            >
              {link.title}
            </Link>
          ))}
          <button className={styles.phoneBtn} onClick={openModal}>
            +7 (991) 974-51-71          </button>
        </nav>

        <div className={styles.mobileMenu}>
          <button
            className={`${styles.burgerBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>

        <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
          <nav>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <button className={styles.phoneBtn} onClick={() => { setMenuOpen(false); openModal(); }}>
            +7 (991) 974-51-71          </button>
        </div>
      </div>
    </header>
  );
}