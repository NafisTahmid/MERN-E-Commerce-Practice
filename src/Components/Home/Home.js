import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import './Home.css'
import TopProducts from '../TopProducts/TopProducts';
import Footer from '../Shared/Footer/Footer';
import Cart from '../Cart/Cart';

const Home = (props) => {
    return (
        <div className="bg-brand bg-brand-container">

            <div>
                <Navbar/>
            </div>

            <div style={{maxHeight: '400px'}} className='container hero-container my-5'>
                <Hero/>
            </div>
        
            <div className="container">
                <TopProducts/>
            </div>
            <Footer/>
        </div>
       
    );
};

export default Home;