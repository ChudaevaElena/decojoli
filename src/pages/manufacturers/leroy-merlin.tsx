import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function LeroyMerlinRedirect() {
  return (
    <>
      <Head>
        <title>Leroy Merlin мебель на заказ | decojoli – Производители мебели в Москве</title>
        <meta
          name="description"
          content="Ищете мебель Leroy Merlin в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Leroy Merlin, но с индивидуальным дизайном. Кухни, шкафы, мебель из массива дерева."
        />
        <meta
          name="keywords"
          content="Leroy Merlin мебель, мебель Leroy Merlin Москва, кухни Leroy Merlin, мебель на заказ как Leroy Merlin, премиальная мебель Москва, мебель из массива, кухни на заказ, шкафы купе, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=leroy-merlin&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Leroy Merlin в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ, созданную в стиле Leroy Merlin, но с индивидуальным подходом и лучшими материалами.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p><a href="/?utm_source=leroy-merlin&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=leroy-merlin&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};