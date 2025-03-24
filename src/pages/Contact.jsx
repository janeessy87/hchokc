import React from 'react'
import { TopCover } from '.'

import meetLegal from "../assets/Images/meetLegal.jpg"

import { useTitle } from '../hooks/useTitle'

export const Contact = () => {
  useTitle("Contact")
  return (
    <div>
      <TopCover 
      bg="dui"
      p="Free Initial Consultation | Available 7 Days a Week"
      h1="Contact us"
      />
    <div className=' flex  bg-white justify-center '>
      <div className='flex other:flex-col max-w-screen-2xl w-full  justify-center space-x-20 tab:p-4 tab:space-x-5 p-10 other:space-x-0 bg-white text-black dark:bg-black dark:text-white'>
        <div className='space-y-6 other:w-full  w-1/2'>
          <h1 className='font-serif text-2xl'>We’re here to help with your legal needs.
          </h1>

          <p className='text-lg font-extralight'>Fill out our contact form or give us a call to schedule a free consultation.</p>

          <img src={meetLegal} alt="" className='h-[18rem] object-cover w-full' />
          <div className='space-y-8 dark:bg-neutral-800 text-lg bg-neutral-200 flex flex-col px-4 py-10 my-0'>
              <h2 className='font-serif text-xl'>Address:</h2>
              <a className='underline font-extralight' href="https://maps.app.goo.gl/jZRaP2mGzPA9E3258">
              428 Dean A McGee Ave, Oklahoma City, OK 73102</a>
              <h2 className='font-serif text-xl'>Hours of Operation:</h2>
              <a className='underline font-extralight' href="tel:4052321515">4052321515</a>
              <h2 className='font-serif text-xl'>Hours of Operation:</h2>
              <p className='font-extralight'>Monday to Friday: 8:00 am - 7:00 pm <br />
                Saturday and Sunday: Phones will be answered <br />
             <br /> Phones are answered 24/7.</p>
              <h2 className='font-serif text-xl'>Parking:</h2>
              <p className='font-extralight'>Free parking available in our lot</p>
          </div>
        </div>
      <div className=' flex-col other:w-full w-1/2 items-center'>
                    <form className='flex rounded-md  flex-col p-5 py-10  text-black dark:bg-black bg-white border-[1px] dark:border-white border-black items-center dark:text-white' action="">
                        <div className='w-full'>
                        <label className='py-3 self-baseline'>Name*</label>

                        <div className='flex items-center my-4 space-x-2'>       

                          <label className='flex  w-1/2 flex-col ' htmlFor="firstName">
                              <input className='p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white' type="text" id='firstName' />
                                First Name
                          </label>
                        
                          <label className='flex  w-1/2 flex-col' htmlFor="firstName">
                          <input className='p-2 rounded-sm  text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white' type="text" id='firstName' />
                            Last Name
                          </label>

                        </div>

                        </div>

                        <label className='flex flex-col w-full' htmlFor="email">Email*
                            <input className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' type="email" id='email' />
                            </label>
                        
                        <label className='flex flex-col w-full' htmlFor="phone">Phone*
                            <input className='p-2 my-4  text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' type="tel" name="Phone" id="phone" />
                        </label>
                        
                        <label className='flex flex-col w-full' htmlFor="message">Message*
                            <textarea cols="30" rows="7" className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' type="textarea" id='message' />
                        </label>

                        <label className='flex flex-col w-full' htmlFor="intrests">What services are you interested in?
                            <input className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' type="text" id='intrests' />
                            </label>
                            
                        <label className='flex flex-col w-full' htmlFor="other">Other: case information
                            <input className='p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white' type="text" id='other' />
                            </label>

                        <input className='items-center px-6 py-2 my-10 text-2xl font-semibold text-white bg-orange-300 rounded hover:bg-orange-500 max-w-48' type="submit" value="Submit Form" />
                    </form>
                </div>
                </div>
      </div>
    </div>
  )
}