import { GetServerSideProps } from 'next';

export default function Sitemap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://decojoli.ru';

  const staticPages = [
    '',
    '/about',
    '/projects',
    '/services',
    '/contact',
    '/politika_v_otnoshenii_cookie',
    '/manufacturers',
    '/manufacturers/hoff',
    '/manufacturers/ikea',
    '/manufacturers/leroy-merlin',
    '/manufacturers/mr-doors',
    '/manufacturers/maria',
    '/manufacturers/germany',
    '/manufacturers/lithium',
    '/manufacturers/stameska',
    '/mebel-na-zakaz-moskva',
    '/kuhni-na-zakaz-moskva',
    '/shkafy-na-zakaz-moskva',
    '/mebel-iz-massiva-moskva',
    '/dizajn-interera-moskva',
    '/izgotovlenie-mebeli-moskva',
    '/premialnaya-mebel-moskva',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};