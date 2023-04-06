import React from 'react';

const Tshirt = ({tshirt}) => {
  // console.log(tshirt)
  const {picture,name,gender,price} =tshirt;
  return (
    <div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Tshirt;