import tasksData from '../../../lib/tasks';

import TaskCard from '../../task-card';

import './index.sass';

export default function Tasks() {
  return (
    <section className="tasks">
      <div className="tasks__container">
        <div className="tasks__title">
          <span>02</span> <h4>Какие задачи решаю</h4>
        </div>

        <div className="tasks__list">
          {tasksData.map((project) => (
            <TaskCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
