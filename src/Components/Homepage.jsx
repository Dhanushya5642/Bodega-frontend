import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HeroReadyContext } from "../App";
import bagImage from "../Assets/Css/Images/Bag_Image_Generated.png";
import vegetables from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import fruits from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import dairy from "../Assets/Css/Images/Categories/Daily_Essentials.png";
import snacks from "../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import personal from "../Assets/Css/Images/Categories/PersonalCare.png";
import bannerBgLeft from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import bannerBgRight from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import bannerCashback from "../Assets/Css/Images/BannerHome/100RsCashback.png";
import bannerBigSale from "../Assets/Css/Images/BannerHome/BodegaBigSale.png";
import bannerBuy2Get1 from "../Assets/Css/Images/BannerHome/Buy2Get1Free.png";
import bannerVeggies from "../Assets/Css/Images/BannerHome/FreshVeggiesBannerImg.png";

const promoBanners = [
  {
    emoji: "🎟️",
    tag: "First Order Offer",
    title: "₹100 Cashback",
    sub: "Use code BODEGA100 at checkout — no minimum required!",
    code: "BODEGA100",
    cta: "Claim Now",
    overlay: "bg-[#7a3200]/82",
    bg: bannerCashback,
  },
  {
    emoji: "🚚",
    tag: "Free Delivery",
    title: "Free Delivery",
    sub: "On all orders above ₹500 — delivered fresh to your door.",
    code: "AUTO APPLIED",
    cta: "Shop Now",
    overlay: "bg-[#011f10]/80",
    bg: bannerVeggies,
  },
  {
    emoji: "🛒",
    tag: "Bodega Big Sale",
    title: "30% OFF",
    sub: "Buy 10 or more products and get flat 30% off on your entire cart!",
    code: "BIGBUY30",
    cta: "Shop & Save",
    overlay: "bg-[#1a0a3c]/78",
    bg: bannerBigSale,
  },
  {
    emoji: "🌿",
    tag: "Weekend Special",
    title: "Fresh Veggies",
    sub: "Every weekend — flat 25% off on all fresh vegetables.",
    code: "WEEKEND25",
    cta: "Grab Deal",
    overlay: "bg-white/30",
    bg: bannerVeggies,
    dark: true,
  },
  {
    emoji: "⚡",
    tag: "Flash Deal",
    title: "Buy 2 Get 1 Free",
    sub: "On selected dairy & snack products — today only!",
    code: "FLASH2GET1",
    cta: "View Deals",
    overlay: "bg-[#3b1500]/78",
    bg: bannerBuy2Get1,
    leftOnly: true,
  },
  {
    emoji: "🏍️",
    tag: "Fastest Delivery in Town",
    title: "10 Min Delivery",
    sub: "Order now and get your groceries at your door in just 10 minutes — guaranteed!",
    code: "SUPERFAST",
    cta: "Order Now",
    overlay: "bg-[#0a1a3c]/80",
    bg: bannerVeggies,
  },
];

function useTypewriter(lines, charDelay = 40, ready = true) {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!ready) return;
    let lineIdx = 0, charIdx = 0;
    const timers = [];

    const typeNext = () => {
      if (lineIdx >= lines.length) { setDone(true); return; }
      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        const li = lineIdx, ci = charIdx;
        const t = setTimeout(() => {
          setDisplayed(prev => {
            const next = [...prev];
            next[li] = line.slice(0, ci);
            return next;
          });
          charIdx++;
          typeNext();
        }, ci === 0 && li > 0 ? 300 : charDelay);
        timers.push(t);
      } else {
        lineIdx++; charIdx = 0;
        typeNext();
      }
    };
    typeNext();
    return () => timers.forEach(clearTimeout);
  }, [ready]);

  return { displayed, done };
}

