import { getInfo } from '../lib/data';
import SectionHeader from './SectionHeader';
import SocialContainer from './SocialContainer';

export default function ContactSection() {
  const info = getInfo();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Связаться с нами"
          description="Контактная информация"
          descriptionClassname="h2"
        />

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginTop: '40px',
          alignItems: 'stretch',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden' }}>
              <img src={info.managerImage} alt={info.managerName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="title">{info.managerName}</h3>
            <p className="text" style={{ color: 'var(--8e-gray)' }}>{info.managerAbout}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ display: 'grid', gap: '10px' }}>
              <a href={`tel:${info.phone.replace(/\D/g, '')}`} className="title" style={{ color: 'var(--two-black)', textDecoration: 'none' }}>{info.phone}</a>
              <p className="text" style={{ color: 'var(--8e-gray)' }}>{info.address}</p>
              <p className="text" style={{ color: 'var(--8e-gray)' }}>Работаем по всей России</p>
              <a href={`mailto:${info.email}`} className="text" style={{ color: 'var(--8e-gray)', textDecoration: 'none' }}>{info.email}</a>
            </div>
            <SocialContainer />
          </div>
        </div>

      </div>
    </section>
  );
}