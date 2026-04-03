import { useRef } from 'react';
import Head from 'next/head';
import { getInfo } from '../lib/data';
import SectionHeader from '../components/SectionHeader';
import SocialContainer from '../components/SocialContainer';
import FormModal, { FormModalHandle } from '../components/FormModal';

export default function Contact() {
  const info = getInfo();
  const modalRef = useRef<FormModalHandle>(null);

  return (
    <>
      <Head>
        <title>decojoli – Контакты</title>
        <meta
          name="description"
          content="Телефон +7 (966) 249-10-36, email hello@decojoli.ru, адрес производства в Чебоксарах. Работаем по всей России."
        />
        <meta
          name="keywords"
          content="контакты decojoli, телефон decojoli, адрес decojoli, мебель на заказ, премиальная мебель, decojoli"
        />
        <meta property="og:title" content="decojoli – Контакты" />
        <meta property="og:description" content="Телефон +7 (966) 249-10-36, email hello@decojoli.ru." />
        <meta property="og:url" content="https://decojoli.ru/contact/" />
        <link rel="canonical" href="https://decojoli.ru/contact/" />
      </Head>
      <main className="section">
        <div className="container">
          <SectionHeader
            isPageTitle
            title="Связаться с нами"
            description="Контактная информация"
            descriptionClassname="h1"
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={info.managerImage} alt={info.managerName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="title">{info.managerName}</h3>
              <p className="text" style={{ color: 'var(--8e-gray)' }}>
                {info.managerAbout}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ display: 'grid', gap: '10px' }}>
                <a href={`tel:${info.phone.replace(/\D/g, '')}`} className="title" style={{ display: 'block' }}>
                  {info.phone}
                </a>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>{info.address}</p>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Работаем по всей России</p>
                <a href={`mailto:${info.email}`} className="text" style={{ color: 'var(--8e-gray)', display: 'block' }}>
                  {info.email}
                </a>
              </div>
              <SocialContainer />
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?mode=search&text=Чебоксары%20ул.%20Калинина%2089к1&z=18"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </>
  );
}