'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider, useModal } from './ModalContext';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: ReactNode;
}

function HeaderWithModal() {
  const { openModal } = useModal();
  return <Header openModal={openModal} />;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ModalProvider>
      <HeaderWithModal />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </ModalProvider>
  );
}