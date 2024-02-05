'use client'

import Nav from './Nav'

import React from 'react';

const Hero = () => {
  const p = "Designer Den";
  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
      <Nav />
      <div>
        <h1 className='text-5xl md:text-7xl lg:text-9xl'>Designer's Den</h1>
      </div>
    </section>
  );
}

export default Hero