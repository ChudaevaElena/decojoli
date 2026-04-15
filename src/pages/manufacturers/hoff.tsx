import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function HoffRedirect() {
  return (
    <>
      <Head>
        <title>Hoff мебель на заказ | decojoli – Производители мебели в Москве</title>
        <meta
          name="description"
          content="Ищете мебель Hoff в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Hoff, но с индивидуальным подходом. Кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Hoff мебель, мебель Hoff Москва, кухни Hoff, мебель на заказ как Hoff, премиальная мебель Москва, мебель из массива, кухни на заказ, шкафы купе, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=hoff&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Hoff в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ, созданную с тем же качеством и стилем, что и у Hoff, но с индивидуальным подходом к каждому клиенту.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p><a href="/?utm_source=hoff&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=hoff&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};