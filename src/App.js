import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Dashboard from './Components/Dashboard/Dashboard'
import NotFound from './Components/NotFound/NotFound';
import Product from './Components/Product/Product';
import Shipping from './Components/Shipping/Shipping';
import Register from './Components/Register/Register';
import PrivateOutlet from './Components/PrivateOutlet/PrivateOutlet';
import AuthProvider from './Context/AuthProvider';
import Payment from './Components/Payment/Payment';
import Order from './Components/Order/Order';

function App() {
  return (

    <AuthProvider>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />

                <Route path="/" element={<PrivateOutlet/>}>
                    <Route path="/shipping" element={<Shipping/>} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/order" element={<Order/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>
                
                <Route path="*" element={<NotFound/>} />
        </Routes>

    </AuthProvider>
     
  );
}

export default App;
