import { useState, useEffect } from "react";
import axios from "axios";
import { DateSelector } from "../DateSelector/DateSelector";
import { useDate, useCategory } from "../../context";
import "./SearchStayWithDate.css";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const [hotels, setHotels] = useState([]);
  const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://travelo-app-x9na.onrender.com/api/hotels"
      );
      setHotels(data);
    })();
  }, []);

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };

  const handleDestinationFocus=()=>{
    dateDispatch({
        type:"SHOW_SEARCH_RESULT"
    })
  }

  const handleSearchButtonClick = ()=>{
    dateDispatch({
      type:"CLOSE_SEARCH_MODAL",
    });
    navigate(`/hotels/${destination}`)
  }

  const destinationOptions = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  return (
    <div className="destination-container">
      <div
        className="destination-options d-flex align-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            className="input search-dest"
            placeholder="Search Destination"
            autoFocus
          />
        </div>

        <div className="location-container">
          <label className="label">Check In</label>
          <DateSelector checkInType="in" />
        </div>

        <div className="location-container">
          <label className="label">Check out</label>
          <DateSelector checkInType="out" />
        </div>

        <div className="location-container">
          <label className="label">No. of Guests</label>
          <input
            value={guests}
            className="input search-dest"
            placeholder="Add guests"
            onChange={handleGuestChange}
          />
        </div>

        <div className="search-container d-flex align-center cursor" onClick={handleSearchButtonClick}>
          <span className="material-icons-outlined">search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container absoute">
          {destinationOptions &&
            destinationOptions.map(({ address, city }) => (
              <p
                className="p cursor-pointer"
                onClick={() => handleSearchResultClick(address)}
              >
                {address}, {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
