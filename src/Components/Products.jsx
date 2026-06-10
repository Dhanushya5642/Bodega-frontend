import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./Products/ProductCard";

// Category images — same as Homepage
import vegetables from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import fruits from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import dairy from "../Assets/Css/Images/Categories/Daily_Essentials.png";
import snacks from "../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import personal from "../Assets/Css/Images/Categories/PersonalCare.png";

// Dairy images
import MilkImg from "../Assets/Css/Images/DairyEssentials/Milk.png";
import ButterImg from "../Assets/Css/Images/DairyEssentials/Butter.png";
import PaneerImg from "../Assets/Css/Images/DairyEssentials/Paneer.png";
import TraditionalCurdImg from "../Assets/Css/Images/DairyEssentials/TraditionalCurd.png";
import CheeseSlicesImg from "../Assets/Css/Images/DairyEssentials/CheeseSlices.png";
import GheeImg from "../Assets/Css/Images/DairyEssentials/Ghee.png";
import YogurtImg from "../Assets/Css/Images/DairyEssentials/Yogurt.png";
import FreshCreamImg from "../Assets/Css/Images/DairyEssentials/FreshCream.png";
import CreamCheeseImg from "../Assets/Css/Images/DairyEssentials/CreamCheese.png";
import MozzarellaCheeseImg from "../Assets/Css/Images/DairyEssentials/MozzarellaCheese.png";
import CondensedMilkImg from "../Assets/Css/Images/DairyEssentials/CondensedMilk.png";
import WhippedCreamImg from "../Assets/Css/Images/DairyEssentials/WhippedCream.png";
import SourCreamImg from "../Assets/Css/Images/DairyEssentials/SourCream.png";
import CottageCheesePaneerCrumblesImg from "../Assets/Css/Images/DairyEssentials/CottageCheese(Paneer Crumbles).png";
import RicottaCheeseImg from "../Assets/Css/Images/DairyEssentials/RicottaCheese.png";
import BlueCheesImg from "../Assets/Css/Images/DairyEssentials/BlueCheese.png";
import BrieCheeseImg from "../Assets/Css/Images/DairyEssentials/BrieCheese.png";
import SwissCheeseImg from "../Assets/Css/Images/DairyEssentials/SwissCheese.png";
import CheeseBallsImg from "../Assets/Css/Images/DairyEssentials/CheeseBalls.png";
import VanillaIceCreamImg from "../Assets/Css/Images/DairyEssentials/VanillaIceCream.png";
import ButterscotchIceCreamImg from "../Assets/Css/Images/DairyEssentials/ButterscotchIceCream.png";
import ChocolateMilkshakeImg from "../Assets/Css/Images/DairyEssentials/ChocolateMilkshake.png";
import StrawberryYogurtDrinkImg from "../Assets/Css/Images/DairyEssentials/StrawberryYogurtDrink.png";
import ProbioticDrinkImg from "../Assets/Css/Images/DairyEssentials/ProbioticDrink.png";
import CustardCreamImg from "../Assets/Css/Images/DairyEssentials/CustardCream.png";
import MilkPuddingImg from "../Assets/Css/Images/DairyEssentials/milkPudding.png";
import RicePuddingImg from "../Assets/Css/Images/DairyEssentials/RicePudding(Kheer).png";

// Vegetable images
import TomatoImg from "../Assets/Css/Images/Vegetables/Tomato.png";
import CucumberImg from "../Assets/Css/Images/Vegetables/cucumber.png";
import PotatoImg from "../Assets/Css/Images/Vegetables/potato.png";
import OnionImg from "../Assets/Css/Images/Vegetables/onion.png";
import CarrotImg from "../Assets/Css/Images/Vegetables/carrot.png";
import GreenCapsicumImg from "../Assets/Css/Images/Vegetables/GreenCapsicum.png";
import BroccoliImg from "../Assets/Css/Images/Vegetables/Brocoli.png";
import BrinjalImg from "../Assets/Css/Images/Vegetables/brinjal.png";
import CauliflowerImg from "../Assets/Css/Images/Vegetables/cauliflower.png";
import BeansImg from "../Assets/Css/Images/Vegetables/beans.png";
import LadysFingerImg from "../Assets/Css/Images/Vegetables/lady'sfinger.png";
import GarlicImg from "../Assets/Css/Images/Vegetables/garlic.png";
import GingerImg from "../Assets/Css/Images/Vegetables/ginger.png";
import GreenChiliImg from "../Assets/Css/Images/Vegetables/greenchili.png";
import CorianderImg from "../Assets/Css/Images/Vegetables/coriander.png";
import PumpkinImg from "../Assets/Css/Images/Vegetables/pumpkin.png";
import RadishImg from "../Assets/Css/Images/Vegetables/radish.png";
import LettuceImg from "../Assets/Css/Images/Vegetables/lettuce.png";
import ChickpeasImg from "../Assets/Css/Images/Vegetables/chickpeas.png";
import RedCabbageImg from "../Assets/Css/Images/Vegetables/redcabbage.png";
import RedChiliImg from "../Assets/Css/Images/Vegetables/redchili.png";
import YellowCapsicumImg from "../Assets/Css/Images/Vegetables/YellowCapsicum.png";

