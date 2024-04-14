import { useForm } from "react-hook-form"
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import googleImage from '../../images/google.png'
import gitHubImage from '../../images/github.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CryptoJS from "crypto-js";

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/products"; 

    const {user, google, gitHub, login, error} = useAuth();

    user.email && navigate(from, {replace:true});

    const {register,handleSubmit, formState: { errors },} = useForm()
     const onSubmit = (data) => {
        const encryptedPassword = CryptoJS.SHA256(data.password).toString();
        login(data.email, encryptedPassword);
        localStorage.setItem('userLoginCredentials', JSON.stringify({email: data.email, password: encryptedPassword}));
        
    }
    return (
       <section className='bg-brand bg-brand-container'>
            <Navbar/>
            <h1 className="fs-4 text-center mt-5">Sign In</h1>

                <div className="container">
                        <div className="col-md-6 col-sm-8 mx-auto d-block">      
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group mt-2">
                            <label htmlFor="email" className="form-label p-1">Email address</label>
                            <input type="email" className="form-control" id="email" {...register("email", {required: true})}/>
                            {errors.email && <span className="text-danger">Name is required</span>}
                            <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="password" className="form-label p-1">Password</label>
                            <input type="password" className="form-control" id="password" {...register("password", {required: true})}/>
                            {errors.password && <span className="text-danger">Password is required</span>}
                        </div>
                        <p> <small>We'll never share your information with anyone else</small></p>                       
                        
                        <input className = "btn btn-dark p-2 mt-1" type="submit" value="Sign In"/>
                        </form> 
                    </div>
                   

                    <div className="mt-3 d-flex justify-content-center align-items-center">
                        <Link to='/register' className='text-black text-decoration-none'>
                            Don't have an account? <span className='text-decoration-underline text-primary'>Register as a new user.</span>
                        </Link>
                    </div>
                    <p>{error}</p>

                    <div className="d-flex justify-content-center align-items-center mt-3">

                            <div className="col-sm-2">
                                <hr/>
                            </div>
                            <p className='text-center mt-3 px-3'>Or Sign in Using</p>
                            <div className="col-sm-2">
                                <hr/>
                            </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center p-2">
                        <button onClick={google} style={{minHeight: '60px'}} className="btn d-flex justify-content-center align-items-center mt-2 p-2">
                            <img className="btn" width={50} src={googleImage} alt="google" />Google
                        </button>
                        <button onClick={gitHub} style={{minHeight: '60px'}} className="btn d-flex justify-content-center align-items-center mt-2">
                            <img className="btn" width={40} src={gitHubImage} alt="gitHub" />
                            <p className="mt-3 ">Github</p>
                        </button>
                    </div>
            </div>
       </section>
    );
};

export default Login;
