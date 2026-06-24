import projectsData from '@/lib/projects';

import ProjectCard from '../project-card';

import futureProjectsImage from '@/assets/icons/future-projects.webp';

import './index.sass';

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__title">
          <span>01</span> <h4>Избранные проекты</h4>
        </div>

        <div className="projects__list">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
          <img
            className="projects__list-image"
            src={futureProjectsImage}
            alt="Будущие проекты - надпись"
          />
        </div>
      </div>
    </section>
  );
}
