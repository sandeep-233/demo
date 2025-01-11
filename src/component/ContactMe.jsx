import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { FiSend } from "react-icons/fi";

export const ContactMe = () => {
  // const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
  // const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID;
  // const YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY;

  // const form = useRef();

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    window.alert(`Thank You 😊, for your message.`);

    send('service_ki872xg', 'template_pwyoliv', toSend, 'Z9xewwWCiqs8A-1Yd')
      .then((response) => {
        console.log('SUCCESS!', response.status);
      }, (err) => {
        console.log('FAILED...', err);
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id='contact' className=' w-11/12 glassmorphism p-4 flex flex-col items-center mt-12'>
      <h1 className=' font-semibold text-2xl flex items-center justify-evenly mb-3 w-full text-center'>
        <span className=' border border-gray-500 w-[30%] flex'> </span> Contact Me <span className=' border w-[30%] border-gray-500 flex'> </span>
      </h1>

      <p className=' text-orange-600 mb-9 text-center'>
      Questions, thoughts, or just want to say hello?
      </p>

      <form
       onSubmit={sendEmail}
       className="flex w-full flex-col gap-4"
      >
        {/* name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput id="name" type='text'
            name='from_name'
            placeholder='Enter your name'
            value={toSend.from_name}
            onChange={handleChange}
            required
            className=' text-black'
          />
        </div>

        {/* email address  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email address" />
          </div>
          <TextInput id="email1" type="email" name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
            className=' text-black'
            required 
          />
        </div>

        {/* message text area  */}
        <div className="flex flex-col gap-2">
          <div className="mb-2 block">
            <Label htmlFor="message" value="message" />
          </div>
          <Textarea id="message" type="text" name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
            rows={4}
            className=' text-black'
          />
        </div>

        <Button
         type="submit"
         value='send'
         className='flex items-center w-fit pt-2 pb-2 pl-4 pr-4 bg-orange-600 hover:scale-95 cursor-pointer'
        >
          Send Message <FiSend className=' ml-3'/>
        </Button>
      </form>
    </div>
  )
}
