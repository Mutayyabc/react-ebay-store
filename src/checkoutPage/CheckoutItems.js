import React, { forwardRef } from 'react'
import './CheckoutItems.css';
import { useStateValue } from '../initialize/StateProvider';
import {motion} from "framer-motion";
function CheckoutItems({id, image, title, price, rating}){
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch ({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className = 'checkoutItems'>
            <img className='checkoutItems_image' src={image} />
            <div className = 'checkoutItems_descrip'>
                <p className = 'checkoutItems_title' > {title} </p>
                <p className='checkoutItems_price'>
                    <small> $</small>
                    <strong>{price}</strong>
                </p>
                <div className = 'checkoutItems_rating' >
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <motion.button whileHover={{scale:1.2}} onClick = {removeFromCart} >Remove from Cart</motion.button>
            </div>
        </div>
    )
}

export default CheckoutItems
