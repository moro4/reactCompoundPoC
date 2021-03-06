import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { ContextConsumer } from '../contexts/ContextProvider';

import {links} from '../data/dummy';

function Sidebar() {
   const {activeMenu, setActiveMenu, screenSize, currentColor} = ContextConsumer();
   const activeLink = 'flex items-center gap-3 pl-4 py-2.5 rounded-lg \
      text-md text-white m-2';
   const normalLink = 'flex items-center gap-3 pl-4 py-2.5 rounded-lg \
      text-md text-gray-700 dark:text-gray-200 dark:hover:text-black \
      hover:bg-light-gray m-2';

   function handleCloseSidebar() {
      screenSize <= 1200 && setActiveMenu(false);
   }

   return (
      <div className='ml-3 h-screen md:overflow-hidden overflow-auto
         md:hover:overflow-auto pb-10'
      >
         {activeMenu &&
         <>
            <div className='flex justify-between items-center'>

               <Link to="/" className='flex justify-between items-center gap-3
                  ml-3 mt-3 text-xl font-extrabold tracking-tight
                  dark:text-white text-slate-900'
               >
                  <SiShopware className='text-3xl' /> Shoppy
               </Link>

               <TooltipComponent content='Menu' position='BottomCenter'>
                  <button
                     type='button' onClick={() => setActiveMenu(!activeMenu)}
                     className='text-xl rounded-full p-3 hover:bg-light-gray
                     mt-4 block md:hidden'
                  >
                     <MdOutlineCancel />
                  </button>
               </TooltipComponent>
            </div>

            <div className='mt-10'>
               {links.map((item) => (
                  <div key={item.title}>
                     <p className=' text-gray-400 m-3 mt-4 uppercase'>
                        {item.title}
                     </p>
                     {item.links.map((link) => (
                        <NavLink key={link.name} to={'/' + link.name}
                           onClick={handleCloseSidebar}
                           className={({isActive}) => (
                              isActive ? activeLink : normalLink
                           )}
                           style={({isActive}) => (
                              {backgroundColor: isActive && currentColor}
                           )}
                        >
                           {link.icon}
                           <span className='capitalize'>
                              {link.name}
                           </span>
                        </NavLink>
                     ))}
                  </div>
               ))}
            </div>
         </>}
      </div>
   )
}

export default Sidebar