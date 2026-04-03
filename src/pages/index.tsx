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
          content="decojoli – создаём мебель на заказ с 1999 года. Более 20 лет опыта. Эксклюзивные проекты, лучшие материалы, индивидуальный подход. Доставка по России."
        />
        <meta
          name="keywords"
          content="мебель на заказ, премиальная мебель, кухни на заказ, шкафы на заказ, индивидуальная мебель, decojoli, мебель из массива, дизайн интерьера, изготовление мебели, мебель в Москву"
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
              "description": "Изготовление премиальной мебели на заказ.",
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
              "areaServed": { "@type": "City", "name": "Москва" }
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