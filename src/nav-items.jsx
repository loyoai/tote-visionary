import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Product",
    to: "/product",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <ProductPage />,
  },
  {
    title: "Cart",
    to: "/cart",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <CartPage />,
  },
];
