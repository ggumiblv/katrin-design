import { Link } from 'react-router-dom';

import './index.sass';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p>
          © 2026, Катрин, сайт всегда в доработке, спасибо за сборку{' '}
          <Link target="_blank" rel="noopener noreferrer" to={'https://github.com/ggumiblv'}>
            Гульназ
          </Link>
        </p>
        <p>UX/UI · Product</p>
      </div>
    </section>
  );
}
