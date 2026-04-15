import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function GermanyRedirect() {
  return (
    <>
      <Head>
        <title>Кухни Германии на заказ | decojoli – Производители кухонь в Москве</title>
        <meta
          name="description"
          content="Ищете кухни Германии в Москве? decojoli предлагает премиальные кухни на заказ в немецком стиле, с индивидуальным дизайном. Кухни из массива дерева, высокое качество и надежность."
        />
        <meta
          name="keywords"
          content="кухни Германии, кухни Германии Москва, кухни на заказ, премиальные кухни Москва, мебель из массива, кухни из дерева, немецкие кухни, decojoli, кухонная мебель"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=germany&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете кухни Германии в Москве?</h1>
        <p>decojoli предлагает премиальные кухни на заказ в немецком стиле, с индивидуальным подходом и лучшими материалами.</p>
        <p>Мы производим кухни из массива дерева, соответствующие высоким стандартам качества.</p>
        <p><a href="/?utm_source=germany&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=germany&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};