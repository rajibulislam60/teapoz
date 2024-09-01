import React from 'react'

const Button = ({ name, className }) => {
  return <div className={`px-5 py-3 text-[20px] font-medium rounded ${className}`}>{name}</div>;
};

export default Button