import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadCry } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({ cart, removeaddtoCart }) => {
  // message formate 
  let message;
  if (cart.length === 0) {
    message = message = <FontAwesomeIcon className='icon-design' icon={faSadCry} />
  }
  else {
    message = <FontAwesomeIcon className='icon-design' icon={faSmile} />
  }

  return (
    <div>
      <h2 className={cart.length === 0 ? 'header-design1' : 'header-design2'}>Order Summary:{cart.length}</h2>
      {
        cart.length > 0
          ? <span>carey on</span>
          : <span>added the product</span>
      }
      {message}
      {
        cart.map(tshirt =>

          <p key={tshirt._id}>
            <div className='summary-detiels'>
              <p>Name: {tshirt.name}</p>
              <p>Price: ${tshirt.price}</p>
              <p>Person: {tshirt.gender}</p>
            </div>
            <button className='summary-btn' onClick={() => removeaddtoCart(tshirt._id)}>X</button>
          </p>

        )
      }
    </div>
  );
};

export default Cart;