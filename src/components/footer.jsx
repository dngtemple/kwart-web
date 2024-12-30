import React from 'react'

import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function footer() {
  return (
    
          <footer className="py-2 bg-[#1F1F1F]">
            <div className="container flex flex-col justify-center items-center">
              
              <div className="flex justify-between items-center flex-col lg:flex-row w-full lg:grid-cols-3  gap-6 mt-1">
                <a
                  href=""
                  className="logo text-white flex items-center gap-2 font-ClashDisplayMed capitalize text-xl"
                >
                  <img src="image.png" alt="" className="w-[2rem] sm:w-[2rem]" />
                </a>
                <p className="text-white text-sm font-normal font-['Clash Display'] leading-relaxed">
                  Copyright © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://t.me/kojokwarteng">
                    <FaTelegram className='text-white'/>
                  </a>
                  <a href="https://twitter.com/kojokwarteng_">

                    <FaSquareXTwitter className='text-white' />
                  </a>
                  <a href="https://wa.me/233561790240
">
      
                    <FaWhatsappSquare className='text-white'/>
                  </a>

                  <a href="https://www.instagram.com/kojo_kwartz?igsh=MWh1a3YxcW9rZGV3bA==">

                    <FaInstagramSquare className='text-white'/>
                  </a>
                </div>
              </div>
            </div>
          </footer>
  )
}
