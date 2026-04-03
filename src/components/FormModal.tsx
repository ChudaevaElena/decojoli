'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface FormModalProps {
  startScrolling?: () => void;
  stopScrolling?: () => void;
}

export interface FormModalHandle {
  open: () => void;
  close: () => void;
}

const FormModal = forwardRef<FormModalHandle, FormModalProps>(
  ({ startScrolling = () => {}, stopScrolling = () => {} }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      city: '',
      phone: '+7 ',
      comment: '',
      consent: false,
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
        stopScrolling();
      },
      close: () => {
        setIsOpen(false);
        startScrolling();
      },
    }));

    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText('hello@decojoli.ru');
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = 'hello@decojoli.ru';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus('success');
          setIsSent(true);
          setTimeout(() => {
            setIsOpen(false);
            setIsSent(false);
            setFormData({ name: '', city: '', phone: '+7 ', comment: '', consent: false });
            setStatus('idle');
          }, 2000);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    };

    if (!isOpen) return null;

    return (
      <div
        ref={containerRef}
        onClick={(e) => {
          if (e.target === containerRef.current) setIsOpen(false);
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div style={{
          background: 'var(--snow-white)',
          width: '90%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          border: '1px solid var(--b6-gray)',
        }}>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M6.25 18.75L12.5 12.5L18.75 6.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6.25 6.25L12.5 12.5L18.75 18.75" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <p style={{ fontSize: '22px', fontWeight: 500, paddingRight: '40px' }}>
            Узнать подробности или назначить встречу
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="tel:+79662491036" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px' }}>
              <img src="/icons/phone.svg" alt="phone" width={25} height={25} />
              +7 (966) 249-10-36
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/icons/email.svg" alt="email" width={25} height={25} />
              <span style={{ fontSize: '16px' }}>hello@decojoli.ru</span>
              <button
                onClick={copyEmail}
                style={{
                  background: 'none',
                  border: '1px solid var(--b6-gray)',
                  padding: '4px 8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {copied ? 'Скопировано' : 'Копировать'}
              </button>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--b6-gray)' }} />

          {!isSent ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '16px', color: 'var(--8e-gray)' }}>
                Или оставьте номер телефона/WhatsApp/Telegram и мы свяжемся с вами в ближайшее время:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="Имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--snow-white)',
                    border: '1px solid var(--b6-gray)',
                    padding: '12px 16px',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Город"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--snow-white)',
                    border: '1px solid var(--b6-gray)',
                    padding: '12px 16px',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  placeholder="+7 (999) 999-1234"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--snow-white)',
                    border: '1px solid var(--b6-gray)',
                    padding: '12px 40px 12px 16px',
                    outline: 'none',
                    fontSize: '16px',
                  }}
                />
                <img
                  src="/icons/phone.svg"
                  alt="phone"
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.5,
                    width: '20px',
                  }}
                />
              </div>
              <textarea
                rows={3}
                placeholder="Задать вопрос"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--snow-white)',
                  border: '1px solid var(--b6-gray)',
                  padding: '12px 16px',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                }}
              />
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  style={{ marginTop: '2px' }}
                />
                <span style={{ fontSize: '12px', color: 'var(--8e-gray)' }}>
                  Даю{' '}
                  <a href="/polzovatelskoe-soglashenie.docx" target="_blank" style={{ color: 'var(--two-black)', textDecoration: 'underline' }}>
                    согласие
                  </a>{' '}
                  на обработку персональных данных в соответствии с{' '}
                  <a href="/politika-konfidenczialnosti.docx" target="_blank" style={{ color: 'var(--two-black)', textDecoration: 'underline' }}>
                    политикой конфиденциальности
                  </a>
                </span>
              </label>
              <button
                type="submit"
                disabled={status === 'loading' || !formData.consent}
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--two-black)',
                  background: status === 'loading' || !formData.consent ? 'var(--b6-gray)' : 'transparent',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textAlign: 'center',
                  cursor: status === 'loading' || !formData.consent ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '100px',
                }}
              >
                {status === 'loading' ? 'Отправка...' : 'Отправить'}
              </button>
              {status === 'error' && (
                <p style={{ fontSize: '12px', color: 'red' }}>Ошибка отправки. Попробуйте позже.</p>
              )}
            </form>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ fontSize: '16px' }}>Форма отправлена! В ближайшее время мы свяжемся с вами.</p>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--two-black)',
                  background: 'transparent',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderRadius: '100px',
                }}
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

FormModal.displayName = 'FormModal';
export default FormModal;