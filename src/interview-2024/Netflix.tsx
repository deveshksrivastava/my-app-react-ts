import React from 'react'

export const Netflix = () => {
  return (
    <div>
        <div id="home" className='relative'>
            <div className='bg-cover bg-center h-96'>
                <img src="asserts/img/netflix-image.jpg" className=' w-full' alt="" />
            
            </div>
            <div className='absolute opacity-30 z-10 inset-0 bg-black'></div>
            <div className='flex justify-between p-2 absolute top-1 w-full'>
                <img src="asserts/img/neflix-logo.jpg" className='w-18 h-12' alt="" />
                <button type="button" className='text-red-200'>Sign In</button>
            </div>
            <div className=' text-center mx-auto w-4/5 text-white'>
                    <div className=' font-bold text-5xl'>Unlimited films, TV programmes and more</div>
                    <div className=' font-bold text-2xl'>Watch anywhere. Cancel at any time.</div>
                    <div className=' font-bold text-2xl'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div>
                        <input className='w-72 h-10 text-white' type="text" name="" id="email" placeholder='Email Address' />
                        <button className='w-48 h-10 bg-red-600 m-2 text-xl' type="button"> Get Started</button>
                    </div>
            </div>
          
           
            <div className='mx-auto w-4/5 text-center flex pt-10 bg-red-900 text-white'>
                <img src="asserts/img/popcorn.jpg" alt="" className='w-12 h-10' />
                <div id="card" className='text-left bg-black'>
                    <div>The Netflix you love for just £4.99.</div>
                    <div>Get the Standard with adverts plan.</div>
                    <div>Learn More </div>
                </div>
            </div>
       
        </div>

        
    </div>
  )
}
