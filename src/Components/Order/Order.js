import React from 'react';
import './Order.css'
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import {getStoredCart} from '../../utilities/localDB';
import products from '../../data/productsData.json'
import Swal from 'sweetalert2';

const Order = () => {

    const {user} = useAuth();
    const {displayName, email} = user;

    const shippingDetails = JSON.parse(localStorage.getItem('shipping'));
    const paymentMode = JSON.parse(localStorage.getItem('payment_mode'));

    let savedCart = getStoredCart();
    const cart = [];

    const handleCheckout = () => {
        console.log("Clicked!!!")
        Swal.fire(
            'Successful!',
            `Payment Done!!!`,
            'success'
          )
    }

    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        })
    }
    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className="text-center fs-4">Order Summary</h1>
                <div className="row">
                    <div className="order-container col-lg-8 col-md-12 px-3">

                    <h2 className="fs-4 mt-5">Shipping Details</h2>
                    <h3 className="fs-6">Name: {displayName}</h3>
                    <h3 className="fs-6">Email: {email}</h3>

                    {
                        shippingDetails && <p>{shippingDetails.address} {shippingDetails.postal_code} {shippingDetails.city} {shippingDetails.country}</p>
                    }
                  
                    <hr/>
                   
                <h2 className="fs-4">Payment Mode</h2>
                    <p>Method: {paymentMode}</p>
                  
                    <hr/>
                  
                <h2 className="fs-5">Order Items</h2>
                {
                    cart.map(item => 
                        <div className=''>
                            <div  key={item.id} className="d-flex justify-content-between align-items-center mt-3">
                                <div className="col-sm-1">
                                    <img width={60} className="img-fluid" src={item.image} alt={item.name} />
                                </div>

                                <div className="col-sm-4">
                                    <p className='text-center pt-3'>{item.name}</p>
                                </div>

                                <div className="col-sm-7 d-flex justify-content-end">
                                <p className='pt-3'>{item.quantity} x {item.price} = {item.quantity * item.price}</p>
                                </div>
                            </div>
                            <div className="">
                                <hr />
                            </div>
                         
                        </div>
                    )
                }
                    </div>

                    {/* Show on larger screen */}
                    <div className="bg-brand col-lg-4 mt-5 px-5 py-3 d-none d-lg-block">
                        <div style={{border: "1px solid lightgrey"}} className="p-2">
                                <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity},0)} Item(s)</h2>
                                <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price},0)} Taka</h3>
                        </div>

                        <div onClick={() => handleCheckout()} style={{border: "1px solid lightgrey"}} className="py-2">
                            <button id="btn_checkout" className="btn btn-dark mx-auto d-block p-2">Pay Now</button>
                        </div>
                    </div>

                    {/* Show on smaller screen */}
                    <div style={{boxShadow: " 0 3px 10px 3px #0003"}} className="bg-brand col-lg-4 mt-5 px-5 fixed-bottom py-3 d-lg-none">
                        <div style={{border: "1px solid lightgrey"}} className="p-2">
                                <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity},0)} Item(s)</h2>
                                <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price},0)} Taka</h3>
                        </div>

                        <div onClick={() => handleCheckout()} style={{border: "1px solid lightgrey"}} className="py-2">
                            <button id="btn_checkout" className="btn btn-dark mx-auto d-block p-2">Pay Now</button>
                        </div>
                    </div>
                </div>
                  
            </div>
        </section>
    );
};

export default Order;