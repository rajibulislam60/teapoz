import React from 'react'

const Button = ({ name, className }) => {
  return <div className={`px-[30px] py-[18px] text-[16px] font-medium rounded ${className}`}>{name}</div>;
};

export default Button