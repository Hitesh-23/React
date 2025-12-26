import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between pl-7 pr-7 mt-5 items-center'>
        <div className='font-medium'>Horizon Courts</div>
        <div className='flex gap-10 font-light text-sm items-center'>
            <a href="#" className=' border border-gray-400 py-0.5 px-2 rounded-xl'>About Us</a>
            <a href="#">Services</a>
            <a href="#">Coaches</a>
            <a href="#">Events</a>
            <a href="#">Contacts</a>
        </div>
        <button className="border border-black bg-black py-1.5 px-5 rounded-2xl text-white text-sm">Book Now ↗</button>
    </nav>
  )
}



export default Nav