import React from 'react';

interface Props {
   menuOpen: boolean;
}

function MobileNav({ menuOpen }: Props) {
   return (
      <div
         className='fixed right-0 top-0  h-screen w-screen z-10'
         style={{
            backdropFilter: 'blur(1px)',
         }}
      >
         <div className='w-full h-full flex'>
            {/* <p>Mobile Navs</p> */}
            <div className='h-full w-3/4 bg-[#112240] ml-auto'></div>
         </div>
      </div>
   );
}

export default MobileNav;
