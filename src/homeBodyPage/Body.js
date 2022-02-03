import React from 'react'
import './Body.css'
import './Product.css'
import Product from './Product'

function Body() {
    return (
        <div className = "body">
            <div className="body_row">
                <Product
                id = '2024857457'
                title = 'JAXON LANE BRO MASK Facial Mask ' 
                price = {61.80} 
                image = "https://m.media-amazon.com/images/I/81LyCmx+ZZL._AC_SL1500_.jpg"
                rating = {5}
                />
                <Product
                id = '2405820543'
                title = 'Bowflex Adjustable Dumbbell' 
                price = {398.97} 
                image = "https://m.media-amazon.com/images/I/51ZrS1jL7WL._AC_SL1000_.jpg"
                rating = {4}/>
            </div>
            <div className="body_row">
                <Product
                id = '4693985936'
                title = 'PS5 Controller Charger' 
                price = {28.04} 
                image = "https://m.media-amazon.com/images/I/61c4Ud7Os4L._AC_SL1500_.jpg"
                rating = {4}/>
                <Product
                id = '732540683'
                title = 'Samsung Galaxy Book Go 14" Laptop' 
                price = {299.99} 
                image = "https://m.media-amazon.com/images/I/61iFnKVSbiL._AC_SL1000_.jpg"
                rating = {3}/>
            </div>
            <div className="body_row">
                <Product
                id = '249895939'
                title = 'Disposable Face Masks 3 Ply Masks' 
                price = {15.95} 
                image = "https://m.media-amazon.com/images/I/61gIb6bMM8L._AC_UX679_.jpg"
                rating = {4}/>
                <Product
                id = '948728592'
                title = 'Apple Watch Series 6 (GPS + Cellular)' 
                price = {659.99} 
                image = "https://m.media-amazon.com/images/I/81iqHdhp4wL._AC_SL1500_.jpg"
                rating = {3}/>
            </div>
            <div className="body_row">
                <Product
                id = '968375623'
                title = 'Adjustable Weight Bench Workout' 
                price = {169.99} 
                image = "https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg"
                rating = {4}/>
                <Product
                id = '867356782'
                title = 'Sony Alpha 7C Compact Camera Kit' 
                price = {2698} 
                image = "https://m.media-amazon.com/images/I/71haVatNjlL._AC_SL1500_.jpg"
                rating = {4}/>
            </div>
            <div className="body_row">
                <Product
                id = '6897328058'
                title = 'DaoLxi Mens Running Walking Tennis Gym Athletic Shoes Fashion Sneakers Casual Ligthweight Workout Sports Shoes ' 
                price = {44.99} 
                image = "https://m.media-amazon.com/images/I/41AqtY21E2L._AC_UX1200_.jpg"
                rating = {5}
                />
            </div>
        </div>
    )
}

export default Body
