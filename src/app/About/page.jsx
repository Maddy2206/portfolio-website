
import React from 'react';
import Image from 'next/image';
import Skills from './_components/Skills';
import Timeline from './_components/Timeline';

function Page() {
  return (
    <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-32 bg-gradient-to-b from-purple-300 to-red-300'>
      {/* Biography */}
      <div className='flex items-center gap-12 md:gap-12'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold'>About Me</h2>
          <p className='text-lg'>Passionate about AI, Machine Learning, and competitive programming, I am a second-year B.Tech student at IIT Mandi. I am also a sports enthusiast and have been a national-level Table Tennis player. Dedicated to solving real-world challenges and exploring new horizons in technology.</p>
        </div>
        <div className='flex-shrink-0'>
          <Image src='/profile.png' height={400} width={400} />
        </div>
      </div>

      {/* Skills */}
      <div className='w-full flex justify-center'>
        <Skills />
      </div>

      {/* Education and Timeline */}
      <div className='flex flex-col md:flex-row items-start gap-8 md:gap-12 pb-30'>
        <h1 className='font-bold text-5xl'>EDUCATION</h1>
        <Timeline />
      </div>
    </div>
  );
}

export default Page;
