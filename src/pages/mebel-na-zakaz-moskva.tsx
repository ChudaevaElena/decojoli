import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function MebelRedirect() {
  return (
    <>
      <Head>
        <title>Мебель на заказ Москва | decojoli – Производители премиальной мебели</title>
        <meta
          name="description"
          content="Мебель на заказ в Москве от decojoli. Кухни, шкафы, мебель из массива дерева. Индивидуальный дизайн, лучшие материалы, доставка по России."
        />
        <meta
          name="keywords"
          content="мебель на заказ Москва, кухни на заказ Москва, шкафы на заказ Москва, мебель из массива Москва, премиальная мебель Москва, дизайн интерьера Москва, изготовление мебели Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=mebel&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Мебель на заказ в Москве</h1>
        <p>decojoli – производство премиальной мебели на заказ в Москве.</p>
        <p>Кухни, шкафы, мебель из массива дерева. Индивидуальный подход к каждому проекту.</p>
        <p><a href="/?utm_source=mebel&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать мебель</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=mebel&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};