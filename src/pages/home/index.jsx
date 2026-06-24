import Projects from '@/components/projects';
import Header from '@/components/header';
import Intro from '@/components/intro';

import './index.sass';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}
