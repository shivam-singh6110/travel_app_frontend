import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDate } from "../../context";

export const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  const handleDateFocus =() =>{
    dateDispatch({
      type:"DATE_FOCUS",
    })
  }



  return (
    <div className="date-picker-wrapper">
      <DatePicker
        value={checkInType === "in" ? checkInDate : checkOutDate}
        onChange={handleDateChange}
        onFocus={handleDateFocus}
        format="dd/MM/yyyy"
        clearIcon={null}
        calendarIcon={null}
        closeOnScroll={true}
        placeholder="Add Dates"
      />
    </div>
  );
};
