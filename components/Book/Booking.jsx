"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Radio,
  Button,
  Typography,
} from "@material-tailwind/react";
import { DatePicker, TimePicker } from "antd";
import { TbCalendarPlus } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiRadioButtonFill } from "react-icons/ri";

const BookALift = () => {
  const [selectedService, setSelectedService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [showServiceOtherInput, setShowServiceOtherInput] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [durationOther, setDurationOther] = useState("");
  const [showDurationOtherInput, setShowDurationOtherInput] = useState(false);
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [dropOutPoint, setDropOutPoint] = useState("");
  const [information, setInformation] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [airlineName, setAirlineName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Update form validity whenever selectedService changes
    setIsFormValid(selectedService !== "" && selectedDuration !== "");
  }, [selectedService, selectedDuration]);

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setSelectedService(value);
    setShowServiceOtherInput(value === "other");
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setSelectedDuration(value);
    setShowDurationOtherInput(value === "duration-other");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedService,
      serviceOther: showServiceOtherInput ? serviceOther : "",
      selectedDuration,
      durationOther: showDurationOtherInput ? durationOther : "",
      pickUpPoint,
      dropOutPoint,
      information,
      fullName,
      contactEmail,
      airlineName,
      flightNumber,
      date,
      time,
    };
    console.log("Form Data: ", formData);
    // You can now send this data to your server or handle it as needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fffcf9] p-4">
      <Card className="w-[90%] md:w-[80%] mx-auto shadow-lg md:p-8 mt-8 border rounded-xl border-[#e7e7e7]">
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-6 text-[24px] font-semibold"
          >
            Book A Lift
          </Typography>
          <form
            className="flex flex-col md:flex-row gap-4 border-b border-[#e7e7e7] pb-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              {/* Service Request */}
              <div className="col-span-1 md:col-span-2 border border-[#e7e7e7] rounded-2xl p-4">
                <h6
                  variant="h6"
                  className="mb-4 text-[14px] text-black font-[600]"
                >
                  <span className="text-red-400">*</span> Service Request
                </h6>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Radio
                      name="serviceRequest"
                      id="pickup"
                      value="pickup"
                      onChange={handleServiceChange}
                      checked={selectedService === "pickup"}
                    />
                    <label
                      htmlFor="pickup"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Pick up to Airport
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      name="serviceRequest"
                      id="dropoff"
                      value="dropoff"
                      onChange={handleServiceChange}
                      checked={selectedService === "dropoff"}
                    />
                    <label
                      htmlFor="dropoff"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Drop off from Airport
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      name="serviceRequest"
                      id="chauffeur"
                      value="chauffeur"
                      onChange={handleServiceChange}
                      checked={selectedService === "chauffeur"}
                    />
                    <label
                      htmlFor="chauffeur"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Personal Chauffeur
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      name="serviceRequest"
                      id="other"
                      value="other"
                      onChange={handleServiceChange}
                      checked={selectedService === "other"}
                    />
                    <label
                      htmlFor="other"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Other
                    </label>
                  </div>
                  <p className="text-[12px] text-gray-400">
                    What service would you want to make a reservation for?
                  </p>
                </div>
                {showServiceOtherInput && (
                  <Input
                    placeholder="Specify other service"
                    required
                    label="Other service"
                    containerProps={{ className: "mt-2" }}
                    value={serviceOther}
                    onChange={(e) => setServiceOther(e.target.value)}
                  />
                )}
              </div>

              {/* Pick up/Drop out points */}
              <div className="col-span-1 border border-[#e7e7e7] rounded-2xl p-4">
                <div className="flex items-end gap-4">
                  <div className="bg-[#2956d3] rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                    <IoLocationOutline className="text-white" />
                  </div>
                  <div className="w-full">
                    <Input
                      variant="static"
                      placeholder="Pick up point"
                      value={pickUpPoint}
                      onChange={(e) => setPickUpPoint(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-end gap-4">
                  <div className="bg-[#2956d3] rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                    <RiRadioButtonFill className="text-white" />
                  </div>
                  <div className="w-full">
                    <Input
                      className="w-full"
                      variant="static"
                      placeholder="Drop out point"
                      value={dropOutPoint}
                      onChange={(e) => setDropOutPoint(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Input
                placeholder="Drop more Information"
                label="Information"
                value={information}
                onChange={(e) => setInformation(e.target.value)}
              />

              {/* Personal details */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-1 border border-[#e7e7e7] rounded-2xl p-4">
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Your full name please
                </label>
                <Input
                  placeholder="Full name"
                  label="Full name"
                  className="w-full mb-4"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Contact Email
                </label>
                <Input
                  placeholder="Contact Email"
                  type="email"
                  label="Contact Email"
                  className="w-full mb-4"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Airline name
                </label>
                <Input
                  placeholder="Airline name"
                  className="w-full mb-4"
                  label="Airline name"
                  value={airlineName}
                  onChange={(e) => setAirlineName(e.target.value)}
                />
                <label className="text-sm font-[500] mb-2" htmlFor="">
                  Flight number
                </label>
                <Input
                  placeholder="Flight number"
                  className="w-full mb-4"
                  label="Flight number"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="border border-[#e7e7e7] rounded-2xl p-4">
                <h2 className="text-[18px] font-semibold text-black">
                  <span className="text-red-400">*</span>Service Request
                </h2>
                <p className="text-[12px] text-gray-400">
                  What service would you want to make reservation for?
                </p>
                {/* Date and Time */}
                <div className="mt-2 mb-2">
                  <label
                    htmlFor="pickup-point"
                    className="text-[12px] font-[500]"
                  >
                    Date and Time
                  </label>{" "}
                  <br />
                  <div className="flex items-center gap-2">
                    <DatePicker
                      placeholder="Select Date"
                      suffixIcon={<TbCalendarPlus />}
                      onChange={(value, dateString) => {
                        setDate(dateString);
                        console.log("Selected Date: ", value);
                        console.log("Formatted Selected Date: ", dateString);
                      }}
                      onOk={() => {}}
                    />
                    <TimePicker
                      use12Hours
                      format="hh:mm a"
                      showSecond={false}
                      placeholder="Select Time"
                      onChange={(value, dateString) => {
                        setTime(dateString);
                        console.log("Selected Time: ", value);
                        console.log("Formatted Selected Time: ", dateString);
                      }}
                      onOk={() => {}}
                    />
                  </div>
                </div>
                {/* Duration of the Trip */}
                <div className="col-span-1 md:col-span-2">
                  <h6 className="mt-2 mb-2 text-[12px] font-[500]">
                    The Duration Of The Trip
                  </h6>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                      <Radio
                        name="duration"
                        id="1-4"
                        value="1-4"
                        onChange={handleDurationChange}
                        checked={selectedDuration === "1-4"}
                      />
                      <label
                        htmlFor="1-4"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        1 - 4 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio
                        name="duration"
                        id="5-8"
                        value="5-8"
                        onChange={handleDurationChange}
                        checked={selectedDuration === "5-8"}
                      />
                      <label
                        htmlFor="5-8"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        5 - 8 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio
                        name="duration"
                        id="8plus"
                        value="8plus"
                        onChange={handleDurationChange}
                        checked={selectedDuration === "8plus"}
                      />
                      <label
                        htmlFor="8plus"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        More than 8 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio
                        name="duration"
                        id="duration-other"
                        value="duration-other"
                        onChange={handleDurationChange}
                        checked={selectedDuration === "duration-other"}
                      />
                      <label
                        htmlFor="duration-other"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        Other
                      </label>
                    </div>
                    {showDurationOtherInput && (
                      <Input
                        containerProps={{ className: "mt-2" }}
                        label="Other duration"
                        placeholder="Specify other duration"
                        required
                        value={durationOther}
                        onChange={(e) => setDurationOther(e.target.value)}
                      />
                    )}
                    <p className="text-[12px] text-gray-400">
                      What service would you want to make reservation for?
                    </p>
                  </div>
                </div>
                {/* Contact email */}
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="" className="text-[12px] font-semibold">
                    Contact Email
                  </label>
                  <Input
                    type="email"
                    label="Contact Email"
                    containerProps={{ className: "mt-2" }}
                    placeholder="Drop more Information"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="col-span-1 md:col-span-2 flex justify-end py-4 gap-4">
            <Button
              type="button"
              className="bg-transparent border font-[500] border-[#2956d3] text-sm text-[#2956d3] rounded-3xl w-[7rem] h-[40px]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`font-[500] text-sm text-white rounded-3xl w-[7rem] h-[40px] ${
                isFormValid
                  ? "bg-[#2956d3] hover:bg-[#2956d3de] active:bg-[#2956d3d3]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookALift;
