import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {

    const {registerUser,user,  error} = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/profile"; 

    user.email && navigate(from , {replace: true}); 

    const {register,handleSubmit,formState: { errors },} = useForm()

    const onSubmit = (data) => registerUser(data.name, data.image, data.email, data.password);
       
    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className="fs-4 text-center">Register</h1>
              
                        <div className="col-md-6 col-sm-8 mx-auto d-block">  
                        <form onSubmit={handleSubmit(onSubmit)}>
                         <div class="form-group mt-2">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control"  {...register("name", {required: true})}/>
                            {errors.name && <span className="text-danger">Name is required</span>}
                            <div id="name" className="form-text">We'll never share your name with anyone else.</div>
                        </div> 

                        <div class="form-group mt-2">
                            <label htmlFor="image" className="form-label">Copy your Profile Picture Link from the Internet</label>
                            <input type="text" className="form-control"  {...register("image", {required: true})}/>
                            {errors.image && <span className="text-danger">Profile Picture is required</span>}
                            <div id="image" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
        
                        <div class="form-group mt-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control"  {...register("email", {required: true})}/>
                            {errors.email && <span className="text-danger">Address is required</span>}
                            <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="password" className="form-label p-1">Password</label>
                            <input type="password" className="form-control" id="password" {...register("password", {required: true})}/>
                            {errors.password && <span className="text-danger">Password is required</span>}
                        </div>

                        <p>{error}</p>

                        <p> <small>We'll never share your information with anyone else</small></p>                       
                        
                        <input className = "btn btn-dark p-2 mt-1" type="submit" value="Register"/>
                        </form> 
                    </div>
               

                <div className="mt-3 d-flex justify-content-center align-items-center">
                        <Link to='/login' className='text-black text-decoration-none mb-3'>
                            Already have an account? <span className='text-decoration-underline text-primary'>Login to your account.</span>
                        </Link>
                    </div>
            </div>
        </section>
    );
};

export default Register;