import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jayson-hernandez-910a061b" target="_blank"><BsLinkedin/></a>
        <a href="https://m.me/JaysonHJr" target="_blank"><RiMessengerLine/></a>
        <a href="mailto:jaysonjrhernandez05@gmail.com" target="_blank"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials