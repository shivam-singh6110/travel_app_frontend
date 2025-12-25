import {useNavigate} from "react-router-dom";

import "./HotelCard.css";

export const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  if (!hotel) return null; // safety check
  
  const {_id}=hotel;
 const handleHotelCardClick = () => {
  navigate(
    `/hotels/${encodeURIComponent(hotel.name)}/${encodeURIComponent(
      hotel.address
    )}/${encodeURIComponent(hotel.state)}/${_id}/reserve`
  );
};


  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img
          className="img"
          src={hotel.image || hotel.images?.[0]}
          alt={hotel.name}
        />

        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {hotel.location || hotel.address}
            </span>

            <span className="rating d-flex align-center">
              <span className="material-symbols-outlined">star</span>
              <span>{hotel.rating || "4.0"}</span>
            </span>
          </div>

          <p className="hotel-name">{hotel.name}</p>

          <p className="price-details">
            <span className="price">
              ₹ {hotel.price || hotel.pricePerNight}
            </span>
            <span> / night</span>
          </p>
        </div>
      </div>

      <button className="button btn-wishlist absolute">
        <span className="material-icons favorite cursor">favorite</span>
      </button>
    </div>
  );
};
