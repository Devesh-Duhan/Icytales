import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/common/Button";
import { ButtonLeftArrow, RightArrow } from "../../../components/common/Icons";
import { items } from "../../../components/common/Helper";

const Form = () => {
  const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  return (
    <div className="max-w-285.5 flex gap-[61.5px] w-full mx-auto px-4">
      <div>
        {" "}
        <div className="max-w-182.5 w-full">
          <h2 className="text-[20px] text-[#0F0200] font-bold mb-7.5">
            Billing Address:
          </h2>
          <div className="grid grid-cols-2 gap-x-7.5 gap-y-7 mb-5">
            <div>
              <label className="text-[16px] text-lightbrown font-medium ">
                First name
              </label>
              <input className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-[16px] text-lightbrown font-medium ">
                Last name
              </label>
              <input className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-7.5 gap-y-7 mb-5">
            <div>
              <label className="text-[16px] text-lightbrown font-medium">
                Email address
              </label>
              <input
                type="email"
                className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-[16px] text-lightbrown font-medium ">
                State
              </label>
              <select className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-7.5 gap-y-7 mb-10">
            <div>
              <label className="text-[16px] text-lightbrown font-medium ">
                City
              </label>
              <select className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black">
                <option>Select City</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div>
              <label className="text-[16px] text-lightbrown font-medium ">
                Zip / postal code
              </label>
              <input className="border mt-5 border-[#E3E4E5] h-12.75 w-87.5 rounded-[25px] px-3 py-2 outline-none focus:border-black" />
            </div>
          </div>
          <h2 className="text-[20px] text-[#0F0200] font-bold mb-7.5">
            Payment Method:
          </h2>
          <div className="w-full flex justify-between px-4 h-12.75 max-w-182.5 rounded-[25px] border border-[#E3E4E5]">
            <input
              type="radio"
              name="radio"
              id="radio"
              placeholder="Credit Card"
            />
            <div className="flex items-center">
              <Image
                src="/images/checkout-cards.png"
                alt="cards"
                width={122}
                height={22}
              />
            </div>
          </div>
          <div className="pt-6.75">
            <label
              htmlFor=""
              className="text-[16px] text-lightbrown font-medium "
            >
              Card number
            </label>
            <input
              type="number"
              name=""
              id=""
              className="w-full flex justify-between px-4 h-12.75 max-w-182.5 rounded-[25px] border border-[#E3E4E5] mt-5"
            />
          </div>
          <div className="pt-6.75 flex gap-7.75 w-full">
            <div className="col-span-2 flex gap-7.75 max-w-182.5 w-full">
              <div>
                <label className="text-[16px] text-lightbrown">
                  Expiration date
                </label>
                <div className="flex gap-5.5 mt-5.25">
                  <select className="w-46 text-[14px] text-lightbrown border border-gray-200 rounded-[25px] px-3 py-2 h-12.25 outline-none focus:border-black">
                    <option>Month</option>
                  </select>
                  <select className="w-35.5 border border-gray-200 text-[14px] text-lightbrown rounded-[25px] px-3 py-2 h-12.25  outline-none focus:border-black">
                    <option>Year</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label className="text-[16px] text-lightbrown">
                  Security Code
                </label>
                <input
                  type="text"
                  className="max-w-87.5 mt-5.25 w-full border border-[#E3E4E5] rounded-[25px] h-12.75"
                />
              </div>
            </div>
          </div>
          <div className="max-w-182.5 w-full justify-between flex px-4 items-center  border border-[#E3E4E5] rounded-[25px] h-12.75 mt-9.75">
            <div className="flex gap-4 items-center">
              <input type="radio" name="payment" className="hidden peer" />

              {/* Custom radio */}
              <span
                className="
      w-7.25 h-7.25
      rounded-full
      border border-[#E3E4E5]
      bg-white
      flex items-center justify-center
    "
              >
                {/* Inner dot */}
                <span
                  className="
        w-3.25 h-3.25
        rounded-full
        bg-black
        scale-0
        peer-checked:scale-100
        transition
      "
                />
              </span>
              <span className="text-sm font-medium">Cash on Delivery</span>
            </div>
            <div>
              <Image
                src="/images/cash-on-delivery.png"
                alt="COD"
                width={16.13}
                height={15}
              />
            </div>
          </div>
          <p className="text-[14px] text-center pt-10 text-lightbrown">
            By clicking the button, you agree to the{" "}
            <Link href="/termsAndConditions">
              <span className="text-[14px] text-[#F83D8E]">
                Terms and Conditions
              </span>
            </Link>{" "}
          </p>
          <div>
            <Button
              theme="primary"
              height="h-[62px]"
              width="w-[730px]"
              iconposition="flex gap-[23.68px]"
              icons={<RightArrow />}
              className="mt-8.25"
            >
              Place Order Now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm h-fit bg-white rounded-[20px] shadow-sm border-t border-darkpurple">
        {/* Header */}
        <div className="flex justify-between px-5 py-5.5 border-b border-[#E5E5E5]">
          <span className="text-sm font-bold text-[#0F0200]">Items</span>
          <span className="text-sm font-bold text-[#0F0200]">Price</span>
        </div>

        {/* Items */}
        <div className="">
          {items.map((item) => (
            <div key={item.id} className="px-5 py-4 border-b border-[#E5E5E5] ">
              <div className="flex justify-between  ">
                <span className="text-[16px] text-[#0F0200] font-bold">
                  {item.title}
                </span>
                <span className="text-[14px] text-[#0F0200] font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-lightbrown mt-2.5 max-w-[179.56px] w-full">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between px-5 py-4 border-t border-gray-100">
          <span className="text-sm font-semibold">Grand Total</span>
          <span className="text-sm font-semibold text-pink-500">${total}</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
