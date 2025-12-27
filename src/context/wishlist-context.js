import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialValue = {
  wishlist: [],   // ✅ lowercase, consistent
};

const WishlistContext = createContext(initialValue);

const WishlistProvider = ({ children }) => {
  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialValue
  );

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
