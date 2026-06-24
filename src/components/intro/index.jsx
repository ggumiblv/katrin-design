import './index.sass';

import personImage from '/favicon.png';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">
        <p className="intro__subtitle">UX/UI дизайнер · ex-арт-директор</p>
        <div className="intro__title">
          Когда проект кажется слишком сложным, помогаю навести порядок
          <img className="intro__title-image" src={personImage} />
        </div>
        <p className="intro__description">
          Превращаю хаотичные вводные в понятные сценарии, интерфейсы и цифровые продукты, которые
          <span>можно</span> нужно реализовать.
        </p>
        <div className="intro__actions">
          <button className="intro__actions-button intro__actions-button--primary">
            посмотреть проекты
          </button>

          <button className="intro__actions-button intro__actions-button--secondary">
            связаться
          </button>
        </div>
      </div>
    </section>
  );
}
