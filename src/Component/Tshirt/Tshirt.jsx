import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handeladdtoCart}) => {
  // console.log(tshirt)
  const {picture,name,gender,price,index} =tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>Name:{name}</h4>
      <p>Price:${price}</p>
      <p>Gender:{gender}</p>
      <button onClick={()=>handeladdtoCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;