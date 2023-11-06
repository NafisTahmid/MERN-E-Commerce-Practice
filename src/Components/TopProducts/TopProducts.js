import {React, useState} from 'react';
import'./TopProducts.css'
import products from "../../data/productsData.json"
import { Link, useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';

const TopProducts = () => {
    
    const navigate = useNavigate();

    

    let topProducts = [];
    for(let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * products.length);
        // topProducts.push(products[number]);
        if (!topProducts.includes(products[number])) {
            topProducts.push(products[number]);
        } else {
            i--;
        }
    }

      const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        addToDB(product.id);
        Swal.fire(
            'Successful!',
            `You've Added ${product.name}!`,
            'success'
          )
          navigate('/cart');
    }
    

  
    return (
        <section>
            <h1 style={{fontSize:"22px", color:"#212529", fontWeight:"700"}}>Top Products of the Week</h1>

            <div className="row product-container justify-content-center align-items-center">
                {
                      topProducts.map(product => {
                        return (
                            <div key={product.id} className="cart-deck my-5 my-2 col-lg-3 col-md-5 col-sm-8 mx-1">
                              
                                    <div className="cart">
                                    <Link to={`/product/${product.id}`} className= "text-decoration-none text-black">
                                        <img src={product.image} className="cart-img-top img-fluid d-block mx-auto" alt="" />
                                    </Link>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="cart-body mt-3 col-sm-6">
                                                <h5 className="cart-title">{product.name}</h5>
                                                <p className="cart-text">Price: {product.price}Taka</p>
                                            </div>

                                            <div className="d-flex col-sm-6">
                                                    <div className='col-sm-6'>
                                                        <button onClick={() => navigate(`/product/${product.id}`)} className="btn btn-outline-dark my-3">Details</button>
                                                    </div>

                                                    <div className='col-sm-6 mx-3'>
                                                        <button onClick={() => addToCart(product)} className="btn btn-outline-secondary my-3">Cart</button>
                                                    </div>
                                                  
                                                    
                                            </div>
                                            

                                        </div>
                                    </div>
                            
                                
                            </div>
                        )
                    })
                }
              
            </div>
       
        </section>
    );
};

export default TopProducts;