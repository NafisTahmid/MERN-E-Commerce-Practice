import {React, useState} from 'react';
import  {useParams } from 'react-router-dom' 
import products from '../../data/productsData.json'
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const Product = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const product = products.find(pd => pd.id === id);
   
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        shoppingCart(product);
        Swal.fire(
            'Successful!',
            `You've Added ${product.name}!`,
            'success'
          )
    }

    const shoppingCart = (product) => {
        setCart([...cart, product]);
        addToDB(product.id);
    }

    const handleClick = (product) => {
        shoppingCart(product);
        navigate('/shipping');
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>

            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Product Details</h1>

                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-4">

                        <img src={product.image} className="img-fluid mx-auto d-block"  width={250} alt={product.name} />

                        <div className="d-flex justify-content-center align-items-center mt-2">

                            <button onClick={() => addToCart(product)} className='btn btn-dark mt-2'>Add to Cart</button>
                            <button onClick={() => handleClick(product)} className='btn btn-success mt-2 ms-2'>Buy Now</button>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div style={{borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d'}} className="bg-white p-5 mt-4 mx-auto">
                            <h2 className="fs-5 fw-bold">{product.name}</h2>
                            <hr/>
                            <p className='fs-6 text-align-justify'>{product.description}</p>
                            <hr/>
                            <small>Price: <span className="fs-5 fw-bold">{product.price}</span>Taka</small>
                        </div>

                    </div>
                </div>
            </div>
            {/* {id} */}
            <Footer/>
        </section>
    );
};

export default Product;