function Homepage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const heroReady = useContext(HeroReadyContext);
  const heroLines = ["Freshness", "Delivered.", "Skip the Traffic.", "Skip the Queue."];
  const { displayed, done: heroDone } = useTypewriter(heroLines, 55, heroReady);
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    if (heroDone) setTimeout(() => setSubVisible(true), 200);
  }, [heroDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % promoBanners.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const banner = promoBanners[current];

  return (
    <div className="bg-[#f8f8f5]">
      {/* <!--Center Banner--> */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-[78px] leading-[85px] font-bold text-green-900">
              {displayed[0]}{displayed[0].length < heroLines[0].length || displayed[1].length === 0 ? <span className="animate-pulse text-green-400">|</span> : ""}
              <br />
              {displayed[1]}{displayed[1].length > 0 && displayed[1].length < heroLines[1].length ? <span className="animate-pulse text-green-400">|</span> : ""}
            </h1>
            <h1 className="text-[78px] leading-[85px] font-bold text-orange-500">
              {displayed[2]}{displayed[2].length > 0 && displayed[2].length < heroLines[2].length ? <span className="animate-pulse text-orange-300">|</span> : ""}
              <br />
              {displayed[3]}{displayed[3].length > 0 && displayed[3].length < heroLines[3].length ? <span className="animate-pulse text-orange-300">|</span> : ""}
            </h1>
            <p className="text-gray-700 text-xl mt-6 max-w-md"
              style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              Premium quality groceries handpicked for you and delivered to your
              doorstep.
            </p>
            {/* <!-- Features --> */}
            <div className="flex gap-10 mt-10"
              style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-secure-payment-line text-green-700 text-2xl"></i>
                </div>
                <p className="text-sm mt-3">
                  No Hidden
                  <br />
                  Charges
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-price-tag-3-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Upto 40%
                  <br />
                  Discount
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-wallet-3-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Everyday
                  <br />
                  Cashback
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-truck-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Fastest
                  <br />
                  Delivery
                </p>
              </div>
            </div>

            <Link
              to="/products"
              className="mt-10 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold"
              style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}
            >
              Shop Now
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          {/* <!-- Right --> */}
          <div className="relative">
            <img src={bagImage} alt="Bag" className="w-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-2 border-green-400 rounded-full flex flex-col items-center justify-center text-green-700">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-center font-semibold">
                  FRESH
                  <br />
                  ASSURED{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Catergories section--> */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Shop by Category</span>
            <h2 className="text-2xl font-bold text-green-900 mt-0.5">What are you looking for?</h2>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-green-200 mt-3 w-fit"
              style={{ animation: "bounce 1s infinite" }}
            >
              <i className="ri-cursor-line text-base"></i>
              <span>Tap a category to explore</span>
              <i className="ri-arrow-right-line text-base"></i>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-4">

          <Link to="/products?category=Vegetables"
            style={{ backgroundImage: `url(${vegetables})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block"
          >
            <h3 className="text-3xl font-bold text-green-900">Fresh<br />Vegetables</h3>
            <p className="mt-3">Flat 30% OFF</p>
          </Link>

          <Link to="/products?category=Fruits"
            style={{ backgroundImage: `url(${fruits})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block"
          >
            <h3 className="text-3xl font-bold text-amber-900">Fruits<br />Collection</h3>
            <p className="mt-3">Flat 25% OFF</p>
          </Link>

          <Link to="/products?category=Dairy"
            style={{ backgroundImage: `url(${dairy})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block"
          >
            <h3 className="text-3xl font-bold text-slate-800">Dairy<br />Essentials</h3>
            <p className="mt-3">Upto 40% OFF</p>
          </Link>

          <Link to="/products?category=Snacks"
            style={{ backgroundImage: `url(${snacks})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block"
          >
            <h3 className="text-3xl font-bold text-amber-900">Snacks &<br />Beverages</h3>
            <p className="mt-3">Upto 35% OFF</p>
          </Link>

          <Link to="/products?category=Personal Care"
            style={{ backgroundImage: `url(${personal})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block"
          >
            <h3 className="text-3xl font-bold text-rose-900">Personal<br />Care</h3>
            <p className="mt-3">Upto 30% OFF</p>
          </Link>

        </div>
      </section>

      {/* ── PROMO BANNER SLIDER ── */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[230px] flex items-center"
          style={{ backgroundImage: `url(${banner.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* overlay */}
          <div className={`absolute inset-0 ${banner.overlay} transition-all duration-300`}></div>
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white/5 rounded-full"></div>

          {/* content */}
          <div
            className="relative z-10 w-full px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ opacity: fade ? 1 : 0, transition: "opacity 0.3s ease" }}
          >
            {/* Left */}
            <div className="flex items-center gap-6">
              <span className="text-6xl">{banner.emoji}</span>
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${banner.dark ? "bg-gray-900/20 text-gray-900" : "bg-white/20 text-white"}`}>
                  {banner.tag}
                </span>
                <h2 className={`text-5xl font-black mt-2 leading-tight ${banner.dark ? "text-gray-900" : "text-white"}`}>{banner.title}</h2>
                <p className={`text-sm mt-1 max-w-sm ${banner.dark ? "text-gray-800" : "text-white/80"}`}>{banner.sub}</p>
                {banner.leftOnly && (
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-3 bg-white/10 border-2 border-dashed border-yellow-400/70 rounded-2xl px-5 py-2.5">
                      <i className="ri-coupon-3-line text-yellow-300 text-lg"></i>
                      <span className="text-yellow-200/90 font-black text-lg tracking-[0.15em]">{banner.code}</span>
                    </div>
                    <Link to="/products" className="bg-white/90 hover:bg-white text-gray-800 font-bold px-6 py-3 rounded-2xl transition flex items-center gap-2 whitespace-nowrap shadow-lg text-sm">
                      {banner.cta} <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right — only shown when not leftOnly */}
            {!banner.leftOnly && (
              <div className="flex items-center gap-5 shrink-0">
                <div className="text-center">
                  <p className={`text-xs mb-2 uppercase tracking-wider ${banner.dark ? "text-gray-700" : "text-white/60"}`}>Promo Code</p>
                  <div className={`flex items-center gap-3 border-2 border-dashed rounded-2xl px-6 py-3 ${banner.dark ? "bg-gray-900/10 border-gray-700" : "bg-white/10 border-yellow-400/70"}`}>
                    <i className={`ri-coupon-3-line text-xl ${banner.dark ? "text-gray-800" : "text-yellow-300"}`}></i>
                    <span className={`font-black text-xl tracking-[0.18em] ${banner.dark ? "text-gray-900" : "text-yellow-200/90"}`}>{banner.code}</span>
                  </div>
                </div>
                <Link
                  to="/products"
                  className={`font-bold px-7 py-4 rounded-2xl transition flex items-center gap-2 whitespace-nowrap shadow-lg text-sm ${banner.dark ? "bg-gray-900 hover:bg-gray-800 text-white" : "bg-white/90 hover:bg-white text-gray-800"}`}
                >
                  {banner.cta} <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            )}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {promoBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 300); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BODEGA ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Promise</span>
          <h2 className="text-4xl font-bold text-green-900 mt-2">Why Shop With BODEGA?</h2>
          <p className="text-gray-500 text-sm mt-2">Everything you need, nothing you don't.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: "ri-plant-line",          label: "Farm Fresh",       sub: "Direct from farms",    bg: "bg-green-50",  icon_color: "text-green-600" },
            { icon: "ri-price-tag-3-line",    label: "Best Prices",      sub: "Upto 40% off",        bg: "bg-orange-50", icon_color: "text-orange-500" },
            { icon: "ri-box-3-line",          label: "Safe Packing",     sub: "Hygiene guaranteed",  bg: "bg-blue-50",   icon_color: "text-blue-500" },
            { icon: "ri-e-bike-2-line",       label: "10 Min Delivery",  sub: "Fastest in town",    bg: "bg-purple-50", icon_color: "text-purple-500" },
            { icon: "ri-shield-check-line",   label: "Secure Payment",   sub: "100% safe checkout", bg: "bg-teal-50",   icon_color: "text-teal-600" },
            { icon: "ri-refresh-line",        label: "Easy Returns",     sub: "Hassle-free policy", bg: "bg-rose-50",   icon_color: "text-rose-500" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 hover:shadow-md transition duration-200 cursor-default`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3">
                <i className={`${item.icon} ${item.icon_color} text-2xl`}></i>
              </div>
              <p className="font-bold text-gray-800 text-sm">{item.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEALS OF THE DAY ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl font-bold text-green-900 mt-1">Deals of the Day</h2>
          </div>
          <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
            <i className="ri-timer-flash-line text-orange-500"></i>
            <span className="text-orange-600 font-bold text-sm">Ends Today</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            { name: "Banana Robusta",   price: 37,  old: 55,  img: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?w=400",  tag: "🔥 Hot Deal" },
            { name: "Fresh Tomatoes",   price: 40,  old: 60,  img: "https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?w=400",   tag: "🌱 Organic" },
            { name: "Red Apples",       price: 110, old: 150, img: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?w=400",  tag: "⭐ Bestseller" },
            { name: "Orange Juice 1L",  price: 75,  old: 110, img: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?w=400",  tag: "🥤 Fresh" },
          ].map((deal, i) => {
            const pct = Math.round(((deal.old - deal.price) / deal.old) * 100);
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300 group">
                <div className="relative overflow-hidden h-44 bg-gray-50">
                  <img
                    src={deal.img}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2017/10/09/19/23/tomato-2834549_640.jpg"; }}
                  />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {pct}% OFF
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {deal.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm">{deal.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-green-700 font-bold text-base">₹{deal.price}</span>
                    <span className="text-gray-400 text-xs line-through">₹{deal.old}</span>
                    <span className="ml-auto text-green-600 text-xs font-semibold">Save ₹{deal.old - deal.price}</span>
                  </div>
                  <Link
                    to="/products"
                    className="mt-3 w-full flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 rounded-xl text-xs font-semibold transition"
                  >
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 shadow-sm">
          {[
            { icon: "ri-user-smile-line",    value: "50K+",   label: "Happy Customers",  color: "text-green-600" },
            { icon: "ri-shopping-bag-line",  value: "200K+",  label: "Orders Delivered", color: "text-orange-500" },
            { icon: "ri-leaf-line",          value: "500+",   label: "Fresh Products",   color: "text-green-600" },
            { icon: "ri-star-fill",          value: "4.9★",   label: "Average Rating",   color: "text-yellow-500" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <i className={`${stat.icon} ${stat.color} text-3xl mb-2`}></i>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#013f21] via-[#025c30] to-[#01522b] rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full"></div>

          <div className="relative z-10">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Newsletter
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">Stay Fresh, Stay Updated</h2>
            <p className="text-green-200 text-sm mt-2">Get exclusive deals, recipes & seasonal offers in your inbox.</p>
            <div className="flex gap-2 mt-2">
              {["🎁 Exclusive deals", "🌿 Fresh arrivals", "💸 Special discounts"].map((t, i) => (
                <span key={i} className="bg-white/10 text-green-100 text-xs px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center pl-4">
                <i className="ri-mail-line text-gray-400 text-xl"></i>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-4 text-gray-800 text-sm outline-none min-w-[240px]"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-green-300 text-xs mt-2 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
