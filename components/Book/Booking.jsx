"use client";
import React from "react";
import {
  Card,
  CardBody,
  Input,
  Radio,
  Button,
  Typography,
} from "@material-tailwind/react";
import { DatePicker, TimePicker } from "antd";
import { TbCalendarPlus, TbLocationFilled } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiRadioButtonFill } from "react-icons/ri";

const BookALift = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fffcf9] p-4">
      <Card className="w-[90%] md-[80%] mx-auto shadow-lg md:p-8 mt-8 border rounded-xl  border-[#e7e7e7]">
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-6 text-[24px] font-semibold"
          >
            Book A Lift
          </Typography>
          <form className="flex flex-col md:flex-row gap-4 border-b border[#555] pb-4">
            <div className="flex flex-col gap-4 w-full md:w-[50%]">
              {/* Service Request */}
              <div className="col-span-1 md:col-span-2 border border-[#e7e7e7] rounded-2xl p-4">
                <h6
                  variant="h6"
                  className="mb-4 text-[14px] text-black font-[600]"
                >
                  Service Request
                </h6>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Radio name="serviceRequest" id="pickup" />
                    <label
                      htmlFor="pickup"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Pick up to Airport
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio name="serviceRequest" id="dropoff" />
                    <label
                      htmlFor="dropoff"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Drop off from Airport
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio name="serviceRequest" id="chauffeur" />
                    <label
                      htmlFor="chauffeur"
                      className="ml-2 font-[500] text-[14px]"
                    >
                      Personal Chauffeur
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Radio name="serviceRequest" id="other" />
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
              </div>

              {/* Pick up/Drop out points */}
              <div className="col-span-1 border border-[#e7e7e7] rounded-2xl p-4">
                <div className="flex items-end gap-4">
                  <div className="bg-[#2956d3] rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                    <IoLocationOutline className=" text-white" />
                  </div>
                  <div className="w-full">
                    <Input variant="static" placeholder="Pick up point" />
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
                    />
                  </div>
                </div>
              </div>

              <Input placeholder="Drop more Information" label="Information" />
              {/* Personal details */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-1 border border-[#e7e7e7] rounded-2xl p-4">
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Your full name please
                </label>
                <Input
                  placeholder="Drop more information"
                  label="Full name"
                  className=" w-full mb-4"
                />
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Contact Email
                </label>
                <Input
                  placeholder="Drop more information"
                  type="email"
                  label="Contact Email"
                  className=" w-full mb-4"
                />
                <label className="text-sm mb-2 font-[500]" htmlFor="">
                  Airline name
                </label>
                <Input
                  placeholder="Drop more information"
                  className=" w-full mb-4"
                  label="Airline name"
                />
                <label className="text-sm font-[500] mb-2" htmlFor="">
                  Flight number
                </label>
                <Input
                  placeholder="Drop more information"
                  className=" w-full mb-4"
                  label="Flight number"
                />
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="border border-[#e7e7e7] rounded-2xl p-4">
                <h2 className="text-[18px] font-semibold">Service Request</h2>
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
                        console.log("Selected Time: ", value);
                        console.log("Formatted Selected Time: ", dateString);
                      }}
                      onOk={() => {}}
                    />
                    <TimePicker
                      showTime
                      type="time"
                      showSecond={false}
                      placeholder="Select Time"
                      onChange={(value, dateString) => {
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
                      <Radio name="duration" id="1-4" />
                      <label
                        htmlFor="1-4"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        1 - 4 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio name="duration" id="5-8" />
                      <label
                        htmlFor="5-8"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        5 - 8 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio name="duration" id="8plus" />
                      <label
                        htmlFor="8plus"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        More than 8 hours
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Radio name="duration" id="duration-other" />
                      <label
                        htmlFor="duration-other"
                        className="ml-2 font-[500] text-[14px]"
                      >
                        Other
                      </label>
                    </div>
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
                    placeholder="Drop more Infromation"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="col-span-1 md:col-span-2 flex justify-end py-4 gap-4">
            <Button className="bg-transparent border font-[500] border-[#2956d3] text-sm text-[#2956d3] rounded-3xl w-[7rem] h-[40px]">
              Cancel
            </Button>
            <Button className="bg-[#2956d3] font-[500] text-sm text-white rounded-3xl w-[7rem] h-[40px] hover:bg-[#2956d3de] active:bg-[#2956d3d3]">
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookALift;
