import { useNavigate } from "react-router-dom";

import "./HotelCard.css";
import { useWishlist,useAuth } from "../../context";
import { findHotelInWishlist } from "../../utils";

export const HotelCard = ({ hotel }) => {
  const { _id, name, image, address, state, rating, price } = hotel;
  const { wishlistDispatch, wishlist } = useWishlist();

  const {accessToken,authDispatch} = useAuth();
  
  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);


 
  const navigate = useNavigate();
  if (!hotel) return null; // safety check

  // const {_id}=hotel;

  const handleHotelCardClick = () => {
    navigate(
      `/hotels/${encodeURIComponent(hotel.name)}/${encodeURIComponent(
        hotel.address
      )}/${encodeURIComponent(hotel.state)}/${_id}/reserve`
    );
  };
  const handlewishlistClick = () => {
    if(accessToken){
     if(!isHotelInWishlist){
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: hotel,
    });
    navigate("/wishlist");
    }else{
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: _id, 
    });
    }
    }else{
      authDispatch({
        type:"SHOW_AUTH_MODEL",
      })
    }
    
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
            <span className="location">{hotel.location || hotel.address}</span>

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

      <button
        className="button btn-wishlist absolute d-flex align-center"
        onClick={handlewishlistClick}
      >
        <span className={`material-icons favorite cursor ${isHotelInWishlist ? "selected" : ""}`}>favorite</span>
      </button>
    </div>
  );
};
