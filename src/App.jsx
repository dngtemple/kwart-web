import { useState } from 'react'
import './App.css'

import Footer from "./components/footer.jsx";
import Slider from './components/slider';
import Header from './components/header';
import Services from "./components/services.jsx"
import Testimonials from './components/testimonials';

function App() {


  return (
    <>
     <Header/>
     <Testimonials/>
     <Services/>
     <Slider/>
     <Footer/>
    </>
  )
}

export default App
