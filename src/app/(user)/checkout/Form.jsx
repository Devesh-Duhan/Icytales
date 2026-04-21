"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { RightArrow } from "../../../components/common/Icons";
import { cartItemsData } from "../../../components/common/Helper";

const Form = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [selectedCard, setSelectedCard] = useState("visa");
  const [upiId, setUpiId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const shippingCharge = 20;
  const subtotal = cartItemsData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const grandTotal = (subtotal + shippingCharge).toFixed(2);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/thankyou");
    }, 2000);
  };

  const cardOptions = [
    { id: "visa", name: "Visa", image: "/images/visa.svg" },
    { id: "mastercard", name: "Mastercard", image: "/images/mastercard.svg" },
    { id: "amex", name: "American Express", image: "/images/amex.svg" },
    { id: "discover", name: "Discover", image: "/images/discover.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6FB] via-[#FCF7FF] to-[#FFF0F9] py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 xl:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-[32px] border border-[#F0E3F4] bg-white p-6 shadow-[0_25px_60px_rgba(120,55,141,0.08)] xl:p-10"
        >
          <div className="flex items-start justify-between gap-4 pb-6 sm:flex-row sm:items-center sm:gap-0">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A884B5]">
                Secure Checkout
              </p>
              <h1 className="mt-3 text-[34px] font-bold text-[#0F0200] sm:text-[38px]">
                Complete your order
              </h1>
            </div>
            <div className="rounded-[26px] bg-gradient-to-r from-[#F83D8E] to-[#FF6B9D] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(248,61,142,0.25)]">
              2 min to finish
            </div>
          </div>

          <div className="space-y-8">
            <section className="rounded-[32px] border border-[#E9DFEE] bg-gradient-to-br from-[#FCF7FF] to-[#FFF5F9] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-[24px] font-bold text-[#0F0200]">
                    Billing Address
                  </h2>
                  <p className="text-sm text-[#6B6B6B]">
                    Add your billing details for faster checkout.
                  </p>
                </div>
                <div className="hidden min-w-[120px] items-center gap-3 rounded-[22px] border border-[#E8D3EF] bg-white px-4 py-3 sm:flex shadow-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F83D8E] animate-pulse" />
                  Secure payment
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="First name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="Enter first name"
                  error={errors.firstName?.message}
                />
                <Input
                  label="Last name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Enter last name"
                  error={errors.lastName?.message}
                />
                <Input
                  label="Email address"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="you@example.com"
                  error={errors.email?.message}
                />
                <Input
                  label="State"
                  type="select"
                  {...register("state", { required: "State is required" })}
                  options={[
                    { label: "Select State", value: "" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Maharashtra", value: "Maharashtra" },
                    { label: "Karnataka", value: "Karnataka" },
                  ]}
                  error={errors.state?.message}
                />
                <Input
                  label="City"
                  type="select"
                  {...register("city", { required: "City is required" })}
                  options={[
                    { label: "Select City", value: "" },
                    { label: "New Delhi", value: "New Delhi" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Bangalore", value: "Bangalore" },
                  ]}
                  error={errors.city?.message}
                />
                <Input
                  label="Zip / postal code"
                  {...register("zip", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^\d{5,6}$/,
                      message: "Invalid zip code",
                    },
                  })}
                  placeholder="123456"
                  error={errors.zip?.message}
                />
              </div>
            </section>

            <section className="rounded-[32px] border border-[#E9DFEE] bg-gradient-to-br from-[#FCF7FF] to-[#FFF5F9] p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-[24px] font-bold text-[#0F0200]">
                  Payment Method
                </h2>
                <p className="text-sm text-[#6B6B6B]">
                  Choose how you want to pay for your ice cream order.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <label
                  className={`group rounded-[28px] border p-5 transition-all duration-300 cursor-pointer ${paymentMethod === "card" ? "border-[#F83D8E] bg-white shadow-[0_20px_40px_rgba(248,61,142,0.15)] scale-105" : "border-[#E3E4E5] bg-[#FCF7FF] hover:shadow-md"}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-[#0F0200]">
                        Credit / Debit Card
                      </p>
                      <p className="mt-2 text-sm text-[#6B6B6B]">
                        Fast, secure payment with saved card details.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#FCE8F6] px-3 py-2 text-sm text-[#F83D8E]">
                      Card
                    </div>
                  </div>
                </label>

                <label
                  className={`group rounded-[28px] border p-5 transition-all duration-300 cursor-pointer ${paymentMethod === "upi" ? "border-[#F83D8E] bg-white shadow-[0_20px_40px_rgba(248,61,142,0.15)] scale-105" : "border-[#E3E4E5] bg-[#FCF7FF] hover:shadow-md"}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-[#0F0200]">
                        UPI Payment
                      </p>
                      <p className="mt-2 text-sm text-[#6B6B6B]">
                        Pay using UPI ID or QR code.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#E9E6FD] px-3 py-2 text-sm text-[#684BDE]">
                      UPI
                    </div>
                  </div>
                </label>

                <label
                  className={`group rounded-[28px] border p-5 transition-all duration-300 cursor-pointer ${paymentMethod === "cod" ? "border-[#F83D8E] bg-white shadow-[0_20px_40px_rgba(248,61,142,0.15)] scale-105" : "border-[#E3E4E5] bg-[#FCF7FF] hover:shadow-md"}`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-[#0F0200]">
                        Cash on Delivery
                      </p>
                      <p className="mt-2 text-sm text-[#6B6B6B]">
                        Pay when your order arrives at your door.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#E9E6FD] px-3 py-2 text-sm text-[#684BDE]">
                      COD
                    </div>
                  </div>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F0200] mb-4">
                      Select Card Type
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-4">
                      {cardOptions.map((card) => (
                        <label
                          key={card.id}
                          className={`group rounded-[20px] border p-4 transition-all duration-300 cursor-pointer ${selectedCard === card.id ? "border-[#F83D8E] bg-white shadow-[0_15px_30px_rgba(248,61,142,0.1)] scale-105" : "border-[#E3E4E5] bg-[#FCF7FF] hover:shadow-md"}`}
                        >
                          <input
                            type="radio"
                            name="cardType"
                            value={card.id}
                            checked={selectedCard === card.id}
                            onChange={(e) => setSelectedCard(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex flex-col items-center gap-2">
                            <Image
                              src={card.image}
                              alt={card.name}
                              width={40}
                              height={25}
                              className="object-contain"
                            />
                            <p className="text-sm font-medium text-[#0F0200]">
                              {card.name}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      label="Card number"
                      {...register("cardNumber", {
                        required: "Card number is required",
                        pattern: {
                          value: /^\d{16}$/,
                          message: "Invalid card number",
                        },
                      })}
                      placeholder="1234 5678 9012 3456"
                      inputMode="numeric"
                      error={errors.cardNumber?.message}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        label="Expiration month"
                        type="select"
                        {...register("expirationMonth", {
                          required: "Month is required",
                        })}
                        options={[
                          { label: "Month", value: "" },
                          { label: "01", value: "01" },
                          { label: "02", value: "02" },
                          { label: "03", value: "03" },
                          { label: "04", value: "04" },
                          { label: "05", value: "05" },
                          { label: "06", value: "06" },
                          { label: "07", value: "07" },
                          { label: "08", value: "08" },
                          { label: "09", value: "09" },
                          { label: "10", value: "10" },
                          { label: "11", value: "11" },
                          { label: "12", value: "12" },
                        ]}
                        error={errors.expirationMonth?.message}
                      />
                      <Input
                        label="Expiration year"
                        type="select"
                        {...register("expirationYear", {
                          required: "Year is required",
                        })}
                        options={[
                          { label: "Year", value: "" },
                          { label: "2025", value: "2025" },
                          { label: "2026", value: "2026" },
                          { label: "2027", value: "2027" },
                          { label: "2028", value: "2028" },
                          { label: "2029", value: "2029" },
                        ]}
                        error={errors.expirationYear?.message}
                      />
                    </div>
                    <Input
                      label="Security Code"
                      {...register("securityCode", {
                        required: "Security code is required",
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: "Invalid security code",
                        },
                      })}
                      placeholder="123"
                      error={errors.securityCode?.message}
                    />
                    <Input
                      label="Cardholder Name"
                      {...register("cardholderName", {
                        required: "Cardholder name is required",
                      })}
                      placeholder="John Doe"
                      error={errors.cardholderName?.message}
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="mt-8 space-y-6">
                  <div className="rounded-[24px] border border-[#E3E4E5] bg-white p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#0F0200] mb-4">
                      Scan QR Code
                    </h3>
                    <div className="mx-auto w-48 h-48 bg-gray-200 rounded-[16px] flex items-center justify-center">
                      <p className="text-sm text-gray-500">
                        QR Code Placeholder
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-[#6B6B6B]">
                      Scan with your UPI app to pay
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-[#6B6B6B] mb-2">
                      Or enter UPI ID
                    </p>
                    <Input
                      {...register("upiId", {
                        required: "UPI ID is required",
                        pattern: {
                          value: /^[\w.-]+@[\w.-]+$/,
                          message: "Invalid UPI ID",
                        },
                      })}
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      error={errors.upiId?.message}
                    />
                  </div>
                </div>
              )}
            </section>

            <div className="mt-2 rounded-[32px] border border-[#E9DFEE] bg-gradient-to-r from-[#FFF5F9] to-[#FCF7FF] p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-[#0F0200]">
                  Payment summary
                </p>
                <div className="rounded-full bg-gradient-to-r from-[#F83D8E] to-[#FF6B9D] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(248,61,142,0.25)]">
                  {paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : paymentMethod === "upi"
                      ? "UPI Payment"
                      : "Card Payment"}
                </div>
              </div>
              <p className="mt-4 text-sm text-[#6B6B6B]">
                By placing the order, you agree to our terms and confirm that
                all billing information is correct.
              </p>
            </div>

            <div className="mt-6 flex w-full justify-center sm:justify-start">
              <Button
                theme="primary"
                height="h-[62px]"
                width="w-full sm:w-[320px]"
                iconposition="flex gap-[18px]"
                icons={<RightArrow />}
                className="text-base shadow-[0_15px_40px_rgba(248,61,142,0.3)] hover:shadow-[0_20px_50px_rgba(248,61,142,0.4)] transition-shadow"
                type="submit"
              >
                Place Order Now
              </Button>
            </div>
          </div>
        </form>

        <aside className="w-full max-w-[450px] rounded-[32px] bg-white p-6 shadow-[0_25px_70px_rgba(120,55,141,0.08)] xl:sticky xl:top-10 xl:self-start">
          <div className="mb-6 rounded-[26px] border border-[#F1E6F6] bg-gradient-to-br from-[#FFF0F8] to-[#FCF7FF] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[#A884B5]">
              Order summary
            </p>
            <h2 className="mt-4 text-[28px] font-bold text-[#0F0200]">
              Your treats
            </h2>
            <p className="mt-2 text-sm text-[#6B6B6B]">
              Review the items in your bag before submitting the order.
            </p>
          </div>

          <div className="space-y-4">
            {cartItemsData.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-[#ECE4F0] bg-gradient-to-r from-[#FAF6FF] to-[#FFF5F9] p-5 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-[#0F0200]">
                      {item.name} x {item.qty}
                    </p>
                    <p className="mt-1 text-sm text-[#7B7B7B]">
                      Unit price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="text-lg font-semibold text-[#F83D8E]">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-[#E8D1F4] bg-gradient-to-r from-[#FFF0F8] to-[#FCF7FF] p-5 shadow-sm space-y-3">
            <div className="flex justify-between text-sm font-medium text-[#7B7B7B]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-[#7B7B7B]">
              <span>Shipping</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-[24px] border border-[#E8D1F4] bg-gradient-to-r from-[#FFF0F8] to-[#FCF7FF] px-5 py-5 shadow-sm">
            <p className="text-sm font-medium text-[#0F0200]">Grand Total</p>
            <p className="text-2xl font-bold text-[#F83D8E]">${grandTotal}</p>
          </div>

          <div className="mt-6 rounded-[28px] bg-gradient-to-br from-[#F8F4FD] to-[#FFF5F9] p-5 text-sm text-[#6B6B6B] shadow-sm">
            <p className="font-semibold text-[#0F0200]">Need help?</p>
            <p className="mt-2 leading-6">
              Contact our support if you want to change the order or payment
              method later.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Form;
