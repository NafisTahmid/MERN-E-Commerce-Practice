import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';
const Profile = () => {

    const {user, logOut} = useAuth();
    const {displayName, email, photoURL} = user;

    const shippingDetails = JSON.parse(localStorage.getItem('shipping'));
    console.log(shippingDetails);

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
                <div className="container mt-5">
                    <h1 className='text-center fs-4'>Profile</h1>
                    <h2>Customer's Information</h2>
                    <h3 className="fs-6">Name: {displayName}</h3>
                    <h3 className="fs-6">Email: {email}</h3>

                    {
                        shippingDetails && <p>{shippingDetails.address} {shippingDetails.postal_code} {shippingDetails.city} {shippingDetails.country}</p>
                    }
                    <img style={{borderRadius: "50%"}} src={photoURL}  className="img-fluid" width={60} alt={displayName} />

                    <div className="mt-3">
                        <button onClick={logOut} className="btn btn-danger btn-sm">Log Out</button> 
                    </div>
                     
                </div> 
            <Footer/>
        </section>
    );
};

export default Profile;