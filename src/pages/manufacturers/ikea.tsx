import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function IkeaRedirect() {
  return (
    <>
      <Head>
        <title>IKEA мебель на заказ | decojoli – Производители мебели в Москве</title>
        <meta
          name="description"
          content="Ищете мебель IKEA в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную IKEA, но с индивидуальным дизайном. Кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="IKEA мебель, мебель IKEA Москва, кухни IKEA, мебель на заказ как IKEA, премиальная мебель Москва, мебель из массива, кухни на заказ, шкафы купе, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=ikea&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель IKEA в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ, созданную в современном стиле IKEA, но с индивидуальным подходом и лучшими материалами.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p><a href="/?utm_source=ikea&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=ikea&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};