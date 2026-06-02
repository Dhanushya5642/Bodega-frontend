import React from "react";
import bagImage from "../Assets/Css/Images/Bag_Image_Generated.png";
import vegetables from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import fruits from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import dairy from "../Assets/Css/Images/Categories/Daily_Essentials.png";
import snacks from "../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import personal from "../Assets/Css/Images/Categories/PersonalCare.png";

function Homepage(){
    return(
<div className="bg-[#f8f8f5]">
    

    {/* <!--Center Banner--> */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-[78px] leading-[85px] font-bold text-green-900">
            Freshness<br />Delivered.
          </h1>
          <h1 className="text-[78px] leading-[85px] font-bold text-orange-500">
            Skip the Traffic.<br />Skip the Queue.
          </h1>
          <p className="text-gray-700 text-xl mt-6 max-w-md">
            Premium quality groceries handpicked for you and delivered to your
            doorstep.
          </p>
          {/* <!-- Features --> */}
          <div className="flex gap-10 mt-10">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center"
              >
                <i className="ri-secure-payment-line text-green-700 text-2xl"></i>
              </div>
              <p className="text-sm mt-3">No Hidden<br />Charges</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center"
              >
                <i className="ri-price-tag-3-line text-green-700 text-2xl"></i>
              </div>

              <p className="text-sm mt-3">Upto 40%<br />Discount</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center"
              >
                <i className="ri-wallet-3-line text-green-700 text-2xl"></i>
              </div>

              <p className="text-sm mt-3">Everyday<br />Cashback</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center"
              >
                <i className="ri-truck-line text-green-700 text-2xl"></i>
              </div>

              <p className="text-sm mt-3">Fastest<br />Delivery</p>
            </div>
          </div>

          <button
            className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
          >
            Shop Now
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        {/* <!-- Right --> */}
        <div className="relative">
         <img
  src={bagImage}
  alt="Bag"
  className="w-full"
/>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div
              className="w-32 h-32 border-2 border-green-400 rounded-full flex flex-col items-center justify-center text-green-700"
            >
              <span className="text-3xl font-bold">100%</span>
              <span className="text-center font-semibold">FRESH<br />ASSURED </span>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* 
    <!--Catergories section--> */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-4">
        {/* <!-- Vegetables --> */}
<div
  style={{
    backgroundImage: `url(${vegetables})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-80 rounded-3xl p-5"
>          <h3 className="text-3xl font-bold text-green-900">
            Fresh
            <br />
            Vegetables
          </h3>

          <p className="mt-3">Flat 30% OFF</p>

          {/* <!-- <img src="/Images/References/Categories/Fresh Vegetables.png" className="mt-5" /> -->
         */}
         </div>

        {/* <!-- Fruits --> */}

<div
  style={{
    backgroundImage: `url(${fruits})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-80 rounded-3xl p-5"
>          <h3 className="text-3xl font-bold text-amber-900">
            Fruits
            <br />
            Collection
          </h3>

          <p className="mt-3">Flat 25% OFF</p>

          
        </div>

        {/* <!-- Dairy --> */}

<div
  style={{
    backgroundImage: `url(${dairy})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-80 rounded-3xl p-5"
>          <h3 className="text-3xl font-bold text-slate-800">
            Dairy
            <br />
            Essentials
          </h3>

          <p className="mt-3">Upto 40% OFF</p>

          
        </div>

        {/* <!-- Snacks --> */}

<div
  style={{
    backgroundImage: `url(${snacks})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-80 rounded-3xl p-5"
>          <h3 className="text-3xl font-bold text-amber-900">
            Snacks &
            <br />
            Beverages
          </h3>

          <p className="mt-3">Upto 35% OFF</p>
        </div>

        {/* <!-- Personal --> */}

<div
  style={{
    backgroundImage: `url(${personal})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-80 rounded-3xl p-5"
>          <h3 className="text-3xl font-bold text-rose-900">
            Personal
            <br />
            Care
          </h3>

          <p className="mt-3">Upto 30% OFF</p>
        </div>
      </div>
     
    </section>

    {/* <!--Cashback Banner--> */}
    <section className="max-w-7xl mx-auto px-6 mt-6">
      <div
        className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 rounded-3xl p-8 text-white flex justify-between items-center"
      >
        <div className="flex items-center gap-6">
          <img src="basket.png" className="w-40" />

          <div>
            <span className="bg-yellow-500 text-xs px-3 py-1 rounded-full">
              SPECIAL OFFER
            </span>

            <h2 className="text-6xl font-bold mt-3">100 Rs Cashback</h2>

            <p>on your first order</p>
          </div>
        </div>

        <button className="border px-8 py-4 rounded-2xl">
          Use Code:
          <strong>BODEGA100</strong>
        </button>
      </div>
    </section>

    {/* <!--Why Shop with us--> */}
    <section className="py-16">
      <h2 className="text-center text-4xl font-bold text-green-900">
        Why Shop With BODEGA?
      </h2>

      <div
        className="max-w-6xl mx-auto grid md:grid-cols-6 gap-8 mt-12 text-center"
      >
        <div>
          🌱
          <p>Farm Fresh</p>
        </div>

        <div>
          💰
          <p>Best Prices</p>
        </div>

        <div>
          📦
          <p>Hygienic Packing</p>
        </div>

        <div>
          🚚
          <p>Fast Delivery</p>
        </div>

        <div>
          🔒
          <p>Secure Payment</p>
        </div>

        <div>
          🔄
          <p>Easy Return</p>
        </div>
      </div>
    </section>

    {/* <!--Deals of the day--> */}
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-center text-4xl font-bold text-green-900 mb-10">
        Deals of the Day
      </h2>

      <div className="grid md:grid-cols-6 gap-5">
        {/* <!-- Card --> */}

        <div className="bg-white rounded-2xl shadow p-4">
          <img src="images/banana.png" />

          <h3 className="font-semibold mt-4">Banana Robusta</h3>

          <p className="text-green-700 text-2xl font-bold">₹37</p>

          <button
            className="mt-4 border border-green-700 text-green-700 w-full py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>

    {/* <!--Newsletter--> */}
    <section
      className="bg-gradient-to-r from-green-900 to-green-700 text-white py-10 mt-16"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div>
          <h2 className="text-4xl font-bold">Stay Updated</h2>

          <p>Subscribe to our newsletter</p>
        </div>

        <div className="flex">
          <input
            type="email"
            placeholder="Enter Email"
            className="px-6 py-3 rounded-l-xl text-black"
          />

          <button className="bg-orange-500 px-6 rounded-r-xl">Subscribe</button>
        </div>
      </div>
    </section>
</div>
    
    )};

export default Homepage;