import React from 'react'
import Section from './common/Section'
import {GrContact} from "react-icons/gr"
import { useState } from 'react'



const Contact = () => {

  const iconsExp ={
    icon1: <GrContact/>
  };

  const [uname, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <Section
        title = "Contact Me"
        subtitle = "I want to work with you. Contact me here:"
        icon = {iconsExp.icon1}
    >
      <form>
        <div className='outline'>
          <input type = "text" id = "name" name = "name" value = {uname} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='outline'>
          <input type = "text" id = "email" name = "email" value = {email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='outline'>
          <input type = "text" id = "message" name = "message" value = {message} onChange={e => setMessage(e.target.value)}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>

    </Section>
  )
}

export default Contact
