import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <>
      <Head>
        <title>decojoli – О фабрике</title>
        <meta
          name="description"
          content="Собственное производство полного цикла. 20 лет опыта, уникальные технологии, лучшие материалы. Реализуем проекты любой сложности."
        />
        <meta
          name="keywords"
          content="о decojoli, фабрика мебели, производство мебели, мебель на заказ, премиальная мебель"
        />
        <meta property="og:title" content="decojoli – О фабрике" />
        <meta property="og:description" content="Собственное производство полного цикла. 20 лет опыта, уникальные технологии, лучшие материалы." />
        <meta property="og:url" content="https://decojoli.ru/about/" />
        <link rel="canonical" href="https://decojoli.ru/about/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "decojoli",
              "description": "Собственное производство полного цикла. 20 лет опыта, уникальные технологии, лучшие материалы.",
              "telephone": "+79662491036",
              "email": "hello@decojoli.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "улица Калинина, 89к1",
                "addressLocality": "Чебоксары",
                "addressRegion": "Чувашская Республика",
                "postalCode": "428022",
                "addressCountry": "RU"
              },
              "priceRange": "₽₽₽",
              "areaServed": { "@type": "City", "name": "Москва" }
            }),
          }}
        />
      </Head>
      <main>
        <section className="section" style={{ backgroundColor: 'var(--two-black)', color: 'var(--snow-white)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="h1" style={{ marginBottom: '40px' }}>
              Фабрика с 20-летней историей
            </h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <img
                src="https://decojoli-site.hb.ru-msk.vkcloud-storage.ru/_next/image/m38%20%283%29.jpg"
                alt="Фабрика decojoli - 1"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
              />
              <img
                src="https://decojoli-site.hb.ru-msk.vkcloud-storage.ru/_next/image/m38%20%283%29.jpg"
                alt="Фабрика decojoli - 2"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
              />
              <img
                src="https://decojoli-site.hb.ru-msk.vkcloud-storage.ru/_next/image/m38%20%283%29.jpg"
                alt="Фабрика decojoli - 3"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
            }}>
              <h2 className="section-title">О фабрике</h2>
              <div>
                <p className="h2" style={{ marginBottom: '24px' }}>
                  Собственное производство полного цикла
                </p>
                <p className="text" style={{ color: 'var(--8e-gray)', marginBottom: '16px' }}>
                  decojoli – это не просто мебельная фабрика, это команда профессионалов, объединённых страстью к своему делу.
                  С 1999 года мы создаём интерьеры, которые становятся отражением характера и вкуса наших клиентов.
                  Каждый проект – это уникальная история, воплощённая в дереве, камне, металле и стекле.
                </p>
                <p className="text" style={{ color: 'var(--8e-gray)', marginBottom: '16px' }}>
                  Наше производство полного цикла позволяет контролировать качество на всех этапах: от разработки чертежа
                  до финишной отделки. Мы не используем типовые решения – только индивидуальный подход, только лучшие
                  материалы и только безупречное исполнение. Сложные архитектурные формы, редкие породы дерева,
                  эксклюзивная фурнитура – для нас это вызов, который мы принимаем с удовольствием.
                </p>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>
                  Прямое сотрудничество без посредников делает эксклюзивную мебель доступной, а собственный цех –
                  гарантирует соблюдение сроков. Мы работаем по всей России, создавая интерьеры, которыми гордятся.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
              marginBottom: '40px',
            }}>
              <h2 className="section-title">Наши принципы</h2>
              <p className="h2">В основе – качество и индивидуальный подход</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Собственное производство полного цикла</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Контроль качества на каждом этапе: от раскроя до финишной отделки.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Реализуем самые сложные запросы</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Нестандартные формы, радиусные фасады, уникальные инкрустации – для нас нет ограничений.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Лучшее соотношение цены и качества</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Прямое производство без посредников делает эксклюзивную мебель доступной.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
              marginBottom: '40px',
            }}>
              <h2 className="section-title">Наши возможности</h2>
              <p className="h2">Современное производство и уникальные технологии</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Собственный цех полного цикла</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Раскрой, фрезеровка, шлифовка, покраска, сборка – всё в одном месте. Это гарантирует качество и соблюдение сроков.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Работа с ценными породами дерева</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Дуб, ясень, орех, махагони, венге – используем массив и шпон высшего сорта. Также работаем с камнем, стеклом, металлом.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Индивидуальные конструкторские решения</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Разрабатываем чертежи любой сложности, учитывая нагрузки, эргономику и пожелания заказчика.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px',
                alignItems: 'start',
              }}>
                <h3 className="title">Финишная отделка высокого уровня</h3>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>Масло, воск, лаки с УФ-защитой, браширование, патинирование – подберём идеальное покрытие под ваш интерьер.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}