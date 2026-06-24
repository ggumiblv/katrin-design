import Projects from '@/components/projects-section';
import Tasks from '../../components/tasks-section';
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
    </div>
  );
}
