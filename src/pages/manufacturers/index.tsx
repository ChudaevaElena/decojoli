import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function ManufacturersRedirect() {
  return (
    <>
      <Head>
        <title>Производители мебели в Москве | decojoli – Мебель на заказ</title>
        <meta
          name="description"
          content="Ищете производителей мебели в Москве? decojoli – премиальная мебель на заказ. Кухни, шкафы, мебель из массива дерева. Аналоги Hoff, IKEA, Leroy Merlin, Mr.Doors, Lithium, Stameska Studio."
        />
        <meta
          name="keywords"
          content="производители мебели Москва, мебель на заказ Москва, кухни на заказ Москва, шкафы на заказ Москва, мебель из массива Москва, Hoff мебель, IKEA мебель, Leroy Merlin мебель, Mr.Doors мебель, кухни Мария, кухни Германии, Lithium кухни, Stameska Studio мебель, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=manufacturers&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Производители мебели в Москве</h1>
        <p>decojoli предлагает премиальную мебель на заказ, созданную с качеством ведущих производителей.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева и многое другое.</p>
        <p>Ищете аналоги Hoff, IKEA, Leroy Merlin, Mr.Doors, Lithium, Stameska Studio? Свяжитесь с нами!</p>
        <p><a href="/?utm_source=manufacturers&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=manufacturers&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};