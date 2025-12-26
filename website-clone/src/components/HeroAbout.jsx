import React from 'react'

const HeroAbout = () => {
  return (
    <div className='px-6 mt-4 flex items-center justify-between h-[15vh]'>
        <div className=''>
            <button className='border px-3 py-1 rounded-2xl border-gray-300 font-light'>About Horizon</button>
        </div>
        <div className='max-w-xl'>
            <p>At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
        </div>
    </div>
  )
}

export default HeroAbout