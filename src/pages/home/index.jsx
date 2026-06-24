import Contacts from '@/components/sections/contacts-section';
import Approach from '@/components/sections/approach-section';
import Projects from '@/components/sections/projects-section';
import About from '@/components/sections/about-section';
import Tasks from '@/components/sections/tasks-section';
import Intro from '@/components/sections/intro-section';
import Header from '@/components/header';

import './index.sass';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Tasks />
      <Approach />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}
