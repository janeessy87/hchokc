import React from 'react'
import { TeamTop } from '.'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { RTS } from '../../components/extras'
import { teamsLawyer } from '../../assets/Images/team'

import { useTitle } from '../../hooks/useTitle'

export const OurTeam = () => {
    useTitle("Our Team")
  return (
    <div className='bg-white dark:bg-black'>
        <TeamTop h1="Our Team" />
      <div className='flex flex-col items-center p-10 m-2'>
           <h1 className="pt-16 font-serif text-4xl text-yellow-500 other:text-3xl">Dedicated Legal Professionals at Your Service</h1>
           <h4 className='py-8 text-xl font-extralight text-black dark:text-white'>Meet the attorneys and staff at Hendrick, Casey, & Hutter:</h4>
            <div className='grid grid-cols-3 gap-48 py-4 tab:gap-14 other:grid-cols-1'>

                {
                    teamsLawyer.map((x, index) =>
                    <Link to="" key={index} className='flex flex-col max-w-[25rem] min-w-[13rem] items-center space-y-3'>
                    <img src={x.img} className='hover:scale-95' alt="" />
                    <h4 className='flex justify-center items-center font-serif text-black underline hover:scale-95 underline-offset-4 dark:text-white'>{x.lawyer}<FaArrowRight className='ml-4'/></h4> 
                </Link>
                    )
                }
                
            </div>
            </div> 
            <RTS/>

            <div className='bg-neutral-200 flex justify-center items-center'>
                <div className='flex flex-col w-full max-w-screen-xl p-20 other:p-10'>
                    <h1 className='py-14 font-serif text-center text-3xl text-black dark:text-white'>Get in Touch with E. Seth Hendrick</h1>

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

  )
}