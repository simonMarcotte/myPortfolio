import React, { useState } from "react";
import Section from './common/Section'

import {BiMessageAltDetail} from "react-icons/bi"
import {IoMdCheckmark} from "react-icons/io"


const FORM_ENDPOINT = "https://public.herotofu.com/v1/57b8f330-73a9-11ee-a03a-39e472c5760d";

const iconContact ={
    i1: <BiMessageAltDetail/>,
    i2: <IoMdCheckmark />
}


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
      <div className="min-h-fit flex flex-col justify-start items-center py-12 px-5 text-center" name="contact">
        <h3 className='py-3 text-3xl lg:text-5xl'>{iconContact.i2}</h3>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md font-light text-gray-400">I will be in touch with you soon!</div>
      </div>
       
      </>
    );
  }

  return (
    <div name="contact">
        <Section
                title="Contact"
                subtitle="Please use this form if you wish to contact me!"
                icon = {iconContact.i1}
        >
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            >
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="focus:outline-none focus:ring focus:ring-gray-500 w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                type="email"
                placeholder="Email"
                name="email"
                className="focus:outline-none focus:ring focus:ring-gray-500 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
                />
            </div>
            <div className="pt-0 mb-3">
                <textarea
                placeholder="Your message"
                name="message"
                className="focus:outline-none focus:ring focus:ring-gray-500 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
                />
            </div>
            <div className="pt-0 mb-3">
                <button
                className="active:bg-gray-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none"
                type=""
                >
                Send Message
                </button>
            </div>
            </form>
        </Section>
    </div>
  );
};

export default ContactForm;