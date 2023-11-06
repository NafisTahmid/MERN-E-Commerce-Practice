import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    let navigate = useNavigate();

    
    const {register,handleSubmit,formState: { errors },} = useForm()
    const onSubmit = (data) => {
        localStorage.setItem('shipping', JSON.stringify(data));
        navigate('/payment');
    }

    const shippingDetails = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem("shipping")) : {};

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className="fs-4 text-center">Shipping Details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 col-sm-8 mx-auto d-block">   
        
                        <div class="form-group mt-2">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control"  value={shippingDetails.address} {...register("address", {required: true})}/>
                            {errors.address && <span className="text-danger">Address is required</span>}
                            <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" value={shippingDetails.city} {...register("city", {required: true})}/>
                            {errors.city && <span className="text-danger">City is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="postal_code" className="form-label">Postal Code</label>
                            <input type="text" className="form-control" value={shippingDetails.postal_code} {...register("postal_code", {required: true})}/>
                            {errors.postal_code && <span className="text-danger">Postal code is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" value={shippingDetails.country} {...register("country", {required: true})}/>
                            {errors.country && <span className="text-danger">Country is required</span>}
                        </div>


                        <p> <small>We'll never share your information with anyone else</small></p>                       
                        
                        <input className = "btn btn-dark p-2 mt-1" type="submit" value="continue"/>
                    </div>
                </form> 
            </div>
        </section>
    );
};

export default Shipping;