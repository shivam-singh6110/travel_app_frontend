import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar, HotelCard, Categories } from "../../components";
import { useCategory } from "../../context";
import "./Home.css";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://travelo-app-x9na.onrender.com/api/hotels"
      );
      setHotels(data.hotels || data);
    })();
  }, []);

  //  FILTER LOGIC (MOST IMPORTANT PART)
  const filteredHotels =
    hotelCategory === "All"
      ? hotels
      : hotels.filter(
          (hotel) =>
            hotel.category === hotelCategory ||
            hotel.category?.name === hotelCategory
        );

  return (
    <Fragment>
      <Navbar />
      <Categories />

      <main className="main d-flex wrap gap-larger">
        {filteredHotels.length === 0 ? (
          <p>No hotel found</p>
        ) : (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        )}
      </main>
    </Fragment>
  );
};
