import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllProjects, getInfo } from '../lib/data';
import { Project, Info } from '../types';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ContactSection from '../components/ContactSection';

interface HomeProps {
  projects: Project[];
  info: Info;
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>decojoli | Премиальная мебель на заказ</title>
        <meta
          name="description"
          content="decojoli – создаём мебель на заказ с 1999 года. Более 20 лет опыта. Эксклюзивные проекты, лучшие материалы, индивидуальный подход. Доставка по России. Производители мебели и кухонь в Москве. Кухни на заказ, шкафы, мебель из массива дерева."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="decojoli" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU-MOW" />
        <meta name="geo.placename" content="Москва" />
        <meta name="geo.position" content="55.755826;37.6173" />
        <meta name="ICBM" content="55.755826, 37.6173" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#252324" />
        <meta
          name="keywords"
          content="мебель на заказ, премиальная мебель, кухни на заказ, шкафы на заказ, индивидуальная мебель, decojoli, мебель из массива, дизайн интерьера, изготовление мебели, мебель в Москву, мебель Москва, кухни Москва, производители мебели Москва, мебельные фабрики Москва, кухонная мебель, корпусная мебель, мягкая мебель, мебель для дома, офисная мебель, мебель под заказ, элитная мебель, мебель из дерева, мебель из массива дуба, мебель из массива ясеня, кухни на заказ Москва, шкафы купе на заказ, мебель для спальни, мебель для гостиной, мебель для детской, мебель для офиса, производители кухонь Москва, кухни Hoff, кухни IKEA, кухни Leroy Merlin, кухни Mr.Doors, кухни Мария, кухни Германии, мебельные салоны Москва, мебель на заказ цена, изготовление мебели под ключ"
        />
        <meta property="og:title" content="decojoli – премиальная мебель на заказ" />
        <meta property="og:description" content="Индивидуальное изготовление мебели из лучших материалов. Более 20 лет создаём интерьеры, которыми гордятся." />
        <meta property="og:url" content="https://decojoli.ru/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://decojoli.ru/" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "decojoli",
              "description": "Изготовление премиальной мебели на заказ. Кухни, шкафы, мебель из массива дерева.",
              "url": "https://decojoli.ru",
              "telephone": "+79662491036",
              "email": "hello@decojoli.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "улица Калинина, 89к1",
                "addressLocality": "Чебоксары",
                "addressRegion": "Чувашская Республика",
                "postalCode": "428022",
                "addressCountry": "RU"
              },
              "priceRange": "₽₽₽",
              "areaServed": { "@type": "City", "name": "Москва" },
              "serviceType": ["Изготовление мебели на заказ", "Кухни на заказ", "Шкафы на заказ", "Мебель из массива"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Каталог услуг",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Кухни на заказ",
                      "description": "Индивидуальные кухни из массива дерева"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Шкафы на заказ",
                      "description": "Корпусная мебель, шкафы купе"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Мебель из массива",
                      "description": "Премиальная мебель из натурального дерева"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <AdvantagesSection />
        <ContactSection />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projects = getAllProjects();
  const info = getInfo();
  return {
    props: { projects, info },
  };
};