// Personal Care images
import AxePerfumeImg from "../Assets/Css/Images/PersonalCare/AxePerfume.png";
import BigenHairDyeImg from "../Assets/Css/Images/PersonalCare/BigenHairDye.png";
import ColgateImg from "../Assets/Css/Images/PersonalCare/Colgate.png";
import DettolSoapImg from "../Assets/Css/Images/PersonalCare/DettolSoap.png";
import GarnierMenImg from "../Assets/Css/Images/PersonalCare/GarnierMen.png";
import GilleteImg from "../Assets/Css/Images/PersonalCare/Gillete.png";
import HeadAndShouldersImg from "../Assets/Css/Images/PersonalCare/HeadAndShouldersShampoo.png";
import ListerineImg from "../Assets/Css/Images/PersonalCare/Listerine.png";
import LuxImg from "../Assets/Css/Images/PersonalCare/Lux.png";
import NiveaBodyMilkImg from "../Assets/Css/Images/PersonalCare/NiveaBodyMilk.png";
import PondsBeautyCreamImg from "../Assets/Css/Images/PersonalCare/PondsBeautyCream.png";
import RexonaRollOnImg from "../Assets/Css/Images/PersonalCare/RexonaRollOn.png";
import VaselineAloeImg from "../Assets/Css/Images/PersonalCare/VaselineAloeSmoothBodyLotion.png";
import VLCCInstaGlowImg from "../Assets/Css/Images/PersonalCare/VLCCInstaGlow.png";
import WhisperImg from "../Assets/Css/Images/PersonalCare/Whisper.png";

// Snacks & Beverages images
import BingoMadAnglesImg from "../Assets/Css/Images/Snacks&Beverages/BingoMadAngles.png";
import BisleriImg from "../Assets/Css/Images/Snacks&Beverages/Bisleri.png";
import BlueLaysImg from "../Assets/Css/Images/Snacks&Beverages/BlueLays.png";
import CheetosPuffsImg from "../Assets/Css/Images/Snacks&Beverages/CheetosPuffs.png";
import DoritosImg from "../Assets/Css/Images/Snacks&Beverages/Doritos.png";
import FantaImg from "../Assets/Css/Images/Snacks&Beverages/Fanta.png";
import GreenKurkureImg from "../Assets/Css/Images/Snacks&Beverages/GreenKurkure.png";
import HaldiramAlooBhujiaImg from "../Assets/Css/Images/Snacks&Beverages/Haldiram'sAlooBhujia.png";
import HaldiramSamosaImg from "../Assets/Css/Images/Snacks&Beverages/Haldiram'sSamosa.png";
import LiptonLemonImg from "../Assets/Css/Images/Snacks&Beverages/LiptonLemon.png";
import MaazaImg from "../Assets/Css/Images/Snacks&Beverages/Maaza.png";
import MonsterEnergyImg from "../Assets/Css/Images/Snacks&Beverages/Monster_Energy.png";
import MunchCrunchiliciousImg from "../Assets/Css/Images/Snacks&Beverages/MunchCrunchilicious.png";
import PepsiImg from "../Assets/Css/Images/Snacks&Beverages/Pepsi.png";
import PringlesSourCreamImg from "../Assets/Css/Images/Snacks&Beverages/PringlesSourCreamAndOnion.png";
import PurpleBingoImg from "../Assets/Css/Images/Snacks&Beverages/PurpleBingo.png";
import RedBullImg from "../Assets/Css/Images/Snacks&Beverages/RedBull.png";
import SpriteImg from "../Assets/Css/Images/Snacks&Beverages/Sprite.png";
import ThumsUpImg from "../Assets/Css/Images/Snacks&Beverages/ThumsUp.png";
import UncleChipsImg from "../Assets/Css/Images/Snacks&Beverages/UncleChips.png";
import YellowLaysImg from "../Assets/Css/Images/Snacks&Beverages/YellowLays.png";

// Fruit images
import AppleImg from "../Assets/Css/Images/Fruits/apple.png";
import BananaImg from "../Assets/Css/Images/Fruits/banana.png";
import MangoImg from "../Assets/Css/Images/Fruits/mango.png";
import WatermelonImg from "../Assets/Css/Images/Fruits/watermelon.png";
import GreenGrapesImg from "../Assets/Css/Images/Fruits/greengrapes.png";
import RedGrapesImg from "../Assets/Css/Images/Fruits/redgrapes.png";
import PapayaImg from "../Assets/Css/Images/Fruits/papaya.png";
import PomegranateImg from "../Assets/Css/Images/Fruits/pomogranete.png";
import KiwiImg from "../Assets/Css/Images/Fruits/kiwi.png";
import OrangeImg from "../Assets/Css/Images/Fruits/orange.png";
import PineappleImg from "../Assets/Css/Images/Fruits/pineapple.png";
import StrawberryImg from "../Assets/Css/Images/Fruits/strawberry.png";
import BlueberryImg from "../Assets/Css/Images/Fruits/blueberry.png";
import GuavaImg from "../Assets/Css/Images/Fruits/guava.png";
import LitchiImg from "../Assets/Css/Images/Fruits/litchi.png";
import DragonFruitImg from "../Assets/Css/Images/Fruits/dragonfruit.png";
import CherryImg from "../Assets/Css/Images/Fruits/cherry.png";
import DatesImg from "../Assets/Css/Images/Fruits/dates.png";
import ApricotsImg from "../Assets/Css/Images/Fruits/apricots.png";
import PlumImg from "../Assets/Css/Images/Fruits/plum.png";

