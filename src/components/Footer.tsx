'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--two-black)',
      color: 'var(--snow-white)',
      padding: '60px 0 30px',
      marginTop: 'auto',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px' }}>
          {[
            { href: '/', title: 'Главная' },
            { href: '/about', title: 'О нас' },
            { href: '/projects', title: 'Проекты' },
            { href: '/services', title: 'Услуги' },
            { href: '/contact', title: 'Контакты' },
            { href: '/about#vacancies', title: 'Вакансии' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{ color: 'var(--snow-white)', fontSize: '16px' }}>
              {link.title}
            </Link>
          ))}
        </nav>
        <hr style={{ border: 'none', borderTop: '1px solid var(--b6-gray)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '16px', color: 'var(--b6-gray)' }}>© 2026 decojoli</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <Link href="/polzovatelskoe-soglashenie.docx" target="_blank" style={{ fontSize: '12px', color: 'var(--b6-gray)' }}>
                Пользовательское соглашение
              </Link>
              <Link href="/politika-konfidenczialnosti.docx" target="_blank" style={{ fontSize: '12px', color: 'var(--b6-gray)' }}>
                Политика конфиденциальности
              </Link>
              <Link href="/politika_v_otnoshenii_cookie" style={{ fontSize: '12px', color: 'var(--b6-gray)' }}>
                Использование файлов Cookie
              </Link>
            </div>
          </div>
          <Link href="https://decojoli.ru/" target="_blank" style={{ fontSize: '12px', color: 'var(--b6-gray)' }}>
            decojoli
          </Link>
        </div>
      </div>
    </footer>
  );
}