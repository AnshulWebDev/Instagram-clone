import React from 'react'
import Logo from '../utils/instagram-Logo.png';
import meta from '../utils/meta.png'

const Preloader = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full'>
        <div>
            <img className='w-20 h-20 flex items-center justify-center' src={Logo} alt="logo" />
        </div>

        <div className='mb-10 bottom-7 fixed'>
            <p className='text-center font-roboto font-light'>From</p>
            <img className='w-14 h-12' src={meta} alt="meta" />
        </div>
    </div>
  )
}

export default Preloader