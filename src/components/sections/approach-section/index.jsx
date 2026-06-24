import approachImage from '@/assets/icons/approach.webp';

import './index.sass';

export default function Approach() {
  return (
    <section className="approach">
      <div className="approach__container">
        <div className="approach__title">
          <span>03</span> <h4>Как я работаю</h4>
        </div>

        <p className="approach__description">
          Исследую контекст, выстраиваю структуру и помогаю команде прийти к понятному и
          реализуемому решению.
        </p>
        <img className="approach__image" src={approachImage} />
      </div>
    </section>
  );
}
