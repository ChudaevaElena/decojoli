import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isSubTitle?: boolean;
}

export default function ProjectCard({ project, isSubTitle }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} style={{
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '40px',
      padding: '40px 0',
      borderTop: '1px solid var(--b6-gray)',
      transition: 'opacity 0.3s ease',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {isSubTitle ? (
          <h2 className="h3" style={{ fontWeight: 400 }}><pre style={{ fontFamily: 'var(--font-main)' }}>{project.title}</pre></h2>
        ) : (
          <h3 className="h3" style={{ fontWeight: 400 }}><pre style={{ fontFamily: 'var(--font-main)' }}>{project.title}</pre></h3>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ color: 'var(--8e-gray)', width: '70px' }}>Город</span>
            <span>{project.city}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ color: 'var(--8e-gray)', width: '70px' }}>Площадь</span>
            <span>{project.square}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ color: 'var(--8e-gray)', width: '70px' }}>Год</span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>
      <div className="gallery">
        {project.gallery.slice(0, 3).map((img, idx) => (
          <div key={idx} className={`gallery-item gallery-item-${idx}`}>
            <img
              src={img.src}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 1220px) {
          a {
            gap: 30px;
          }
          a div:last-child {
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 770px) {
          a {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          a div:last-child {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        a:hover div:last-child img {
          transform: scale(1.03);
        }
      `}</style>
    </Link>
  );
}