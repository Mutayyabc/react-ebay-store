import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from '../initialize/StateProvider';
import CheckoutItems from './CheckoutItems';

function Checkout() {
    const [ {cart, user}, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className ="checkout_left">
                <img className = "checkout_ad" src ="https://www.wordstreamcdn.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg" alt =""/>
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping Cart</h2>
                    {cart.map(item => (
                        <CheckoutItems
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />  
                    ))}
               

                </div>
            </div>
            <div className = "checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
