// ...existing code...
"use client";
import Image from "next/image";
import { useState } from "react";
import { cartItemsData } from "../common/Helper";
import { LeftIcon, RightArrow, SafeandSecureIcon } from "../common/Icons";
import Button from "../common/Button";
import Link from "next/link";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(cartItemsData);

  // Increase Qty
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // ...changed code...
  const shippingCharge = 20;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const shipping = cartItems.length > 0 ? shippingCharge : 0;
  const grandTotal = subtotal + shipping;
  // ...existing code...

  return (
    <section className="max-w-277.5 w-full mx-auto px-3 pt-33.75 pb-37.25 max-lg:py-26 max-md:py-16 max-sm:py-8">
      <div className="flex justify-between max-xl:flex-col max-xl:justify-center max-xl:items-center gap-10 items-start">
        <div className="max-w-182.5  w-full">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-7.5 border-[#E5E5E5]">
            <h2 className="text-lg font-bold leading-4.5 text-darkbrown">
              Shopping Cart
            </h2>
            <p className="text-darkbrown text-lg font-bold leading-4.5">
              ({cartItems.length} Items)
            </p>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-lightgray font-medium py-6 border-b border-[#E5E5E5]">
            <p className="col-span-2">Product Details</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {/* Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid md:grid-cols-5 gap-3 items-center py-6 border-b border-[rgba(26,24,25,0.15)]"
            >
              {/* Product */}
              <div className="flex gap-6.5 items-center md:col-span-2">
                <div className=" rounded-[10px] ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={93}
                    height={93}
                  />
                </div>

                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-xs text-lightgray leading-3 pt-4">
                    Color:{" "}
                    <span className="text-darkbrown font-bold">
                      {item.color}
                    </span>
                  </p>
                  <p className="text-sm  text-lightgray leading-3 pt-1.5">
                    Size:{" "}
                    <span className="text-darkbrown font-bold">
                      {item.size}
                    </span>
                  </p>
                </div>
              </div>

              {/* Price */}
              <p className="text-pink font-bold  leading-4 ">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity */}
              <div className="flex items-center border justify-center  border-[#E3E4E5] rounded-[26px] w-26.75 h-9">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="font-bold leading-6.75 cursor-pointer text-lg pr-2 pl-3.5"
                >
                  -
                </button>
                <span className="px-4.5 py-[5.5px] border flex justify-center items-center border-[#E3E4E5]">
                  {item.qty}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="pr-3.5 pl-2 cursor-pointer py-1 text-lg"
                >
                  +
                </button>
              </div>

              {/* Total + Remove */}
              <div className="flex items-center justify-between">
                <p className="font-bold leading-4 text-darkbrown">
                  ${(item.price * item.qty).toFixed(2)}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="w-8.25 h-8.25 rounded-full border border-[#FF656573]/45 text-[#FF6565]  flex items-center justify-center hover:bg-[#FF6565] cursor-pointer hover:text-white transition"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping */}
          <button className="mt-9.5 cursor-pointer font-semibold text-darkpurple flex items-center gap-2">
            <span>
              <LeftIcon />
            </span>{" "}
            Continue Shopping
          </button>
        </div>

        {/* side sipping card */}
        <div className=" flex justify-center  max-xl:w-full">
          <div className="w-full max-lg:mx-auto bg-white rounded-[20px] border-t-2 border-darkpurple shadow-[0px_2px_73px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Top Border Gradient */}
            <div className="h-0.5 bg-darkpurple " />

            {/* Content */}
            <div className="p-[19px_32px_31px_32px]">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-center pb-5">
                Order Summary
              </h2>

              {/* Coupon Section */}
              <div className="flex justify-between items-center border-y border-[#E5E5E5] py-4">
                <p className="font-bold text-darkbrown leading-3.5">
                  Apply Coupons
                </p>

                <Button
                  theme="secondary"
                  height="h-[29px]"
                  width="w-[68px]"
                  className="font-semibold text-sm"
                  type="button"
                  disabled={false}
                >
                  Apply
                </Button>
              </div>

              {/* Product Details */}
              <div className="py-6.5 border-b border-[#E5E5E5] ">
                <h3 className="font-bold text-sm  leading-3.5 pb-5">
                  Product Details:
                </h3>

                <div className="flex justify-between text-lightgray font-medium text-sm leading-3.5">
                  <span>Sub Total</span>
                  <span className="font-semibold text-darkbrown">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-lightgray font-medium text-sm leading-3.5 pt-4">
                  <span>Shipping</span>
                  <span className="font-semibold text-darkbrown">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-b border-[#E5E5E5] py-7.5">
                <div className="flex justify-between items-center  ">
                  <span className="text-lg font-semibold">Grand Total</span>
                  <span className="text-xl font-bold text-pink-500">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout">
                  <Button
                    theme="primary"
                    height="h-[50px]"
                    width="w-full"
                    icons={<RightArrow />}
                    className="text-sm leading-3.5 mt-5"
                  >
                    Proceed to checkout
                  </Button>
                </Link>
              </div>

              {/* Bottom Info */}
              <div className="flex gap-2 justify-center  text-sm text-lightgray pt-5">
                <span className="mt-1">
                  <SafeandSecureIcon />
                </span>
                <p className="text-[11px] leading-4.5 font-medium">
                  Safe and Secure Payments, Easy Returns.
                  <br />
                  100% Authentic Products{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
