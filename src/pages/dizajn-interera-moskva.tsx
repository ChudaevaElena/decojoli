import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function DesignRedirect() {
  return (
    <>
      <Head>
        <title>Дизайн интерьера Москва | decojoli – Проектирование и мебель</title>
        <meta
          name="description"
          content="Дизайн интерьера в Москве от decojoli. Полный цикл: проектирование, изготовление мебели, реализация. Кухни, шкафы, мебель из массива дерева."
        />
        <meta
          name="keywords"
          content="дизайн интерьера Москва, проектирование интерьера Москва, мебель для интерьера Москва, кухни дизайн Москва, шкафы дизайн Москва, премиальный интерьер Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=design&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Дизайн интерьера в Москве</h1>
        <p>decojoli – полный цикл дизайна интерьера в Москве.</p>
        <p>Проектирование, изготовление мебели, реализация проектов любой сложности.</p>
        <p><a href="/?utm_source=design&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать дизайн интерьера</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=design&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};