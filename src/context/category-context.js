import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState("All");

  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
 
const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
