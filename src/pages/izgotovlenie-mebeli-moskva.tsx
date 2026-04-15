import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function ManufacturingRedirect() {
  return (
    <>
      <Head>
        <title>Изготовление мебели Москва | decojoli – Производство на заказ</title>
        <meta
          name="description"
          content="Изготовление мебели в Москве от decojoli. Кухни, шкафы, корпусная мебель из массива дерева. Полный цикл производства, доставка по России."
        />
        <meta
          name="keywords"
          content="изготовление мебели Москва, производство мебели Москва, мебель на заказ Москва, кухни изготовление Москва, шкафы изготовление Москва, мебель из массива изготовление Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=manufacturing&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Изготовление мебели в Москве</h1>
        <p>decojoli – собственное производство мебели в Москве.</p>
        <p>Кухни, шкафы, мебель из массива дерева. Полный цикл от проекта до установки.</p>
        <p><a href="/?utm_source=manufacturing&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать изготовление</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=manufacturing&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};