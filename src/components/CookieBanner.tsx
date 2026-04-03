'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      maxWidth: '480px',
      background: 'var(--snow-white)',
      border: '1px solid var(--b6-gray)',
      padding: '20px',
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    }}>
      <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--8e-gray)' }}>
        Мы используем файлы cookie. Они помогают нам делать сайт удобнее для пользователей. Нажав кнопку
        «Соглашаюсь», вы даете свое согласие на обработку файлов cookie вашего браузера.
      </p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <button
          onClick={accept}
          style={{
            background: 'var(--two-black)',
            color: 'var(--snow-white)',
            border: 'none',
            padding: '8px 16px',
            fontSize: '13px',
            cursor: 'pointer',
            borderRadius: '100px',
          }}
        >
          Соглашаюсь
        </button>
        <Link href="/politika_v_otnoshenii_cookie" style={{ fontSize: '13px', color: 'var(--8e-gray)' }}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}