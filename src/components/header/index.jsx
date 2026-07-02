import LogoImage from '@/assets/icons/logo.svg?react';
import menuImage from '@/assets/icons/button.webp';

import './index.sass';

export default function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <LogoImage className="header__logo" />

        <button className="header__menu">
          <img src={menuImage} />
        </button>

        <nav className="header__nav">
          <button className="header__nav-button">проекты</button>
          <button className="header__nav-button">подход</button>
          <button className="header__nav-button">ми</button>
          <button className="header__nav-button header__nav-button--accent">связаться</button>
        </nav>
      </div>
    </section>
  );
}
