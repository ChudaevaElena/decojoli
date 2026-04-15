import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function ItalianFurnitureRedirect() {
  return (
    <>
      <Head>
        <title>Итальянская мебель на заказ | decojoli – премиальная мебель Москве</title>
        <meta
          name="description"
          content="Ищете итальянскую мебель в Москве? decojoli предлагает премиальную мебель на заказ итальянского качества и дизайна. Кухни, шкафы, гарнитуры, мебель из массива дерева. Индивидуальный подход к каждому клиенту. Свяжитесь с нами!"
        />
        <meta
          name="keywords"
          content="итальянская мебель, итальянская мебель Москва, мебель итальянского качества, кухни итальянского стиля, премиальная итальянская мебель, дизайнерская мебель, мебель на заказ, мебель из массива, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=italian-furniture&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Ищете итальянскую мебель в Москве?</h1>
        <p>decojoli предлагает премиальную мебель на заказ итальянского качества и стиля. Мы создаем мебель с тем же мастерством, элегантностью и инновациями, что и лучшие итальянские производители.</p>
        <p>Наша компания специализируется на кухнях, шкафах, гарнитурах и мебели из ценных пород дерева. Каждый проект разрабатывается индивидуально с учетом ваших пожеланий и особенностей интерьера.</p>
        <p><a href="/?utm_source=italian-furniture&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Перейти на наш сайт</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=italian-furniture&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};
