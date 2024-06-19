import Booking from "@/components/Book/Booking";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import React from "react";

const BookALift = () => {
  return (
    <div>
      <div className="w-[80%] m-auto">
        <Header />
      </div>
      <Booking />
      <Footer />
    </div>
  );
};

export default BookALift;
