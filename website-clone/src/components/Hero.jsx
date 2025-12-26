import React from 'react'


// max-w-2xl max-w-7xl mx-auto
const Hero = () => {
  return (
    <section className='px-6 mt-5'>
      
      <div className='h-[50vh]  rounded-2xl bg-[url("/src/assets/img.avif")]   bg-cover bg-center flex items-center justify-center relative'>
        {/* Content */}
        <div className='relative z-10 text-white text-center px-4'>
          <h1 className='text-4xl font-light leading-tight'>Unleash Your Inner Champion Today.</h1>

          <h2 className='text-4xl font-light mt-1'>All in One Place.</h2>

          <p className='text-base text-gray-200 mt-4'>Join the ultimate tennis experience — where passion meets performance,and every swing brings you closer to victory.</p>

          <button className='mt-6 bg-black px-6 py-3 rounded-xl text-sm'>Start your own journey </button>
        </div>
      </div>

    </section>
  )
}







export default Hero

