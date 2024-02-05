'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import '../app/globals.css'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { navItems, socialMed } from '@/constants/constants';
import { listContainer, listItems, navSide } from '@/constants/animations';


const Nav = () => {
  
  const [navOpened, isNavOpened] = useState(false);
  const scroll = 20;
 
  return (
    <nav className='fixed z-40 top-0 bg-white overflow-hidden' >
      <section className="flex w-[100vw] justify-between py-5 px-3 md:px-20 items-center">
        <h1 className="text-5xl">
          D<span className="-ml-5">D</span>
        </h1>
        <div className="cursor-pointer" onClick={() => isNavOpened(true)}>
          <CiMenuFries size={45} />
        </div>
        <AnimatePresence mode="wait">
          {navOpened && (
            <motion.div
              variants={navSide}
              initial="initial"
              animate="animate"
              exit="initial"
              className="fixed top-0 px-10 right-0 bg-black text-white w-[100%] lg:w-[40%] h-full   z-50"
            >
              <div className='flex flex-col items-center justify lg:items-start'>
                <RxCross1
                  onClick={() => isNavOpened(false)}
                  size={30}
                  className="md:right-20 right-5 cursor-pointer absolute top-10"
                />
                <motion.div>
                  <motion.ul
                    variants={listContainer}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="mt-28 mb-16 text-center"
                  >
                    {navItems.map((item, id) => (
                      <div className="overflow-hidden w-[280px] ">
                        <motion.li
                          variants={listItems}
                          key={id}
                          whileHover={{scale: 1.2, x:20}}
                          whileTap={{scale:0.8, x: 0}}
                          className="cursor-pointer pl-2 text-center md:text-start mb-5 text-3xl md:text-5xl"
                          >
                          {item}
                        </motion.li>
                      </div>
                    ))}
                  </motion.ul>
                </motion.div>
                <motion.ul
                  variants={listContainer}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className=''
                  >
                  {socialMed.slice(0,3).map((med,id) => (
                    <div key={id} className="overflow-hidden w-[150px]">
                      <motion.li
                        
                        variants={listItems}
                        whileTap={{scale:0.8, x: 0}}
                        whileHover={{scale: 1.2, x:20}}
                        className="text-gray-400 cursor-pointer mb-1 ml-4 text-md md:text-xl"
                      >
                        {med}
                      </motion.li>
                    </div>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </nav>
  );
}

export default Nav