import './index.sass';

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__title">
          <span>04</span> <h4>Обо мне</h4>
        </div>

        <div className="about__body">
          <p className="about__body-title">
            Системное мышление, открытая коммуникация <br />и
            <span> решения, которые можно реализовать.</span>
          </p>
          <div className="about__body-info">
            <div className="about__body-info__item">
              <span>опыт</span>
              <p>3+ года в цифровом дизайне и арт-дирекшне.</p>
            </div>
            <div className="about__body-info__item">
              <span>сферы</span>
              <p>
                цифровые продукты, интерактивные инсталляции, музейные проекты, VR/AR, брендинг,
                UX/UI.
              </p>
            </div>
            <div className="about__body-info__item">
              <span>люблю</span>
              <p>
                задачи, требующие системного мышления, внимания к деталям и поиска баланса между
                креативной идеей и её реализацией.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
