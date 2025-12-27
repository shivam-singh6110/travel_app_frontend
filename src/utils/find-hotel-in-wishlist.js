export const findHotelInWishlist = (wishlist, Id) => {
   const isHotelInWishlist = wishlist.some(hotel=>hotel._id === Id);
   return isHotelInWishlist;
}