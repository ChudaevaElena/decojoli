import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  isPageTitle?: boolean;
  descriptionClassname?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  description,
  isPageTitle = false,
  descriptionClassname = 'h2',
  children,
}: SectionHeaderProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '40px',
      alignItems: 'start',
      marginBottom: '40px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {isPageTitle ? (
          <h1 className="section-title">{title}</h1>
        ) : (
          <h2 className="section-title">{title}</h2>
        )}
        {children}
      </div>
      {description && (
        <div>
          <p className={descriptionClassname} style={{ maxWidth: '800px' }}>{description}</p>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 1220px) {
          div {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}