function Products() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search") || "";
  const categoryParam = new URLSearchParams(location.search).get("category") || null;
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterInStock, setFilterInStock] = useState(false);
  const [filterMaxPrice, setFilterMaxPrice] = useState(300);

  const productsList = [
    { id: 1,  name: "Fresh Tomato",    category: "Vegetables", weight: "500g",    price: 40,  oldPrice: 60,  rating: "4.8 (1.2k)", image: TomatoImg,        deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 2,  name: "Cucumber",        category: "Vegetables", weight: "1kg",     price: 28,  oldPrice: 40,  rating: "4.6 (621)",  image: CucumberImg,      deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 3,  name: "Potato",          category: "Vegetables", weight: "1kg",     price: 30,  oldPrice: 45,  rating: "4.5 (912)",  image: PotatoImg,        deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 4,  name: "Onion",           category: "Vegetables", weight: "1kg",     price: 20,  oldPrice: 30,  rating: "4.4 (1.1k)", image: OnionImg,         deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 5,  name: "Carrot",          category: "Vegetables", weight: "500g",    price: 22,  oldPrice: 32,  rating: "4.6 (780)",  image: CarrotImg,        deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 6,  name: "Green Capsicum",  category: "Vegetables", weight: "500g",    price: 35,  oldPrice: 50,  rating: "4.5 (430)",  image: GreenCapsicumImg, deliveryTime: "10 min", tags: ["Fresh"],      inStock: true, stock: 2 },
    { id: 7,  name: "Broccoli",        category: "Vegetables", weight: "500g",    price: 55,  oldPrice: 75,  rating: "4.7 (320)",  image: BroccoliImg,      deliveryTime: "12 min", tags: ["Organic"],    inStock: true },
    { id: 8,  name: "Brinjal",         category: "Vegetables", weight: "500g",    price: 25,  oldPrice: 35,  rating: "4.5 (410)",  image: BrinjalImg,       deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 9,  name: "Cauliflower",     category: "Vegetables", weight: "1 pc",    price: 30,  oldPrice: 45,  rating: "4.6 (530)",  image: CauliflowerImg,   deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 10, name: "Beans",           category: "Vegetables", weight: "250g",    price: 20,  oldPrice: 30,  rating: "4.4 (380)",  image: BeansImg,         deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 11, name: "Lady's Finger",   category: "Vegetables", weight: "250g",    price: 22,  oldPrice: 32,  rating: "4.5 (290)",  image: LadysFingerImg,   deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 12, name: "Garlic",          category: "Vegetables", weight: "100g",    price: 15,  oldPrice: 25,  rating: "4.6 (870)",  image: GarlicImg,        deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 13, name: "Ginger",          category: "Vegetables", weight: "100g",    price: 18,  oldPrice: 28,  rating: "4.5 (640)",  image: GingerImg,        deliveryTime: "7 min",  tags: ["Fresh"],      inStock: true },
    { id: 14, name: "Green Chili",     category: "Vegetables", weight: "100g",    price: 10,  oldPrice: 18,  rating: "4.4 (510)",  image: GreenChiliImg,    deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 15, name: "Coriander",       category: "Vegetables", weight: "100g",    price: 8,   oldPrice: 15,  rating: "4.5 (430)",  image: CorianderImg,     deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 16, name: "Pumpkin",         category: "Vegetables", weight: "1kg",     price: 25,  oldPrice: 38,  rating: "4.4 (260)",  image: PumpkinImg,       deliveryTime: "12 min", tags: ["Fresh"],      inStock: true },
    { id: 17, name: "Radish",          category: "Vegetables", weight: "500g",    price: 18,  oldPrice: 28,  rating: "4.3 (190)",  image: RadishImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 18, name: "Lettuce",         category: "Vegetables", weight: "250g",    price: 30,  oldPrice: 45,  rating: "4.6 (310)",  image: LettuceImg,       deliveryTime: "11 min", tags: ["Organic"],    inStock: true },
    { id: 19, name: "Chickpeas",       category: "Vegetables", weight: "500g",    price: 55,  oldPrice: 70,  rating: "4.7 (450)",  image: ChickpeasImg,     deliveryTime: "10 min", tags: ["Healthy"],    inStock: true },
    { id: 20, name: "Red Cabbage",     category: "Vegetables", weight: "1kg",     price: 35,  oldPrice: 50,  rating: "4.5 (220)",  image: RedCabbageImg,    deliveryTime: "11 min", tags: ["Organic"],    inStock: true },
    { id: 21, name: "Red Chili",       category: "Vegetables", weight: "100g",    price: 12,  oldPrice: 20,  rating: "4.4 (340)",  image: RedChiliImg,      deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 22, name: "Yellow Capsicum", category: "Vegetables", weight: "500g",    price: 40,  oldPrice: 55,  rating: "4.6 (280)",  image: YellowCapsicumImg,deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    // Fruits
    { id: 23, name: "Apple",           category: "Fruits",     weight: "1kg",     price: 120, oldPrice: 150, rating: "4.7 (856)",  image: AppleImg,         deliveryTime: "12 min", tags: ["Bestseller"], inStock: true },
    { id: 24, name: "Banana",          category: "Fruits",     weight: "1 Dozen", price: 45,  oldPrice: 60,  rating: "4.6 (891)",  image: BananaImg,        deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 25, name: "Mango",           category: "Fruits",     weight: "1kg",     price: 90,  oldPrice: 120, rating: "4.9 (2.3k)", image: MangoImg,         deliveryTime: "10 min", tags: ["Seasonal"],   inStock: true },
    { id: 26, name: "Watermelon",      category: "Fruits",     weight: "2kg",     price: 60,  oldPrice: 80,  rating: "4.6 (670)",  image: WatermelonImg,    deliveryTime: "15 min", tags: ["Fresh"],      inStock: true },
    { id: 27, name: "Green Grapes",    category: "Fruits",     weight: "500g",    price: 75,  oldPrice: 100, rating: "4.7 (490)",  image: GreenGrapesImg,   deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 28, name: "Red Grapes",      category: "Fruits",     weight: "500g",    price: 80,  oldPrice: 105, rating: "4.7 (370)",  image: RedGrapesImg,     deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 29, name: "Papaya",          category: "Fruits",     weight: "1kg",     price: 50,  oldPrice: 70,  rating: "4.5 (310)",  image: PapayaImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 30, name: "Pomegranate",     category: "Fruits",     weight: "500g",    price: 85,  oldPrice: 110, rating: "4.8 (560)",  image: PomegranateImg,   deliveryTime: "12 min", tags: ["Healthy"],    inStock: true },
    { id: 31, name: "Kiwi",            category: "Fruits",     weight: "6 pcs",   price: 110, oldPrice: 140, rating: "4.7 (280)",  image: KiwiImg,          deliveryTime: "13 min", tags: ["Imported"],   inStock: true, stock: 1 },
    { id: 32, name: "Orange",          category: "Fruits",     weight: "1kg",     price: 70,  oldPrice: 90,  rating: "4.8 (720)",  image: OrangeImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 33, name: "Pineapple",       category: "Fruits",     weight: "1 pc",    price: 65,  oldPrice: 85,  rating: "4.6 (410)",  image: PineappleImg,     deliveryTime: "12 min", tags: ["Fresh"],      inStock: true },
    { id: 34, name: "Strawberry",      category: "Fruits",     weight: "250g",    price: 120, oldPrice: 150, rating: "4.8 (630)",  image: StrawberryImg,    deliveryTime: "11 min", tags: ["Imported"],   inStock: true },
    { id: 35, name: "Blueberry",       category: "Fruits",     weight: "125g",    price: 180, oldPrice: 220, rating: "4.8 (290)",  image: BlueberryImg,     deliveryTime: "13 min", tags: ["Imported"],   inStock: true },
    { id: 36, name: "Guava",           category: "Fruits",     weight: "500g",    price: 40,  oldPrice: 60,  rating: "4.6 (480)",  image: GuavaImg,         deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 37, name: "Litchi",          category: "Fruits",     weight: "500g",    price: 95,  oldPrice: 120, rating: "4.7 (340)",  image: LitchiImg,        deliveryTime: "11 min", tags: ["Seasonal"],   inStock: true },
    { id: 38, name: "Dragon Fruit",    category: "Fruits",     weight: "1 pc",    price: 150, oldPrice: 190, rating: "4.7 (210)",  image: DragonFruitImg,   deliveryTime: "14 min", tags: ["Exotic"],     inStock: true },
    { id: 39, name: "Cherry",          category: "Fruits",     weight: "250g",    price: 200, oldPrice: 250, rating: "4.8 (180)",  image: CherryImg,        deliveryTime: "13 min", tags: ["Imported"],   inStock: true },
    { id: 40, name: "Dates",           category: "Fruits",     weight: "250g",    price: 130, oldPrice: 160, rating: "4.8 (520)",  image: DatesImg,         deliveryTime: "10 min", tags: ["Healthy"],    inStock: true },
    { id: 41, name: "Apricots",        category: "Fruits",     weight: "250g",    price: 110, oldPrice: 140, rating: "4.6 (230)",  image: ApricotsImg,      deliveryTime: "12 min", tags: ["Dry Fruit"],  inStock: true },
    { id: 42, name: "Plum",            category: "Fruits",     weight: "500g",    price: 90,  oldPrice: 115, rating: "4.6 (270)",  image: PlumImg,          deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    // Dairy
    { id: 43, name: "Full Cream Milk",          category: "Dairy", weight: "1L",    price: 55,  oldPrice: 70,  rating: "4.9 (2.1k)", image: MilkImg,                      deliveryTime: "10 min", tags: ["Fresh"],       inStock: true },
    { id: 44, name: "Butter",                   category: "Dairy", weight: "100g",  price: 55,  oldPrice: 65,  rating: "4.8 (1.3k)", image: ButterImg,                    deliveryTime: "10 min", tags: ["Bestseller"],  inStock: true },
    { id: 45, name: "Fresh Paneer",             category: "Dairy", weight: "200g",  price: 85,  oldPrice: 100, rating: "4.8 (1.5k)", image: PaneerImg,                    deliveryTime: "11 min", tags: ["Fresh"],       inStock: true },
    { id: 46, name: "Traditional Curd",         category: "Dairy", weight: "500g",  price: 40,  oldPrice: 55,  rating: "4.7 (980)",  image: TraditionalCurdImg,           deliveryTime: "9 min",  tags: ["Fresh"],       inStock: true },
    { id: 47, name: "Cheese Slices",            category: "Dairy", weight: "200g",  price: 95,  oldPrice: 120, rating: "4.6 (640)",  image: CheeseSlicesImg,              deliveryTime: "12 min", tags: ["Fresh"],       inStock: true },
    { id: 48, name: "Pure Ghee",                category: "Dairy", weight: "500ml", price: 280, oldPrice: 340, rating: "4.9 (1.8k)", image: GheeImg,                      deliveryTime: "10 min", tags: ["Pure"],        inStock: true },
    { id: 55, name: "Yogurt",                   category: "Dairy", weight: "400g",  price: 45,  oldPrice: 60,  rating: "4.7 (720)",  image: YogurtImg,                    deliveryTime: "10 min", tags: ["Healthy"],     inStock: true },
    { id: 56, name: "Fresh Cream",              category: "Dairy", weight: "200ml", price: 50,  oldPrice: 65,  rating: "4.6 (410)",  image: FreshCreamImg,                deliveryTime: "11 min", tags: ["Fresh"],       inStock: true },
    { id: 57, name: "Cream Cheese",             category: "Dairy", weight: "180g",  price: 130, oldPrice: 160, rating: "4.7 (380)",  image: CreamCheeseImg,               deliveryTime: "12 min", tags: ["Imported"],    inStock: true },
    { id: 58, name: "Mozzarella Cheese",        category: "Dairy", weight: "200g",  price: 145, oldPrice: 180, rating: "4.8 (510)",  image: MozzarellaCheeseImg,          deliveryTime: "12 min", tags: ["Bestseller"],  inStock: true },
    { id: 59, name: "Condensed Milk",           category: "Dairy", weight: "400g",  price: 90,  oldPrice: 110, rating: "4.7 (630)",  image: CondensedMilkImg,             deliveryTime: "10 min", tags: ["Sweet"],       inStock: true },
    { id: 60, name: "Whipped Cream",            category: "Dairy", weight: "250ml", price: 110, oldPrice: 140, rating: "4.6 (290)",  image: WhippedCreamImg,              deliveryTime: "13 min", tags: ["Fresh"],       inStock: true },
    { id: 61, name: "Sour Cream",               category: "Dairy", weight: "200g",  price: 95,  oldPrice: 120, rating: "4.5 (210)",  image: SourCreamImg,                 deliveryTime: "12 min", tags: ["Fresh"],       inStock: true },
    { id: 62, name: "Cottage Cheese",           category: "Dairy", weight: "200g",  price: 75,  oldPrice: 95,  rating: "4.6 (340)",  image: CottageCheesePaneerCrumblesImg, deliveryTime: "11 min", tags: ["Healthy"],   inStock: true },
    { id: 63, name: "Ricotta Cheese",           category: "Dairy", weight: "200g",  price: 160, oldPrice: 200, rating: "4.7 (190)",  image: RicottaCheeseImg,             deliveryTime: "13 min", tags: ["Imported"],    inStock: true },
    { id: 64, name: "Blue Cheese",              category: "Dairy", weight: "150g",  price: 220, oldPrice: 270, rating: "4.6 (140)",  image: BlueCheesImg,                 deliveryTime: "14 min", tags: ["Imported"],    inStock: true },
    { id: 65, name: "Brie Cheese",              category: "Dairy", weight: "150g",  price: 240, oldPrice: 290, rating: "4.7 (120)",  image: BrieCheeseImg,                deliveryTime: "14 min", tags: ["Imported"],    inStock: true },
    { id: 66, name: "Swiss Cheese",             category: "Dairy", weight: "200g",  price: 180, oldPrice: 220, rating: "4.6 (160)",  image: SwissCheeseImg,               deliveryTime: "13 min", tags: ["Imported"],    inStock: true },
    { id: 67, name: "Cheese Balls",             category: "Dairy", weight: "150g",  price: 85,  oldPrice: 110, rating: "4.5 (280)",  image: CheeseBallsImg,               deliveryTime: "11 min", tags: ["Snack"],       inStock: true },
    { id: 68, name: "Vanilla Ice Cream",        category: "Dairy", weight: "500ml", price: 120, oldPrice: 150, rating: "4.8 (870)",  image: VanillaIceCreamImg,           deliveryTime: "12 min", tags: ["Bestseller"],  inStock: true },
    { id: 69, name: "Butterscotch Ice Cream",   category: "Dairy", weight: "500ml", price: 130, oldPrice: 160, rating: "4.7 (560)",  image: ButterscotchIceCreamImg,      deliveryTime: "12 min", tags: ["Sweet"],       inStock: true },
    { id: 70, name: "Chocolate Milkshake",      category: "Dairy", weight: "300ml", price: 65,  oldPrice: 85,  rating: "4.8 (490)",  image: ChocolateMilkshakeImg,        deliveryTime: "10 min", tags: ["Fresh"],       inStock: true },
    { id: 71, name: "Strawberry Yogurt Drink",  category: "Dairy", weight: "200ml", price: 40,  oldPrice: 55,  rating: "4.6 (370)",  image: StrawberryYogurtDrinkImg,     deliveryTime: "9 min",  tags: ["Healthy"],     inStock: true },
    { id: 72, name: "Probiotic Drink",          category: "Dairy", weight: "65ml",  price: 20,  oldPrice: 28,  rating: "4.7 (1.1k)", image: ProbioticDrinkImg,            deliveryTime: "8 min",  tags: ["Healthy"],     inStock: true },
    { id: 73, name: "Custard Cream",            category: "Dairy", weight: "200g",  price: 55,  oldPrice: 70,  rating: "4.5 (240)",  image: CustardCreamImg,              deliveryTime: "11 min", tags: ["Sweet"],       inStock: true },
    { id: 74, name: "Milk Pudding",             category: "Dairy", weight: "150g",  price: 45,  oldPrice: 60,  rating: "4.6 (200)",  image: MilkPuddingImg,               deliveryTime: "11 min", tags: ["Sweet"],       inStock: true },
    { id: 75, name: "Rice Pudding (Kheer)",     category: "Dairy", weight: "200g",  price: 60,  oldPrice: 80,  rating: "4.7 (310)",  image: RicePuddingImg,               deliveryTime: "12 min", tags: ["Traditional"], inStock: true },
    // Snacks & Beverages
    { id: 49,  name: "Bingo Mad Angles",          category: "Snacks",     weight: "130g",   price: 30,  oldPrice: 40,  rating: "4.7 (1.4k)", image: BingoMadAnglesImg,     deliveryTime: "10 min", tags: ["Bestseller"], inStock: true },
    { id: 50,  name: "Bisleri Water",              category: "Beverages",  weight: "1L",     price: 20,  oldPrice: 25,  rating: "4.8 (2.1k)", image: BisleriImg,            deliveryTime: "7 min",  tags: ["Fresh"],      inStock: true },
    { id: 51,  name: "Lays Blue",                  category: "Snacks",     weight: "78g",    price: 30,  oldPrice: 40,  rating: "4.6 (980)",  image: BlueLaysImg,           deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 52,  name: "Cheetos Puffs",              category: "Snacks",     weight: "55g",    price: 20,  oldPrice: 28,  rating: "4.5 (760)",  image: CheetosPuffsImg,       deliveryTime: "9 min",  tags: ["Crunchy"],    inStock: true },
    { id: 76,  name: "Doritos",                    category: "Snacks",     weight: "133g",   price: 99,  oldPrice: 120, rating: "4.7 (870)",  image: DoritosImg,            deliveryTime: "10 min", tags: ["Imported"],   inStock: true },
    { id: 77,  name: "Fanta",                      category: "Beverages",  weight: "750ml",  price: 45,  oldPrice: 55,  rating: "4.6 (1.1k)", image: FantaImg,              deliveryTime: "8 min",  tags: ["Refreshing"], inStock: true },
    { id: 78,  name: "Kurkure Green Chutney",      category: "Snacks",     weight: "90g",    price: 20,  oldPrice: 28,  rating: "4.6 (1.3k)", image: GreenKurkureImg,       deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 79,  name: "Haldiram's Aloo Bhujia",     category: "Snacks",     weight: "200g",   price: 85,  oldPrice: 100, rating: "4.8 (1.9k)", image: HaldiramAlooBhujiaImg, deliveryTime: "10 min", tags: ["Bestseller"], inStock: true },
    { id: 80,  name: "Haldiram's Samosa",          category: "Snacks",     weight: "200g",   price: 75,  oldPrice: 90,  rating: "4.7 (1.2k)", image: HaldiramSamosaImg,     deliveryTime: "10 min", tags: ["Popular"],    inStock: true },
    { id: 81,  name: "Lipton Lemon Iced Tea",      category: "Beverages",  weight: "300ml",  price: 35,  oldPrice: 45,  rating: "4.5 (680)",  image: LiptonLemonImg,        deliveryTime: "8 min",  tags: ["Refreshing"], inStock: true },
    { id: 82,  name: "Maaza Mango Drink",          category: "Beverages",  weight: "600ml",  price: 40,  oldPrice: 50,  rating: "4.7 (1.6k)", image: MaazaImg,              deliveryTime: "8 min",  tags: ["Bestseller"], inStock: true },
    { id: 83,  name: "Monster Energy Drink",       category: "Beverages",  weight: "500ml",  price: 125, oldPrice: 150, rating: "4.6 (740)",  image: MonsterEnergyImg,      deliveryTime: "10 min", tags: ["Energy"],     inStock: true },
    { id: 84,  name: "Munch Crunchilicious",       category: "Snacks",     weight: "50g",    price: 15,  oldPrice: 20,  rating: "4.5 (910)",  image: MunchCrunchiliciousImg,deliveryTime: "8 min",  tags: ["Popular"],    inStock: true },
    { id: 85,  name: "Pepsi",                      category: "Beverages",  weight: "750ml",  price: 45,  oldPrice: 55,  rating: "4.6 (1.8k)", image: PepsiImg,              deliveryTime: "8 min",  tags: ["Bestseller"], inStock: true },
    { id: 86,  name: "Pringles Sour Cream & Onion",category: "Snacks",     weight: "107g",   price: 150, oldPrice: 180, rating: "4.7 (620)",  image: PringlesSourCreamImg,  deliveryTime: "11 min", tags: ["Imported"],   inStock: true },
    { id: 87,  name: "Bingo Purple",               category: "Snacks",     weight: "82g",    price: 30,  oldPrice: 40,  rating: "4.5 (780)",  image: PurpleBingoImg,        deliveryTime: "9 min",  tags: ["Crunchy"],    inStock: true },
    { id: 88,  name: "Red Bull Energy Drink",      category: "Beverages",  weight: "250ml",  price: 130, oldPrice: 160, rating: "4.7 (950)",  image: RedBullImg,            deliveryTime: "10 min", tags: ["Energy"],     inStock: true },
    { id: 89,  name: "Sprite",                     category: "Beverages",  weight: "750ml",  price: 45,  oldPrice: 55,  rating: "4.6 (1.4k)", image: SpriteImg,             deliveryTime: "8 min",  tags: ["Refreshing"], inStock: true },
    { id: 90,  name: "Thums Up",                   category: "Beverages",  weight: "750ml",  price: 45,  oldPrice: 55,  rating: "4.8 (2.0k)", image: ThumsUpImg,            deliveryTime: "8 min",  tags: ["Bestseller"], inStock: true },
    { id: 91,  name: "Uncle Chips",                category: "Snacks",     weight: "75g",    price: 20,  oldPrice: 28,  rating: "4.5 (830)",  image: UncleChipsImg,         deliveryTime: "9 min",  tags: ["Popular"],    inStock: true },
    { id: 92,  name: "Lays Classic Salted",        category: "Snacks",     weight: "78g",    price: 30,  oldPrice: 40,  rating: "4.7 (1.1k)", image: YellowLaysImg,         deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    // Personal Care
    { id: 53,  name: "Axe Perfume",               category: "Personal Care", weight: "150ml", price: 299, oldPrice: 350, rating: "4.6 (1.2k)", image: AxePerfumeImg,        deliveryTime: "11 min", tags: ["Popular"],    inStock: true },
    { id: 54,  name: "Bigen Hair Dye",            category: "Personal Care", weight: "1 pc",  price: 180, oldPrice: 220, rating: "4.5 (430)",  image: BigenHairDyeImg,     deliveryTime: "12 min", tags: ["Popular"],    inStock: true },
    { id: 93,  name: "Colgate Toothpaste",        category: "Personal Care", weight: "200g",  price: 99,  oldPrice: 120, rating: "4.8 (2.3k)", image: ColgateImg,          deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 94,  name: "Dettol Soap",               category: "Personal Care", weight: "75g",   price: 45,  oldPrice: 55,  rating: "4.7 (1.8k)", image: DettolSoapImg,       deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 95,  name: "Garnier Men Face Wash",     category: "Personal Care", weight: "100ml", price: 149, oldPrice: 180, rating: "4.6 (870)",  image: GarnierMenImg,       deliveryTime: "11 min", tags: ["Popular"],    inStock: true },
    { id: 96,  name: "Gillette Razor",            category: "Personal Care", weight: "1 pc",  price: 199, oldPrice: 250, rating: "4.7 (1.1k)", image: GilleteImg,          deliveryTime: "10 min", tags: ["Bestseller"], inStock: true },
    { id: 97,  name: "Head & Shoulders Shampoo",  category: "Personal Care", weight: "340ml", price: 299, oldPrice: 360, rating: "4.7 (1.5k)", image: HeadAndShouldersImg, deliveryTime: "11 min", tags: ["Bestseller"], inStock: true },
    { id: 98,  name: "Listerine Mouthwash",       category: "Personal Care", weight: "250ml", price: 175, oldPrice: 210, rating: "4.6 (790)",  image: ListerineImg,        deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 99,  name: "Lux Soap",                  category: "Personal Care", weight: "75g",   price: 35,  oldPrice: 45,  rating: "4.6 (1.4k)", image: LuxImg,              deliveryTime: "9 min",  tags: ["Popular"],    inStock: true },
    { id: 100, name: "Nivea Body Milk Lotion",    category: "Personal Care", weight: "400ml", price: 399, oldPrice: 470, rating: "4.7 (920)",  image: NiveaBodyMilkImg,    deliveryTime: "12 min", tags: ["Popular"],    inStock: true },
    { id: 101, name: "Pond's Beauty Cream",       category: "Personal Care", weight: "100g",  price: 129, oldPrice: 155, rating: "4.6 (1.0k)", image: PondsBeautyCreamImg, deliveryTime: "10 min", tags: ["Popular"],    inStock: true },
    { id: 102, name: "Rexona Roll-On Deodorant",  category: "Personal Care", weight: "50ml",  price: 175, oldPrice: 210, rating: "4.5 (680)",  image: RexonaRollOnImg,     deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 103, name: "Vaseline Aloe Body Lotion", category: "Personal Care", weight: "400ml", price: 299, oldPrice: 350, rating: "4.7 (830)",  image: VaselineAloeImg,     deliveryTime: "12 min", tags: ["Popular"],    inStock: true },
    { id: 104, name: "VLCC Insta Glow Bleach",    category: "Personal Care", weight: "402g",  price: 249, oldPrice: 299, rating: "4.5 (560)",  image: VLCCInstaGlowImg,    deliveryTime: "12 min", tags: ["Popular"],    inStock: true },
    { id: 105, name: "Whisper Sanitary Pads",     category: "Personal Care", weight: "1 pack",price: 89,  oldPrice: 110, rating: "4.8 (2.0k)", image: WhisperImg,          deliveryTime: "10 min", tags: ["Bestseller"], inStock: true },
  ];

  const shuffledProducts = useMemo(() => [...productsList].sort(() => Math.random() - 0.5), []);

  return (
    <div className="min-h-screen bg-[#f8f8f5] flex flex-col text-gray-800">
      <div className="max-w-[1600px] w-full mx-auto px-6 py-6 space-y-6 flex-1 flex flex-col min-w-0">

        {/* 1. TOP CATEGORIES BANNER ROW - hide when searching */}
        {!searchQuery && (
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-4">

            <div
              onClick={() => setActiveCategory(activeCategory === "Vegetables" ? null : "Vegetables")}
              style={{ backgroundImage: `url(${vegetables})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className={`h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block ${activeCategory === "Vegetables" ? "ring-4 ring-green-600 scale-[1.02] shadow-lg" : ""}`}
            >
              <h3 className="text-3xl font-bold text-green-900">Fresh<br />Vegetables</h3>
              <p className="mt-3 text-xs text-gray-700 font-medium">Flat 30% OFF</p>
            </div>

            <div
              onClick={() => setActiveCategory(activeCategory === "Fruits" ? null : "Fruits")}
              style={{ backgroundImage: `url(${fruits})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className={`h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block ${activeCategory === "Fruits" ? "ring-4 ring-green-600 scale-[1.02] shadow-lg" : ""}`}
            >
              <h3 className="text-3xl font-bold text-amber-900">Fruits<br />Collection</h3>
              <p className="mt-3 text-xs text-gray-700 font-medium">Flat 25% OFF</p>
            </div>

            <div
              onClick={() => setActiveCategory(activeCategory === "Dairy" ? null : "Dairy")}
              style={{ backgroundImage: `url(${dairy})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className={`h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block ${activeCategory === "Dairy" ? "ring-4 ring-green-600 scale-[1.02] shadow-lg" : ""}`}
            >
              <h3 className="text-3xl font-bold text-slate-800">Dairy<br />Essentials</h3>
              <p className="mt-3 text-xs text-gray-700 font-medium">Upto 40% OFF</p>
            </div>

            <div
              onClick={() => setActiveCategory(activeCategory === "Snacks" ? null : "Snacks")}
              style={{ backgroundImage: `url(${snacks})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className={`h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block ${activeCategory === "Snacks" ? "ring-4 ring-green-600 scale-[1.02] shadow-lg" : ""}`}
            >
              <h3 className="text-3xl font-bold text-amber-900">Snacks &<br />Beverages</h3>
              <p className="mt-3 text-xs text-gray-700 font-medium">Upto 35% OFF</p>
            </div>

            <div
              onClick={() => setActiveCategory(activeCategory === "Personal Care" ? null : "Personal Care")}
              style={{ backgroundImage: `url(${personal})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className={`h-80 rounded-3xl p-5 cursor-pointer hover:scale-[1.02] hover:shadow-lg transition duration-200 block ${activeCategory === "Personal Care" ? "ring-4 ring-green-600 scale-[1.02] shadow-lg" : ""}`}
            >
              <h3 className="text-3xl font-bold text-rose-900">Personal<br />Care</h3>
              <p className="mt-3 text-xs text-gray-700 font-medium">Upto 30% OFF</p>
            </div>

          </div>
        </section>
        )}

        {/* 2. MAIN HERO BANNER - hide when searching or category selected */}
        {!searchQuery && !activeCategory && (
        <section className="bg-[#edf5e7] border border-green-100/55 rounded-[28px] p-8 relative overflow-hidden flex h-[240px] items-center justify-between shadow-sm">
          <div className="w-[55%] text-left">
            <span className="text-green-700 text-xs font-medium tracking-widest uppercase block">BODEGA SPECIAL</span>
            <h3 className="text-4xl font-bold text-green-900 mt-1 leading-tight">
              Fresh Groceries,<br />
              <span className="text-orange-500 font-bold">Delivered in 10 Minutes</span>
            </h3>
            <p className="text-sm text-gray-700 mt-2">Farm fresh produce, handpicked for you.</p>
            <div className="flex items-center gap-5 mt-4 text-xs font-bold text-gray-600">
              <span className="flex items-center gap-1.5 text-gray-700">
                <i className="ri-time-line text-green-700 text-sm"></i>10 Min Delivery
              </span>
              <div className="h-3.5 w-[1px] bg-gray-300"></div>
              <span className="flex items-center gap-1.5 text-gray-700">
                <i className="ri-truck-line text-green-700 text-sm"></i>Free Delivery above ₹499
              </span>
            </div>
          </div>
          <div className="w-[50%] h-full relative flex items-center justify-end shrink-0 select-none">
            <img src="/images/banner_vegetables.png" alt="Fresh grocery basket" className="absolute right-[50px] w-[280px] h-[240px] object-contain mix-blend-multiply" />
          </div>
        </section>
        )}

        {/* 3. MAIN CATALOG SECTION */}
        {(() => {
          const filtered = (() => {
            let list = activeCategory
              ? productsList.filter((p) => {
                  if (activeCategory === "Snacks") return ["Snacks", "Beverages", "Bakery"].includes(p.category);
                  return p.category === activeCategory;
                })
              : shuffledProducts;
            if (searchQuery) {
              const normalize = (s) => s.toLowerCase().replace(/\s+/g, "");
              const tokens = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
              const fuzzyMatch = (text, token) => {
                const t = text.toLowerCase();
                if (t.includes(token)) return true;
                // bigram similarity
                const bigrams = (s) => { const b = new Set(); for (let i = 0; i < s.length - 1; i++) b.add(s[i] + s[i+1]); return b; };
                const a = bigrams(token), b = bigrams(t);
                if (a.size === 0) return false;
                let common = 0; a.forEach(g => { if (b.has(g)) common++; });
                return (2 * common) / (a.size + b.size) > 0.35;
              };
              list = list.filter((p) => {
                const name = p.name.toLowerCase();
                const cat = p.category.toLowerCase();
                const nameNorm = normalize(p.name);
                const queryNorm = normalize(searchQuery);
                if (nameNorm.includes(queryNorm) || name.includes(searchQuery.toLowerCase())) return true;
                return tokens.every(token => fuzzyMatch(name, token) || fuzzyMatch(cat, token));
              });
            }
            if (filterInStock) list = list.filter((p) => p.inStock);
            if (filterMaxPrice < 300) list = list.filter((p) => p.price <= filterMaxPrice);
            if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
            else if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
            else if (sortBy === "rating") list = [...list].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            else if (sortBy === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
            return list;
          })();
          return (
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-xl font-bold text-green-900">
                    {searchQuery ? `Results for "${searchQuery}"` : activeCategory ? `${activeCategory === "Snacks" ? "Snacks & Beverages" : activeCategory}` : "All Products"}
                  </h2>
                  <div className="flex items-center gap-3 mt-0.5">
                    <p className="text-xs text-gray-500">
                      <span className="text-green-700 font-bold">{filtered.length}</span> products available
                    </p>
                    {activeCategory && (
                      <button
                        onClick={() => setActiveCategory(null)}
                        className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-semibold transition cursor-pointer"
                      >
                        <i className="ri-close-line"></i> Clear filter
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2.5 relative">
                  {/* Filter Button */}
                  <div className="relative">
                    <button
                      onClick={() => { setShowFilter(!showFilter); setShowSort(false); }}
                      className={`flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition cursor-pointer ${showFilter ? "bg-green-700 text-white border-green-700" : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"}`}
                    >
                      <i className="ri-equalizer-line text-sm"></i>Filter<i className="ri-arrow-down-s-line"></i>
                    </button>
                    {showFilter && (
                      <div className="absolute right-0 top-10 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
                        <p className="text-xs font-bold text-gray-700 mb-3">Filter By</p>
                        <label className="flex items-center gap-2 text-sm text-gray-600 mb-3 cursor-pointer">
                          <input type="checkbox" checked={filterInStock} onChange={(e) => setFilterInStock(e.target.checked)} className="accent-green-600" />
                          In Stock Only
                        </label>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">Max Price: ₹{filterMaxPrice}</p>
                          <input type="range" min="10" max="300" value={filterMaxPrice} onChange={(e) => setFilterMaxPrice(Number(e.target.value))}
                            className="w-full accent-green-600" />
                          <div className="flex justify-between text-[10px] text-gray-400">
                            <span>₹10</span><span>₹300</span>
                          </div>
                        </div>
                        <button onClick={() => { setFilterInStock(false); setFilterMaxPrice(300); }}
                          className="mt-3 w-full text-xs text-red-500 hover:text-red-600 font-semibold cursor-pointer">
                          Reset Filters
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Sort Button */}
                  <div className="relative">
                    <button
                      onClick={() => { setShowSort(!showSort); setShowFilter(false); }}
                      className={`flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition cursor-pointer ${showSort ? "bg-green-700 text-white border-green-700" : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"}`}
                    >
                      <i className="ri-arrow-up-down-line text-sm"></i>Sort by<i className="ri-arrow-down-s-line"></i>
                    </button>
                    {showSort && (
                      <div className="absolute right-0 top-10 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
                        {[
                          { label: "Default",            value: "" },
                          { label: "Price: Low to High", value: "price-asc" },
                          { label: "Price: High to Low", value: "price-desc" },
                          { label: "Top Rated",          value: "rating" },
                          { label: "Name: A to Z",       value: "name" },
                        ].map((opt) => (
                          <button key={opt.value}
                            onClick={() => { setSortBy(opt.value); setShowSort(false); }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                              sortBy === opt.value ? "bg-green-700 text-white" : "hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}

export default Products;
