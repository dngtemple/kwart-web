import { useState } from 'react'
import './App.css'

import Footer from "./components/footer.jsx";
import Slider from './components/slider';
import Header from './components/header';
import Services from "./components/services.jsx"
import Testimonials from './components/testimonials';
import Gallery from './components/gallery';
import Banner from './components/banner';

function App() {


  return (
    <>
     <Header/>
     <Banner/>
     <Gallery/>
     <Services/>
     <Slider/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App
