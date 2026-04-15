import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function PremiumRedirect() {
  return (
    <>
      <Head>
        <title>Премиальная мебель Москва | decojoli – Элитная мебель на заказ</title>
        <meta
          name="description"
          content="Премиальная мебель в Москве от decojoli. Кухни, шкафы, мебель из массива дерева. Индивидуальный дизайн, лучшие материалы, ручная работа."
        />
        <meta
          name="keywords"
          content="премиальная мебель Москва, элитная мебель Москва, мебель на заказ Москва, кухни премиум Москва, шкафы премиум Москва, мебель из массива премиум Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=premium&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Премиальная мебель в Москве</h1>
        <p>decojoli – производство премиальной мебели в Москве.</p>
        <p>Кухни, шкафы, мебель из массива дерева. Элитное качество и индивидуальный подход.</p>
        <p><a href="/?utm_source=premium&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать премиальную мебель</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=premium&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};