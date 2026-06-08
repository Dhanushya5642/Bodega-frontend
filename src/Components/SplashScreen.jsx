import React, { useEffect, useState } from "react";
import splashBg from "../Assets/Css/Images/SplashScreenBackGround.png";

const BODEGA_LETTERS = ["B", "O", "D", "E", "G", "A"];
const TAGLINE = "A Place to Feel Fresh Groceries";

const infoCards = [
  { icon: "ri-e-bike-2-line",   title: "10 Min Delivery",  sub: "Fastest in town",       iconBg: "bg-orange-500/70",  iconColor: "text-orange-100" },
  { icon: "ri-coupon-3-line",   title: "₹100 Cashback",    sub: "On your first order",   iconBg: "bg-yellow-500/70",  iconColor: "text-yellow-100" },
  { icon: "ri-leaf-line",       title: "100% Fresh",       sub: "Farm to your doorstep", iconBg: "bg-emerald-600/70", iconColor: "text-emerald-100" },
  { icon: "ri-truck-line",      title: "Free Delivery",    sub: "On orders above ₹500",  iconBg: "bg-blue-600/70",    iconColor: "text-blue-100" },
];

function SplashScreen({ onDone }) {
  const [letterCount,  setLetterCount]  = useState(0);
  const [taglineLen,   setTaglineLen]   = useState(0);
  const [cardsVisible, setCardsVisible] = useState([false, false, false, false]);
  const [exiting,      setExiting]      = useState(false);
  const [gone,         setGone]         = useState(false);

  useEffect(() => {
    const timers = [];

    BODEGA_LETTERS.forEach((_, i) =>
      timers.push(setTimeout(() => setLetterCount(i + 1), i * 100))
    );

    const charDelay = Math.floor(700 / TAGLINE.length);
    for (let i = 0; i < TAGLINE.length; i++)
      timers.push(setTimeout(() => setTaglineLen(i + 1), 700 + i * charDelay));

    infoCards.forEach((_, i) =>
      timers.push(setTimeout(() => {
        setCardsVisible(prev => { const n = [...prev]; n[i] = true; return n; });
      }, 1500 + i * 500))
    );

    timers.push(setTimeout(() => setExiting(true), 4500));
    timers.push(setTimeout(() => { setGone(true); onDone(); }, 5000));

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => { setGone(true); onDone(); }, 500);
  };

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden select-none"
      style={{
        opacity:    exiting ? 0 : 1,
        transform:  exiting ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {/* background image */}
      <img src={splashBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* full overlay */}
      <div className="absolute inset-0 bg-[#011f0f]/70" />

      {/* ── BODEGA + tagline — left side ── */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col">
        <div className="flex items-center gap-0.5">
          {BODEGA_LETTERS.map((letter, i) => (
            <span
              key={i}
              className="text-[72px] font-black text-white leading-none drop-shadow-2xl"
              style={{
                opacity:    i < letterCount ? 1 : 0,
                transform:  i < letterCount ? "translateY(0) scale(1)" : "translateY(20px) scale(0.7)",
                transition: "opacity 0.18s ease, transform 0.18s ease",
              }}
            >
              {letter}
            </span>
          ))}
          {letterCount < BODEGA_LETTERS.length && (
            <span className="text-[72px] font-black text-green-400 leading-none animate-pulse">|</span>
          )}
        </div>

        <div className="h-6 mt-2">
          <p className="text-green-300 text-xl tracking-[0.15em] font-semibold">
            {TAGLINE.slice(0, taglineLen)}
            {taglineLen < TAGLINE.length && letterCount === BODEGA_LETTERS.length && (
              <span className="animate-pulse text-green-400">|</span>
            )}
          </p>
        </div>
      </div>

      {/* ── info cards — center, stacked top to bottom ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {infoCards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 flex items-center gap-5 backdrop-blur-sm w-80"
            style={{
              opacity:    cardsVisible[i] ? 1 : 0,
              transform:  cardsVisible[i] ? "translateY(0) scale(1)" : "translateY(20px) scale(0.93)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0`}>
              <i className={`${card.icon} ${card.iconColor} text-3xl`}></i>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">{card.title}</p>
              <p className="text-white/60 text-sm mt-1">{card.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* skip */}
      <button
        onClick={handleSkip}
        className="absolute bottom-7 right-8 text-white/50 hover:text-white/90 text-sm font-medium transition flex items-center gap-1.5 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
      >
        Skip <i className="ri-skip-forward-line"></i>
      </button>

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-green-400/70 rounded-full"
        style={{ width: "90%", transition: "width 4.5s linear" }}
      />
    </div>
  );
}

export default SplashScreen;
