import Approach from '@/components/approach-section';
import Projects from '@/components/projects-section';
import About from '@/components/about-section';
import Tasks from '@/components/tasks-section';
import Intro from '@/components/intro-section';
import Header from '@/components/header';

import './index.sass';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Tasks />
      <Approach />
      <About />
    </div>
  );
}
