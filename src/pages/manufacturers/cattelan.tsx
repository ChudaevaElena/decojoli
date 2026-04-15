import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function CattelanRedirect() {
  return (
    <>
      <Head>
        <title>Cattelan Italia мебель на заказ | decojoli – премиальная мебель Москве</title>
        <meta
          name="description"
          content="Ищете мебель Cattelan Italia в Москве? decojoli предлагает премиальную мебель на заказ, аналогичную Cattelan Italia, но с индивидуальным подходом. Итальянского качества мебель, кухни, шкафы, мебель из массива дерева. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="Cattelan Italia мебель, мебель Cattelan Italia Москва, итальянская мебель, кухни Cattelan, мебель на заказ как Cattelan, премиальная мебель Москва, мебель из массива, мебель в стиле Cattelan, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=cattelan&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете мебель Cattelan Italia в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ итальянского качества, созданную с тем же мастерством и стилем, что и у Cattelan Italia, но с индивидуальным подходом к каждому клиенту.</p>
        <p>Мы производим кухни, шкафы, мебель из массива дерева высочайшего качества и многое другое.</p>
        <p><a href="/?utm_source=cattelan&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=cattelan&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};
