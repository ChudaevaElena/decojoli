import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function MariaRedirect() {
  return (
    <>
      <Head>
        <title>Кухни Мария на заказ | decojoli – Производители кухонь в Москве</title>
        <meta
          name="description"
          content="Ищете кухни Мария в Москве? decojoli предлагает премиальные кухни на заказ, аналогичные Мария, но с индивидуальным дизайном. Кухни из массива дерева, современные и классические модели."
        />
        <meta
          name="keywords"
          content="кухни Мария, кухни Мария Москва, кухни на заказ, премиальные кухни Москва, мебель из массива, кухни из дерева, decojoli, кухонная мебель"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=maria&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете кухни Мария в Москве?</h1>
        <p>decojoli предлагает премиальные кухни на заказ, созданные в стиле Мария, но с индивидуальным подходом и лучшими материалами.</p>
        <p>Мы производим кухни из массива дерева, современные и классические модели.</p>
        <p><a href="/?utm_source=maria&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=maria&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};