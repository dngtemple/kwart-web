"use client";

import React from "react";



export default function header() {

  function scrollToPosition() {
    const deviceWidth = window.innerWidth;
  
    if (deviceWidth <= 768) {
      // For mobile devices
      window.scroll({
        top: 5000, // Scroll to 300px from the top
        behavior: 'smooth'
      });
    } else if (deviceWidth <= 1024) {
      // For tablets
      window.scroll({
        top: 4000, // Scroll to 500px from the top
        behavior: 'smooth'
      });
    } else {
      // For desktops
      window.scroll({
        top: 3000, // Scroll to 800px from the top
        behavior: 'smooth'
      });
    }
  }
  return (
    <>
    <div class="bg-white">
  <div class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-2 py-2 md:mx-auto md:flex-row md:items-center">
    <h3 class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <img  src="image.png" className="w-[2rem]"/>
      Studio
    </h3>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <div class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li onClick={function(){
          window.scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth'
          });
        }} class="md:mr-12 text-sm">Gallery View</li>
        <li onClick={function(){
         scrollToPosition()
        }} class="md:mr-12 text-sm">Services</li>
        <li class="md:mr-12 text-sm"><a href="https://docs.google.com/forms/d/1h2ixT9YGVkMjTj_pNQ0VjtbP0zbqzQMokKJS-pra6wM">Contact me</a></li>
        
      </ul>
    </div>
  </div>
</div>

    
    
    </>
  );
}
