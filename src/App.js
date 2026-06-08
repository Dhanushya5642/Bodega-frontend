import './App.css';
import { useState, createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routers/AppRoutes';
import { CartProvider } from './Components/Cart/CartContext';
import { WishlistProvider } from './Components/Cart/WishlistContext';
import SplashScreen from './Components/SplashScreen';
import AddressModal from './Components/AddressModal';

export const HeroReadyContext = createContext(false);

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("splashSeen")
  );

  const isLoggedIn = !!localStorage.getItem("isLoggedIn");
  const userEmail  = localStorage.getItem("email") || "";
  const userAddress = localStorage.getItem(`deliveryAddress_${userEmail}`) || "";

  const [showAddressModal, setShowAddressModal] = useState(
    () => !sessionStorage.getItem("splashSeen") ? false : (isLoggedIn && !userAddress)
  );
  const [heroReady, setHeroReady] = useState(
    () => !!sessionStorage.getItem("splashSeen") && !!sessionStorage.getItem("addressDone")
  );

  const handleSplashDone = () => {
    sessionStorage.setItem("splashSeen", "1");
    setShowSplash(false);
    const email   = localStorage.getItem("email") || "";
    const loggedIn = !!localStorage.getItem("isLoggedIn");
    const addr    = localStorage.getItem(`deliveryAddress_${email}`);
    if (loggedIn && !addr) {
      setShowAddressModal(true);
    } else {
      sessionStorage.setItem("addressDone", "1");
      setHeroReady(true);
    }
  };

  const handleAddressSave = () => {
    sessionStorage.setItem("addressDone", "1");
    setShowAddressModal(false);
    setHeroReady(true);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <HeroReadyContext.Provider value={heroReady}>
            {showSplash && <SplashScreen onDone={handleSplashDone} />}
            {!showSplash && showAddressModal && <AddressModal onSave={handleAddressSave} />}
            <AppRoutes />
          </HeroReadyContext.Provider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
