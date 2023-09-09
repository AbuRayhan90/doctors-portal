/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { DayPicker } from "react-day-picker";
import AppoinmentImage from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-appointment-bg">
      <div className="container mx-auto">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <img src={AppoinmentImage} className="max-w-sm rounded-lg " />
          <div className="">
            <div className="text-black shadow-2xl">
              <DayPicker mode="single" onSelect={setDate} selected={date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
