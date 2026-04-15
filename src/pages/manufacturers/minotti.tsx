import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function MinottiRedirect() {
  return (
    <>
      <Head>
        <title>Minotti мебель на заказ | decojoli – премиальная мебель Москве</title>
        <meta
          name="description"
          content="Ищете мебель Minotti в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Minotti, но с индивидуальным подходом. Дизайнерская мебель, кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Minotti мебель, Minotti Москва, мебель Minotti, дизайнерская мебель Minotti, кухни Minotti, мебель на заказ как Minotti, премиальная мебель Москва, дизайнерская мебель на заказ, мебель из массива, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=minotti&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Minotti в Москве?</h1>
        <p>decojoli предлагает премиальную дизайнерскую мебель на заказ, созданную с тем же артистичным мастерством и современным стилем, что и у Minotti, но адаптированную под ваши нужды.</p>
        <p>Мы производим дизайнерские кухни, шкафы, модульные системы, мебель из ценных пород дерева и другие решения высочайшего качества.</p>
        <p><a href="/?utm_source=minotti&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=minotti&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};
