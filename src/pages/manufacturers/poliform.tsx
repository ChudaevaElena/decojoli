import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function PoliformRedirect() {
  return (
    <>
      <Head>
        <title>Poliform мебель на заказ | decojoli – премиальная мебель Москве</title>
        <meta
          name="description"
          content="Ищете мебель Poliform в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Poliform, но с индивидуальным подходом. Кухни, шкафы, гарнитуры, мебель из массива дерева. Профессиональное проектирование. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Poliform мебель, Poliform Москва, мебель Poliform, кухни Poliform, мебель на заказ как Poliform, премиальная мебель Москва, гарнитуры на заказ, мебель из массива, кухни на заказ, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=poliform&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Poliform в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ, разработанную с тем же инновационным подходом и качеством, что и у Poliform, но с индивидуальным дизайном для вашего пространства.</p>
        <p>Мы производим современные кухни, шкафы, гарнитуры, мебель из массива дерева с профессиональным проектированием и установкой.</p>
        <p><a href="/?utm_source=poliform&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=poliform&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};
