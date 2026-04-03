'use client';

import { useModal } from './ModalContext';

export default function ContactActions() {
  const { openModal } = useModal();

  return (
    <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Есть вопрос по проекту?</h2>
            <p className="text" style={{ color: 'var(--8e-gray)', marginTop: '8px' }}>
              Нажмите, чтобы открыть форму запроса и связаться с менеджером.
            </p>
          </div>
          <button onClick={openModal} className="btn-round">
            •
          </button>
        </div>
      </div>
    </section>
  );
}
