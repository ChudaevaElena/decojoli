'use client';

import { useModal } from './ModalContext';

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section style={{
      position: 'relative',
      height: 'calc(100vh - var(--header-height))',
      maxHeight: '900px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.75)',
        }}
      >
        <source
          src="https://decojoli-site.hb.ru-msk.vkcloud-storage.ru/uploads/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-_1_.webm"
          type="video/webm"
        />
      </video>
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        color: 'var(--snow-white)',
      }}>
        <h1 className="h1" style={{ marginBottom: '24px' }}>
          Искусство мебели<br /><span style={{ fontSize: '0.5em' }}>для тех, кто ценит</span>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={openModal}
            className="btn-round-white"
          >
            •
          </button>
          <p className="text" style={{ color: 'var(--snow-white)' }}>Обсудим ваш проект?</p>
        </div>
      </div>
    </section>
  );
}