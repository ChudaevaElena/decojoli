import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function MassivRedirect() {
  return (
    <>
      <Head>
        <title>Мебель из массива Москва | decojoli – Натуральное дерево</title>
        <meta
          name="description"
          content="Мебель из массива дерева в Москве от decojoli. Кухни, шкафы, мебель из дуба, ясеня. Премиальное качество, индивидуальный дизайн."
        />
        <meta
          name="keywords"
          content="мебель из массива Москва, мебель из дуба Москва, мебель из ясеня Москва, натуральное дерево Москва, премиальная мебель Москва, кухни из массива Москва, шкафы из массива Москва, decojoli"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0; url=/?utm_source=massiv&utm_medium=redirect" />
        <link rel="canonical" href="https://decojoli.ru/" />
      </Head>
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        <h1>Мебель из массива в Москве</h1>
        <p>decojoli – производство мебели из массива натурального дерева в Москве.</p>
        <p>Кухни, шкафы, мебель из дуба и ясеня. Премиальное качество и долговечность.</p>
        <p><a href="/?utm_source=massiv&utm_medium=redirect" style={{ color: '#252324', textDecoration: 'underline' }}>Заказать мебель из массива</a></p>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Location', '/?utm_source=massiv&utm_medium=redirect');
  res.statusCode = 302;
  return { props: {} };
};