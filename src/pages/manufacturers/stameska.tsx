import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function StameskaRedirect() {
  return (
    <>
      <Head>
        <title>Stameska Studio мебель на заказ | decojoli – Производители мебели в Москве</title>
        <meta
          name="description"
          content="Ищете мебель Stameska Studio в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Stameska Studio, но с индивидуальным подходом. Кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Stameska Studio мебель, мебель Stameska Studio Москва, кухни Stameska, мебель на заказ как Stameska, премиальная мебель Москва, мебель из массива, кухни на заказ, шкафы купе, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=stameska&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Stameska Studio в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ, созданную с тем же качеством и стилем, что и у Stameska Studio, но с индивидуальным подходом к каждому клиенту.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p><a href="/?utm_source=stameska&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=stameska&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};