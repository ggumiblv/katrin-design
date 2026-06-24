import { Link } from 'react-router-dom';
import './index.sass';

export default function ProjectCard({ data }) {
  if (!data) return;
  return (
    <div className="project-card">
      <div className="project-card__header">
        <span className="project-card__header-number">0{data.id}</span>
        <div className="project-card__header-tags">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <h5 className="project-card__title">{data.name}</h5>
      <p className="project-card__description">{data.description}</p>
      <Link className="project-card__link">Смотреть кейс →</Link>
    </div>
  );
}
