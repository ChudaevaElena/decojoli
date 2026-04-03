import { GetStaticProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { getAllProjects } from '../../lib/data';
import { Project } from '../../types';
import ProjectCard from '../../components/ProjectCard';
import SectionHeader from '../../components/SectionHeader';
import ContactActions from '../../components/ContactActions';

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [filter, setFilter] = useState<'residential' | 'commercial'>('residential');

  return (
    <>
      <Head>
        <title>decojoli – Проекты интерьеров</title>
        <meta
          name="description"
          content="Наше портфолио: эксклюзивные проекты интерьеров домов и квартир, обставленных мебелью на заказ."
        />
        <meta
          name="keywords"
          content="портфолио decojoli, проекты мебели, интерьеры домов, мебель на заказ, премиальная мебель"
        />
        <meta property="og:title" content="decojoli – Проекты интерьеров" />
        <meta property="og:description" content="Наше портфолио: эксклюзивные проекты интерьеров, обставленных мебелью на заказ." />
        <meta property="og:url" content="https://decojoli.ru/projects/" />
        <link rel="canonical" href="https://decojoli.ru/projects/" />
      </Head>
      <main className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '40px',
          }}>
            <h1 className="section-title">Проекты</h1>
            <p className="h1">Примеры наших работ – от идеи до воплощения</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '40px 0' }}>
            <button
              onClick={() => setFilter('residential')}
              style={{
                background: filter === 'residential' ? 'var(--two-black)' : 'none',
                color: filter === 'residential' ? 'var(--snow-white)' : 'var(--8e-gray)',
                border: '1px solid var(--b6-gray)',
                borderRadius: '40px',
                padding: '10px 24px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Жилые
            </button>
            <button
              onClick={() => setFilter('commercial')}
              style={{
                background: filter === 'commercial' ? 'var(--two-black)' : 'none',
                color: filter === 'commercial' ? 'var(--snow-white)' : 'var(--8e-gray)',
                border: '1px solid var(--b6-gray)',
                borderRadius: '40px',
                padding: '10px 24px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Коммерческие
            </button>
          </div>

          {filter === 'residential' ? (
            <div>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} isSubTitle />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--8e-gray)' }}>
                Скоро здесь появятся проекты коммерческих интерьеров
              </h3>
              <p className="text" style={{ color: 'var(--8e-gray)' }}>Мы работаем над новыми объектами. Следите за обновлениями!</p>
            </div>
          )}
        </div>
      </main>
      <ContactActions />
    </>
  );
}

export const getStaticProps: GetStaticProps<ProjectsListProps> = async () => {
  const projects = getAllProjects();
  return { props: { projects } };
};