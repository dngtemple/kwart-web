import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Footer from "./components/footer.jsx";
import Slider from './components/slider';
import Header from './components/header';
import Services from "./components/services.jsx"
import Testimonials from './components/testimonials';
import Gallery from './components/gallery';
import Banner from './components/banner';

import WeddingGallery from './pages/wedding';
import GraduationGallery from './pages/graduation';
import TravelGallery from './pages/travel';
import PortraitsGallery from './pages/portraits';

function App() {


  return (
    <>
     
    

    <BrowserRouter>
      <Routes>
          <Route path='/' element={
            <>
            <Header/>
            <Banner/>
            <Gallery/>
            <Services/>
            <Slider/>
            <Testimonials/>
            <Footer/>
            </>
          }/>
          <Route path='/wedding' element={<WeddingGallery/>}/>
          <Route path='/graduation' element={<GraduationGallery/>}/>
          <Route path='/travel' element={<TravelGallery/>}/>
          <Route path='/portraits' element={<PortraitsGallery/>}/>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
