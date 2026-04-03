import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllProjects, getProjectBySlug } from '../../lib/data';
import { Project } from '../../types';
import Accordion from '../../components/Accordion';
import Gallery from '../../components/Gallery';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{project.title} – интерьер, обставленный мебелью decojoli</title>
        <meta
          name="description"
          content={`Интерьер дома площадью ${project.square} в городе ${project.city}, реализованный в ${project.year} году. Мебель на заказ от decojoli.`}
        />
        <meta
          name="keywords"
          content={`${project.title}, интерьер дома, мебель на заказ, decojoli, ${project.city}`}
        />
        <meta property="og:title" content={`${project.title} – интерьер, обставленный мебелью decojoli`} />
        <meta property="og:description" content={project.description.slice(0, 160)} />
        <meta property="og:image" content={project.poster} />
        <link rel="canonical" href={`https://decojoli.ru/projects/${project.slug}/`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": `Мебельный гарнитур "${project.title}"`,
              "description": project.description,
              "image": project.poster,
              "brand": { "@type": "Brand", "name": "decojoli" }
            }),
          }}
        />
      </Head>
      <main>
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="h1">{project.title}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', color: 'var(--8e-gray)' }}>
              <span>Город: {project.city}</span>
              <span>Площадь: {project.square}</span>
              <span>Год: {project.year}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
            }}>
              <h2 className="section-title">О проекте</h2>
              <div>
                <p className="h2" style={{ marginBottom: '24px' }}>Задачи и реализация</p>
                <p className="text" style={{ color: 'var(--8e-gray)' }}>{project.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '40px',
              alignItems: 'start',
              marginBottom: '40px',
            }}>
              <h2 className="section-title">Галерея интерьера</h2>
              <p className="h2"></p>
            </div>
            <Gallery images={project.gallery} />
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects();
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const project = getProjectBySlug(params?.slug as string);
  if (!project) return { notFound: true };
  return { props: { project } };
};