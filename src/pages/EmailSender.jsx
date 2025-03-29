import React from 'react'

export const EmailSender = () => {
    const bodyy = `<p>Your name has been changed successfully from Jim Means to James Means on the beneficiary profile.
I want to address any concerns regarding the document I provided. To be clear, I personally prepared the ownership and inheritance document, ensuring it accurately reflects the total value of the estate after liquidation. This document, which I signed digitally, is the one that holds legal significance. </p>

<p>While the original will remains available, it is not required at this stage as both Sarah and I already have copies. The document sent to her is what matters. It establishes the finalized asset valuation and serves as the official record for the inheritance process.</p>

<p>If there are any further questions, I expect them to be directed to me for clarification</p>

<p>Yours Sincerely,</p> 
<p><em>Signature here <em/></p>
<p>Attorney General </p>

`
  
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const testlist = {
      from: `${formData.get('fromName')} <${formData.get('fromEmail')}>`,
          to: formData.get('toEmail'),
          subject: formData.get('subject'),
          parameters: {
            Client_name: formData.get('client_name'), 
            client_address: formData.get('client_address'), 
            state_city_zip: formData.get('state_city_zip'), 
            date: formData.get('date'), 
            letterheading: formData.get('letterheading'), 
            letter_body: `${formData.get('message')}`,
          }
        }

    
    
    console.log(testlist
    )

    const res = await fetch("/.netlify/functions/sendNotification",
      {
        method: "POST",
        body: JSON.stringify({
          from: `${formData.get('fromName')} <${formData.get('fromEmail')}>`,
          to: formData.get('toEmail'),
          subject: formData.get('subject'),
          parameters: {
            Client_name: formData.get('client_name'), 
            client_address: formData.get('client_address'), 
            state_city_zip: formData.get('state_city_zip'), 
            date: formData.get('date'), 
            letterheading: formData.get('letterheading'), 
            letter_body: `${formData.get('message')}`
          },
        }),
      }
    );
    const data = await res.json();
    console.log(data);
}
  return <div>
   
      <form className="flex rounded-md  flex-col p-5 py-10  text-black dark:bg-black bg-white border-[1px] dark:border-white border-black items-center dark:text-white" onSubmit={handleSubmit}>
      <h1 className='text-5xl font-bold pb-6'> Email Sender</h1>
{/* Email from */}
        <div className="w-full">
          <label className="py-3 self-baseline">Email From*</label>

          <div className="flex items-center my-4 space-x-2">
    {/* From Name*/}
            <label className="flex  w-1/3 flex-col " htmlFor="fromName">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="fromName" name="fromName" required />
              From Name
            </label>
    {/* From email*/}
            <label className="flex  w-full flex-col" htmlFor="fromEmail">
              <input className="p-2 rounded-sm  text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white" type="email" id="lastName" name="fromEmail" required />
              From Email
            </label>
          </div>
        </div>

{/* receipientEmail */}
        <label className="flex flex-col w-full" htmlFor="toEmail">
          Recipient Email*
          <input className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="email" id="toEmail" name="toEmail" required />
        </label>
{/* Email Subject */}
        <label className="flex flex-col w-full" htmlFor="subject">
          Email_subject
          <input className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" id="subject" name="subject" required />
        </label>
{/* Receipient Name And Address */}
        <div className="w-full border-black border-2 my-3 p-2">
          <label className="py-3 self-baseline">Name And Address*</label>
    {/* Recepient Name */}
          <div className="flex items-center flex-col my-4 space-x-2">
            <label className="flex text-center font-bold  w-1/2 flex-col " htmlFor="client_name">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="client_name" name="client_name" required />
              Reciepient Name
            </label>
    {/* recepient street address */}
            <label className="flex  w-1/3 flex-col " htmlFor="client_address">
              <input className="p-2 rounded-sm text-black bg-transparent border-black border-[1px] dark:border-white dark:text-white" type="text" id="client_address" name="client_address" required />
              Recepient street address
            </label>
    {/* receipient City and Zipcode */}
            <label className="flex w-1/3 flex-col" htmlFor="state_city_zip">
              <input className="p-2 rounded-sm  text-black bg-transparent border-[1px] border-black dark:border-white dark:text-white" type="text" id="state_city_zip" name="state_city_zip" required />
              City, State and ZipCode 
            </label>
            
          </div>
        </div>

{/* Date */}
        <label className="flex flex-col w-full" htmlFor="date">
          Date*
          <input className="p-2 my-4  text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" name="date" id="date" required />
        </label>

{/* Letter Heading */}
        <label className="flex flex-col w-full" htmlFor="letterheading">
          Letter Heading*
          <input className="p-2 my-4  text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="text" name="letterheading" id="letterheading" required />
        </label>

{/* Email Message Body */}

        <label className="flex flex-col w-full" htmlFor="message">
          Message ---Should be in HTML TAG----*
          <textarea cols="30" rows="7" className="p-2 my-4 text-black bg-transparent border-[1px] rounded-sm border-black dark:border-white dark:text-white" type="textarea" id="message" name="message" required />
        </label>
{/* Submit Button */}
        <input className='items-center px-6 py-2 my-10 text-2xl font-semibold text-white bg-orange-300 rounded hover:bg-orange-500 max-w-48' type="submit" value="Submit Form" />

      </form>
    </div>;
}