import React from 'react';

export default function Banner() {
  return (
    <section className='bg-zinc-800 flex w-full min-h-screen flex-col items-center justify-center text-white px-4 sm:px-8'>
      <h2 className='text-4xl text-center justify-center mb-4 sm:text-5xl'>Capturing Moments, One Frame at a Time</h2>

      <div className='text-sm text-center mb-6 sm:text-base md:text-sm'>
        Welcome to my photography portfolio—a collection of stories captured through the lens. 
        Dive into my work and experience the artistry of moments frozen in time. 
        Each photograph reveals a unique perspective, showcasing the beauty and emotion in everyday life. 
        Take a journey and uncover the magic in every frame.
      </div>

      <img src='p7.jpg' className='w-full sm:mt-10  h-80 sm:h-96 rounded-sm object-cover' />
    </section>
  );
}
