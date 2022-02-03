import React from 'react'
import CheckoutItems from '../checkoutPage/CheckoutItems';
import './Payment.css'
import { useStateValue } from '../initialize/StateProvider'
import {Link} from 'react-router-dom'
import { getCartTotal } from '../initialize/reducer';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div classsName = 'payment'>
            <div className = 'payment_border'>
                <h1>
                    Checkout(
                        <Link to = '/checkout'>{cart?.length} items</Link>
                    )
                </h1>
                <div className = 'payment_content'>
                    <div className = 'payment_title'>
                        <h3>Ship to Address</h3>
                    </div>
                    <div className = 'payment_address'>
                        <p>{user?.email}</p>
                        <p>648 Someone Address</p>
                        <p>Milton, ON</p>
                    </div>
                </div>
                <div className = 'payment_content'>
                    <div className = 'payment_title'>
                        <h3>Review item and shipping</h3>
                    </div>
                    <div className = 'payment_items'>
                        {cart.map(item => (
                            <CheckoutItems
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                <div className = 'payment_content'>
                    <div className = 'payment_title'>
                        <h3>Pay with</h3>
                    </div>
                    <div className = 'payment_detail'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
