import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
  const tshirts = useLoaderData()
  const [cart, setCart] = useState([])

  //buy now button working
  const handeladdtoCart = (tshirt) => {
    const exits = cart.find(Ts => Ts._id === tshirt._id)
    if (exits) {
      toast('You have already added this t-shirt')
    }
    else {
      const newCart = [...cart, tshirt]
      setCart(newCart)
    }

  }

  //remove btn working
  const removeaddtoCart = (id) => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  }

  return (
    <div className='home-container'>
      <div className='tshirts-container'>
        {
          tshirts.map(tshirt => <Tshirt

            key={tshirt._id}
            tshirt={tshirt}
            handeladdtoCart={handeladdtoCart}
          >
          </Tshirt>)
        }
      </div>

      <div className='cart-container'>
        <Cart
          cart={cart}
          removeaddtoCart={removeaddtoCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;