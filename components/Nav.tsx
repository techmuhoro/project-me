import React from 'react';

function Nav() {
   return (
      <div className='w-full h-24 border border-red-400 flex'>
         <div className=''>
            <p>James</p>
         </div>
         <div className='flex ml-auto'>
            <ul className='flex'>
               <li>About</li>
               <li>Experience</li>
               <li>Projects</li>
               <li>Contact</li>
            </ul>
            <div>
               <button>Resume</button>
            </div>
         </div>
      </div>
   );
}

export default Nav;
