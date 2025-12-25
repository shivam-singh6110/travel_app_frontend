import { Fragment, useEffect, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import { useDate } from "../../context";
import axios from "axios";

export const SearchResults = () => {
  const { destination } = useDate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travelo-app-x9na.onrender.com/api/hotels"
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const filterSearchResults = hotels.filter(
    ({ city, address, state }) =>
      city?.toLowerCase().includes(destination.toLowerCase()) ||
      state?.toLowerCase().includes(destination.toLowerCase()) ||
      address?.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <Fragment>
      <Navbar />
      <section className="main d-flex align-center gap-larger">
        {filterSearchResults.length > 0 ? (
          filterSearchResults.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        ) : (
          <h3>Nothing Found</h3>
        )}
      </section>
    </Fragment>
  );
};
