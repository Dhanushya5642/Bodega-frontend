import React from "react";
import storeImg from "../Assets/Css/Images/Bodega_Store_Img.png";
import teamImg from "../Assets/Css/Images/Bodega_team_Img.png";
import FOFTY from "../Assets/Css/Images/FromOurFamilyToYours.png";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import basketImg from "../Assets/Css/Images/About_Banner.png";

function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <p className="text-green-700 font-semibold mb-4">🌿 ABOUT BODEGA</p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              More Than
              <br /> Groceries.
              <br />
              <span className="text-green-700">It's Our Promise.</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-9">
              BODEGA was built with a simple belief — everyone deserves access
              to fresh, healthy and affordable groceries. We make everyday
              shopping easier, faster and more reliable.
            </p>

            <img src={FOFTY} alt="From Our Family To yours" className="w-300" />
          </div>

          {/* Right */}

          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={storeImg}
                alt="Bodega Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-[#f6f6ee] rounded-[32px] py-7 px-6">
          <div className="grid grid-cols-4">
            {/* Customers */}
            <div className="flex items-start gap-4 px-6 border-r border-[#d8dcc7]">
              <div className="w-14 h-14 rounded-full bg-[#4f8d1f] flex items-center justify-center flex-shrink-0">
                <GroupsOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-[#1f5f24] leading-none">
                  25K+
                </h2>

                <h3 className="font-semibold text-[22px] text-gray-800 mt-1">
                  Happy Customers
                </h3>

                <p className="text-gray-600 mt-2 text-[18px] leading-8">
                  Trusted by thousands
                  <br />
                  of families.
                </p>
              </div>
            </div>

            {/* Products */}
            <div className="flex items-start gap-4 px-6 border-r border-[#d8dcc7]">
              <div className="w-14 h-14 rounded-full bg-[#4f8d1f] flex items-center justify-center flex-shrink-0">
                <ShoppingBasketOutlinedIcon
                  sx={{ color: "white", fontSize: 28 }}
                />
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-[#1f5f24] leading-none">
                  1500+
                </h2>

                <h3 className="font-semibold text-[22px] text-gray-800 mt-1">
                  Products
                </h3>

                <p className="text-gray-600 mt-2 text-[18px] leading-8">
                  Wide range of daily
                  <br />
                  essentials.
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex items-start gap-4 px-6 border-r border-[#d8dcc7]">
              <div className="w-14 h-14 rounded-full bg-[#4f8d1f] flex items-center justify-center flex-shrink-0">
                <LocalShippingOutlinedIcon
                  sx={{ color: "white", fontSize: 28 }}
                />
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-[#1f5f24] leading-none">
                  98%
                </h2>

                <h3 className="font-semibold text-[22px] text-gray-800 mt-1">
                  On-Time Delivery
                </h3>

                <p className="text-gray-600 mt-2 text-[18px] leading-8">
                  We value your time
                  <br />
                  as much as you do.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-4 px-6">
              <div className="w-14 h-14 rounded-full bg-[#4f8d1f] flex items-center justify-center flex-shrink-0">
                <ReviewsOutlinedIcon sx={{ color: "white", fontSize: 28 }} />
              </div>

              <div>
                <h2 className="text-[40px] font-bold text-[#1f5f24] leading-none">
                  4.8★
                </h2>

                <h3 className="font-semibold text-[22px] text-gray-800 mt-1">
                  Customer Rating
                </h3>

                <p className="text-gray-600 mt-2 text-[18px] leading-8">
                  Real reviews from
                  <br />
                  real people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8"></section>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={teamImg}
            alt="Bodega Team"
            className="rounded-[40px] shadow-xl"
          />

          <div>
            <p className="text-green-700 font-semibold">OUR STORY</p>
            <h2 className="text-5xl font-bold mt-4">
              How <span className="text-green-900">BODEGA </span>Began
            </h2>
            <p className="mt-6 text-gray-600 leading-9">
              BODEGA started as a small idea to bring farm-fresh products closer
              to our community. What began as a local store has grown into a
              platform trusted by thousands.
            </p>
            <p className="mt-5 text-gray-600 leading-9">
              We work directly with farmers and trusted suppliers to bring the
              highest quality produce and essentials.
            </p>
            <p className="mt-5 text-gray-600 leading-9">
              Our journey is built on honesty, transparency and commitment.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-green-800 font-semibold mb-4">
            <SpaOutlinedIcon fontSize="small" />
            <span>OUR VALUES</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            The Principles That <span className="text-green-700">Guide Us</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-5">
          {/* Card 1 */}
          <div className="text-center px-6 border-r border-[#d8dcc7]">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#eef2df] flex items-center justify-center mb-6">
              <SpaOutlinedIcon sx={{ color: "#2f6d2f", fontSize: 48 }} />
            </div>

            <h3 className="font-bold text-green-800 text-xl">
              Freshness First
            </h3>

            <p className="mt-3 text-gray-600 leading-8">
              We promise only fresh and quality products.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center px-6 border-r border-[#d8dcc7]">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#eef2df] flex items-center justify-center mb-6">
              <ShieldOutlinedIcon sx={{ color: "#2f6d2f", fontSize: 48 }} />
            </div>

            <h3 className="font-bold text-green-800 text-xl">
              Quality Assured
            </h3>

            <p className="mt-3 text-gray-600 leading-8">
              Every item is carefully checked for the best quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center px-6 border-r border-[#d8dcc7]">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#eef2df] flex items-center justify-center mb-6">
              <FavoriteOutlinedIcon sx={{ color: "#2f6d2f", fontSize: 48 }} />
            </div>

            <h3 className="font-bold text-green-800 text-xl">Customer First</h3>

            <p className="mt-3 text-gray-600 leading-8">
              Your satisfaction is the heart of everything we do.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center px-6 border-r border-[#d8dcc7]">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#eef2df] flex items-center justify-center mb-6">
              <HandshakeOutlinedIcon sx={{ color: "#2f6d2f", fontSize: 48 }} />
            </div>

            <h3 className="font-bold text-green-800 text-xl">Honesty Always</h3>

            <p className="mt-3 text-gray-600 leading-8">
              We believe in fair prices and complete transparency.
            </p>
          </div>

          {/* Card 5 */}
          <div className="text-center px-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#eef2df] flex items-center justify-center mb-6">
              <PublicOutlinedIcon sx={{ color: "#2f6d2f", fontSize: 48 }} />
            </div>

            <h3 className="font-bold text-green-800 text-xl">
              Better Everyday
            </h3>

            <p className="mt-3 text-gray-600 leading-8">
              We keep improving to build a healthier tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 py-10">
        <div
          className="rounded-[32px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${basketImg})`,
            minHeight: "320px",
          }}
        >
          <div className="px-10 py-12 text-white">
            <p className="text-2xl">We don't just sell groceries,</p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              We Build <span className="text-lime-400">Relationships.</span>
            </h2>

            <p className="mt-5 text-2xl text-gray-200">
              Thank you for being a part of the BODEGA family.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
