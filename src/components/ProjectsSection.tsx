import Link from 'next/link';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '60px',
        }}>
          <h2 className="section-title">Проекты</h2>
          <p className="h2">Работы, которыми мы гордимся</p>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isSubTitle />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/projects" className="btn">
            Смотреть все проекты
          </Link>
        </div>
      </div>
    </section>
  );
}