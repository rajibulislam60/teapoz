import React, { useState } from "react";
import CartImg1 from "./../components/images/cart1.jpg";
import Button from "./Button";
import { IoBagOutline } from "react-icons/io5";

const Ecart = ({ src, name, price }) => {
  let [cart, setCart] = useState(false);

  let addToCart = () => {
    setCart(!cart);
  };

  return (
    <div>
      <div className="w-[300px] border group bg-[#F6F6F6] rounded-md mt-6 relative">
        <div className="">
          <img src={src} alt="cart product image" className="w-full" />
          <div className="py-5 px-2">
            <p className="text-[18px] font-semibold text-[#194a33] hover:text-[#8cbc4f] leading-[22px]">
              {name}
            </p>
            <div className="flex justify-between text-[18px] font-medium mt-3">
              <h5>${price}</h5>
              <button
                onClick={addToCart}
                className="group-hover:bg-[#8cbc4f] group-hover:text-white text-[20px] font-bold px-2 py-2 rounded-full duration-[0.4s]"
              >
                <IoBagOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
      {cart && (
        <div>
          <div className="w-full absolute top-0 left-0 z-50 flex justify-center items-center">
            <div className="w-[700px] rounded-md">
              <div className="bg-[#8cbc4f] p-6 relative">
                <h2 className="text-[18px] font-semibold leading-[22px] text-white text-center">
                  Product successfully added to your shopping cart
                </h2>
                <button
                  onClick={() => setCart(false)}
                  className=" ml-2 py-2 px-3 text-xl font-semibold text-white rounded-[8px] absolute top-[50%] translate-y-[-50%] right-0"
                >
                  X
                </button>
              </div>
              <div className=" w-full h-[400px] bg-white px-[30px]">
                <div>
                  <h4 className="text-[18px] font-semibold leading-[22px] pt-[20px]">
                    There is 0 item in your cart.
                  </h4>
                  <div className="text-[14px] font-semibold leading-[20px] pt-[20px] flex justify-between">
                    <p>Subtotal:</p>
                    <p>$ 0.00</p>
                  </div>
                  <div className="text-[14px] font-semibold leading-[20px] pt-[20px] flex justify-between">
                    <p>Total (tax excl.):</p>
                    <p>$ 0.00</p>
                  </div>
                  <div className="text-[14px] font-semibold leading-[20px] pt-[20px] flex justify-between">
                    <p>Total (tax incl.):</p>
                    <p>$ 0.00</p>
                  </div>
                  <div className="text-[14px] font-semibold leading-[20px] pt-[20px] flex justify-between">
                    <p>Taxes:</p>
                    <p>$ 0.00</p>
                  </div>
                  <Button
                    name="Preceed to checkout"
                    className="uppercase text-[18px] font-semibold leading-[22px] text-white text-center bg-[#8cbc4f] mt-[90px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecart;
