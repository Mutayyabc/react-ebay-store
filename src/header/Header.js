import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
import { useStateValue } from '../initialize/StateProvider';
import {auth} from '../login/firebase';

function Header() {
    const [ {cart, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user){
            auth.signOut();

        }
    }
    return (
        <div className = 'header'>
            <Link to = '/'>
                <img className = 'e_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBrRUzIrN4gGBwT7aMuwA0_xKNE4H_Asu8fHsA9dx9Heu-KwJaW8LR82s-IauuN4QNNM&usqp=CAU'/>
            </Link>


            <div
                className ='search_bar'>
                    <input
                    className = 'search_bar_inp' 
                    type = "text" />
                    <SearchIcon className = "header_searchLogo" />
            </div> 
            <div className = "header_nav">
                <Link to = {!user && "/login"}>
                <div onClick = {handleAuthentication} className = "four_headers">
                    <span className = 'header_optionLineOne'>
                        Hello, {user?.email || 'Guest'} 
                    </span>
                    <span className = 'header_optionLineTwo'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>

                <div className = "four_headers">
                    <span className = 'header_optionLineOne'>
                        Returns 
                    </span>
                    <span className = 'header_optionLineTwo'>
                        & orders
                    </span>
                </div>
                <div className = "four_headers">
                     <span className = 'header_optionLineOne'>
                        My 
                    </span>
                    <span className = 'header_optionLineTwo'>
                        eBay
                    </span>
                </div>
                <Link to= '/checkout'>
                  <div className = "shopping_cart">
                    <ShoppingCart />
                    <span className = "header_optionLineTwo header_Inventory">{cart?.length}</span>
                  </div>
                </Link>

                

            </div>
            </div>
    )
}

export default Header
