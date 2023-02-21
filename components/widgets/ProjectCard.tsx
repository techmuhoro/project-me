import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faFolderClosed,
   faCodeBranch,
   faCodeMerge,
   faLink,
   faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

function ProjectCard() {
   return (
      <div className='w-[260px] h-[300px] bg-[#eafbff] py-4 px-4 rounded-md'>
         <div className='mb-4'>
            <span className='text-4xl text-primary font-bold rounded-sm'>
               <FontAwesomeIcon icon={faCodeMerge} />
            </span>
         </div>

         <p className='font-semibold text-[1.1rem] mb-1'>
            Mental health template website
         </p>
         <p className='text-[0.9rem]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            autem dolores, inventore ullam officiis quaerat illum laudantium
            fugit harum est.
         </p>
         <div>
            <span>
               <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
            <span>
               <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
         </div>
      </div>
   );
}

export default ProjectCard;
