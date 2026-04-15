import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function LithiumRedirect() {
  return (
    <>
      <Head>
        <title>Lithium кухни на заказ | decojoli – Производители мебели в Москве</title>
        <meta
          name="description"
          content="Ищете кухни Lithium в Москве? decojoli предлагает премиальные кухни на заказ, аналогичные Lithium, но с индивидуальным подходом. Кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Lithium кухни, кухни Lithium Москва, мебель Lithium, кухни на заказ как Lithium, премиальные кухни Москва, мебель из массива, кухни на заказ, шкафы купе, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=lithium&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете кухни Lithium в Москве?</h1>
        <p>decojoli предлагает премиальные кухни на заказ, созданные с тем же качеством и стилем, что и у Lithium, но с индивидуальным подходом к каждому клиенту.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p><a href="/?utm_source=lithium&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=lithium&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};