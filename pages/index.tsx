import type { NextPage } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Projects from '@/components/sections/Projects';

const Home: NextPage = () => {
   return (
      <div>
         <Hero />
         <About />
         <Projects />
         <Footer />
      </div>
   );
};

export default Home;
