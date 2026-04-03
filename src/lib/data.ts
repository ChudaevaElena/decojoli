import projectsData from '../data/projects.json';
import infoData from '../data/info.json';
import { Project, Info } from '../types';

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find(p => p.slug === slug);
}

export function getInfo(): Info {
  return infoData as Info;
}