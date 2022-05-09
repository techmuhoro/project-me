import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Home: NextPage = () => {
   return (
      <div>
         {/** Hero */}
         <Hero />
         <p>Hello World</p>
         {/* <p>James Muhoro, the best software engineerin in the world</p> */}
      </div>
   );
};

export default Home;
