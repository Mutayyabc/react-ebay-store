import React from "react";
import "./Product.css";
import { useStateValue } from "../initialize/StateProvider";
import {motion} from "framer-motion";
function Product({title, image, price, rating, id}) {
    const [{cart}, dispatch] = useStateValue();
    const addToCart = () => {
        //dispatch item to data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <motion.div className = "product" whileHover={{scale:1.1}}>
            <div className = "product_info">
                <p> {title} </p>
                <p className="product_price">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
                <div className = "product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
                <img src = {image} alt ="" />
                <motion.button whileHover={{scale:1.2}} onClick={addToCart} >Add to Cart</motion.button>
        </motion.div>
    )
}

export default Product
