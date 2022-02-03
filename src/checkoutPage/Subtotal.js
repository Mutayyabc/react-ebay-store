import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../initialize/StateProvider';
import { getCartTotal } from '../initialize/reducer';
import {motion} from "framer-motion";
import {useHistory} from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [ {cart}, dispatch] = useStateValue();
    return (
        <div className = 'subtotal'>
            <CurrencyFormat
             renderText={(value) => (
                <>
                 <p>
                   Subtotal ({cart?.length} items): <strong>{value}</strong>
                 </p>
                </>
            )}
            decimalScale = {2}
            value = {getCartTotal(cart)}
            displayType={"text"}
            thousandseperator={true}
            prefix={"$"}
          />
          <motion.button whileHover={{scale:1.2}} onClick = {e => history.push('/payment')}> Procced to Checkout</motion.button>
        </div>

    );
}

export default Subtotal
