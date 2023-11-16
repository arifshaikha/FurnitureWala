import {useState, useContext } from 'react';
import '../CSS/MyCart.css';
import MyCartCard from './MyCartCard';
import MyCartTotal from './MyCartTotal';
import { cartContext } from './Main';

const MyCart = () => {

    const myCart = useContext(cartContext);
    const [cartProduct, setCartProduct] = useState(myCart.cart);
    
    const remove=(i)=>{
        myCart.removeFromCart(i);
    }
    return (
        <div className="MyCartContainer flex container">
            <div className="MyCartContainerMainLeft ">
                <h2 className="MyCartContainerMainLeftMainHeading">
                    Cart
                </h2>

                {
                    cartProduct ? 
                    cartProduct.map((i)=>  <MyCartCard pro={i} fun={remove}/>) 
                    :null
                }
            </div>

            <div className="MyCartContainerMainRight flex">
                <MyCartTotal cartProductList={cartProduct} />
            </div>
        </div>
    )
}

export default MyCart;