'use client';

import { useState, useRef, useEffect } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && innerRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${innerRef.current.offsetHeight}px`;
      } else {
        contentRef.current.style.height = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div style={{ borderBottom: '1px solid var(--b6-gray)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <h3 style={{ fontSize: '22px', fontWeight: 500 }}>{title}</h3>
        <span style={{ fontSize: '24px', color: 'var(--8e-gray)' }}>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ overflow: 'hidden', transition: 'height 0.3s ease', height: 0 }}
      >
        <div ref={innerRef} style={{ paddingBottom: '20px' }}>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--8e-gray)', fontSize: '16px' }}>{content}</pre>
        </div>
      </div>
    </div>
  );
}