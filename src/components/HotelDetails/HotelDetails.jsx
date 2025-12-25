import "./HotelDetails.css";

export const HotelDetails = ({ singleHotel }) => {
  if (!singleHotel) return null;

  const {
    name,
    numberOfBathrooms,
    numberOfBeds,
    numberOfGuests,
    numberOfBedrooms,
    amenities = [],
    rating,
    address,
  } = singleHotel;

  return (
    <div className="hotel-details-container">

      {/* HOTEL NAME (replaces Hosted by) */}
      <div className="host-details">
        <p className="hotel-name">{name}</p>
        <span className="span">
          {numberOfGuests} guests · {numberOfBedrooms} bedroom ·{" "}
          {numberOfBeds} bed · {numberOfBathrooms} bathroom
        </span>
      </div>

      {/* KEY FEATURES */}
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center gap">
            <span className="apps material-icons-outlined"></span>
            Great Location
          </p>
          <span className="span">
            Rated {rating}★ · {address}
          </span>
        </div>

        <p className="p d-flex align-center gap">
          <span className="apps material-icons-outlined"></span>
          Free cancellation before 7 days of booking
        </p>
      </div>

      {/* AMENITIES */}
      <div className="amenties-container host-details">
        <p className="p amenities">What this place offers</p>

        <div className="d-flex gap-xxl">
          <div className="d-flex direction-column">
            {amenities.map((item) => (
              <span
                key={item}
                className="span d-flex align-center gap"
              >
                <span className="apps material-icons-outlined"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PRICE
      <div className="host-details">
        <p className="p">
          ₹ {price} <span className="span">/ night</span>
        </p>
      </div> */}

    </div>
  );
};
