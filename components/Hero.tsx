import React from 'react';
import styles from './Hero.module.css';
import Nav from './Nav';

const Hero: React.FC = () => {
   const generetePattern = () => {
      const pattern = `10`;
      const paras = [];

      for (let i = 0; i <= 30; i++) {
         paras.push(<p className='mb-4 text-white'>{pattern.repeat(80)}</p>);
      }

      return paras;
   };
   return (
      <div className='h-screen w-screen relative'>
         <div
            className='h-full w-full overflow-hidden text-xl absolute top-0 left-0'
            style={{ letterSpacing: '26px', opacity: '0.025' }}
         >
            {generetePattern()}
         </div>
         <div className='h-full w-full absolute top-0 left-0 z-10'>
            <Nav />
            <p>Love</p>
         </div>
      </div>
   );
};

export default Hero;

// first container
// we need an underlay and overlay
