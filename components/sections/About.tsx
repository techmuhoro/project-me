import React from 'react';
import Image from 'next/image';
import styles from './Sections.module.scss';

function About() {
   return (
      <div className='section-container mb-10 lg:flex text-black'>
         <div className='mb-10 lg:w-[60%]'>
            {/** left side */}
            <div className='flex items-center mb-4 '>
               <p className='section-title mr-2'>
                  <span className=''>About me</span>
               </p>
               <p className='grow h-[0.5px] bg-[#8892b0] mt-2'></p>
            </div>
            <div>
               <p className='mb-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quia inventore expedita, tempora cumque distinctio
                  debitis quo magni sit eveniet, a repellendus ab? A reiciendis
                  assumenda eveniet. Vitae, nam hic?
               </p>
               <p className='mb-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quia inventore expedita, tempora cumque distinctio
                  debitis quo magni sit eveniet, a repellendus ab? A reiciendis
                  assumenda eveniet. Vitae, nam hic?
               </p>
               <p className='mb-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quia inventore expedita, tempora cumque distinctio
                  debitis quo.
               </p>
               <div>
                  <p className='mb-2'>
                     I have worked with the following technologies in recent
                     years
                  </p>
                  <div className='flex'>
                     <ul className='w-1/2'>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>Javascirpt</span>
                        </li>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>React/Next.js</span>
                        </li>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>Graphql</span>
                        </li>
                     </ul>
                     <ul className='w-1/2'>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>Node.js</span>
                        </li>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>Laravel</span>
                        </li>
                        <li className='mb-2'>
                           <span className='mr-1'>🎯</span>
                           <span>Python</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className='flex justify-center items-center lg:w-[40%]  '>
            {/** right side */}
            <div className='me-avatar-container'>
               <div className='img-overlay' />
               <div className='img-underlay' />
               <Image
                  src={`/james-muhoro.png`}
                  layout='fill'
                  alt='myself'
                  className='me-avatar border-2 border-primary'
               />
            </div>
         </div>
      </div>
   );
}

export default About;
