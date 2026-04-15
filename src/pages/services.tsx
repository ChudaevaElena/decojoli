import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import Accordion from '../components/Accordion';
import ContactActions from '../components/ContactActions';

const services = [
  {
    category: 'Консультация',
    items: [
      {
        title: 'Консультация по выбору материалов и конструкций',
        description:
          'Поможем подобрать породу дерева, фурнитуру, покрытия с учетом вашего бюджета и стилистики.',
      },
    ],
  },
  {
    category: 'Проектирование',
    items: [
      {
        title: 'Разработка дизайн-проекта мебели',
        description: 'Индивидуальные чертежи, 3D-визуализация, спецификации.',
      },
      {
        title: 'Сметный расчет',
        description: 'Детальная смета на материалы и работу.',
      },
      {
        title: 'Работа со смежниками',
        description:
          'Увязка инженерных решений с дизайн-проектом: разработка с учетом установки оборудования, согласование с проектировщиками.',
      },
    ],
  },
  {
    category: 'Реализация',
    items: [
      {
        title: 'Изготовление на заказ',
        description: 'Собственное производство с контролем качества на каждом этапе.',
      },
      {
        title: 'Авторский надзор и монтаж',
        description: 'Выезд специалиста на замеры, контроль сборки, установка.',
      },
      {
        title: 'Комплектация',
        description:
          'Своевременная закупка всех позиций по смете для обеспечения ритмичности работ.',
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>decojoli – Услуги по изготовлению мебели на заказ</title>
        <meta
          name="description"
          content="Разработка дизайн-проекта мебели • Изготовление на заказ • Авторский надзор • Комплектация. Полный цикл создания мебели для вашего интерьера. Кухни, шкафы, мебель из массива дерева."
        />
        <meta
          name="keywords"
          content="услуги decojoli, дизайн-проект мебели, изготовление мебели на заказ, авторский надзор, комплектация, кухни на заказ, шкафы на заказ, мебель из массива, дизайн интерьера, мебель в Москву, производители мебели Москва"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="decojoli" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU-MOW" />
        <meta name="geo.placename" content="Москва" />
        <meta property="og:title" content="decojoli – Услуги" />
        <meta property="og:description" content="Разработка дизайн-проекта мебели • Изготовление на заказ • Авторский надзор • Комплектация" />
        <meta property="og:url" content="https://decojoli.ru/services/" />
        <link rel="canonical" href="https://decojoli.ru/services/" />
      </Head>
      <main className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '40px',
          }}>
            <h1 className="section-title">Услуги</h1>
            <div>
              <p className="h1" style={{ marginBottom: '24px' }}>
                Полный цикл создания мебели
              </p>
              <p className="title" style={{ color: 'var(--8e-gray)' }}>
                Мы разработаем дизайн, изготовим, доставим и установим мебель точно по проекту.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {services.map((service, idx) => (
              <div key={idx} style={{ padding: '24px 0' }}>
                <h2 className="h3" style={{ marginBottom: '16px' }}>{service.category}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.items.map((item, itemIdx) => (
                    <Accordion key={itemIdx} title={item.title} content={item.description} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>



      <section className="section">
        <div className="container">
          <SectionHeader
            title="Вопросы"
            description="Ответы на частые вопросы"
            descriptionClassname="h2"
          />
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion
              title="Сколько времени занимает изготовление?"
              content="Срок зависит от сложности проекта и загруженности производства, в среднем 4-8 недель."
            />
            <Accordion
              title="Как осуществляется оплата?"
              content="50% предоплата, 50% после готовности и перед отгрузкой."
            />
            <Accordion
              title="Работаете ли вы с дизайнерами?"
              content="Да, мы открыты к сотрудничеству с архитекторами и дизайнерами интерьеров."
            />
          </div>
        </div>
      </section>

      <ContactActions />
    </>
  );
}