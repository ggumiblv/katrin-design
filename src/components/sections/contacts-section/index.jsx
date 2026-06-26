import basketImage from '@/assets/icons/basket.webp';

import './index.sass';

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <h5 className="contacts__info">
          Приносите сложную, запутанную задачу. <span>Разберёмся.</span>
        </h5>
        <div className="contacts__body">
          <div className="contacts__body-item">Телеграм</div>
          <div className="contacts__body-item">Email</div>
          <div className="contacts__body-item">канал в тг</div>
        </div>

        <img className="contacts__image" src={basketImage} />
      </div>
    </section>
  );
}
