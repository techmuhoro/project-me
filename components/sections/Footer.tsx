import React from 'react';

function Footer() {
   return (
      <div className='section-container'>
         <p className='text-center text-black'>
            &copy; {new Date().getFullYear()} Design and build by James Muhoro
         </p>
      </div>
   );
}

export default Footer;
