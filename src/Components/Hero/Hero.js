import React from 'react';
import camera from "../../images/hero/camera.jpg";
import smartWatch from "../../images/hero/smartwatch.jpg"
import earpods from "../../images/hero/earphone.jpg"
import '../Hero/Hero.css'
const Hero = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-slide='carousel'>

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
        <h2 style={{fontSize:"24px", fontWeight:"700", color:"#212529"}} className='text-center my-3'>Polaroid Camera</h2>
        <img src={camera} className="d-block mx-auto" width={500} alt="..."/>
        <h3 style={{fontSize:"18px", color:"#212529"}} className='fw-bold text-center my-3'>Price: 22000 Taka</h3>
     
    </div>
    <div className="carousel-item" data-bs-interval="2000">
        <h2 style={{fontSize:"24px", fontWeight:"700", color:"#212529"}} className='text-center my-3'>Apple Watch</h2>
        <img src={smartWatch} className="d-block mx-auto" width={500} alt="..."/>
        <h3 style={{fontSize:"18px", color:"#212529"}} className='fw-bold text-center my-3'>Price: 33000 Taka</h3>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
        <h2 style={{fontSize:"24px", fontWight:"700", color:"#212529"}} className='text-center my-3'>Apple Airpods Pro</h2>
        <img src={earpods} className="d-block mx-auto" width={500} alt="..."/>
        <h3 style={{fontSize:"18px", color:"#212529"}} className='fw-bold text-center my-3'>Price: 22000 Taka</h3>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Hero;