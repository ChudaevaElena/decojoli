import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function KitchensRedirect() {
  return (
    <>
      <Head>
        <title>Кухни на заказ Москва | decojoli – Производители кухонь</title>
        <meta
          name="description"
          content="Кухни на заказ в Москве от decojoli. Индивидуальные кухни из массива дерева. Современный дизайн, лучшие материалы, доставка и установка."
        />
        <meta
          name="keywords"
          content="кухни на заказ Москва, кухни из массива Москва, премиальные кухни Москва, дизайн кухни Москва, изготовление кухонь Москва, кухни Hoff, кухни IKEA, кухни Мария, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=kitchens&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Кухни на заказ в Москве</h1>
        <p>decojoli – производство индивидуальных кухонь на заказ в Москве.</p>
        <p>Кухни из массива дерева, современный и классический дизайн.</p>
        <p><a href="/?utm_source=kitchens&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать кухню</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=kitchens&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};