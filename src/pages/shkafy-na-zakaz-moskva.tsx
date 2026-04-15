import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function WardrobesRedirect() {
  return (
    <>
      <Head>
        <title>Шкафы на заказ Москва | decojoli – Корпусная мебель</title>
        <meta
          name="description"
          content="Шкафы на заказ в Москве от decojoli. Шкафы купе, гардеробные, корпусная мебель из массива дерева. Индивидуальный дизайн и изготовление."
        />
        <meta
          name="keywords"
          content="шкафы на заказ Москва, шкафы купе Москва, гардеробные Москва, корпусная мебель Москва, мебель из массива Москва, премиальная мебель Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=wardrobes&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Шкафы на заказ в Москве</h1>
        <p>decojoli – производство шкафов на заказ в Москве.</p>
        <p>Шкафы купе, гардеробные, корпусная мебель из массива дерева.</p>
        <p><a href="/?utm_source=wardrobes&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать шкаф</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=wardrobes&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};