import './index.sass';

export default function TaskCard({ data }) {
  if (!data) return;
  return (
    <div className="task-card">
      <div className="task-card__header">
        <img src={data.icon} className="task-card__header-icon" />
        <div className="task-card__header-tag">{data.tag}</div>
      </div>
      <h5 className="task-card__title">{data.title}</h5>
      <p className="task-card__description">{data.description}</p>
    </div>
  );
}
