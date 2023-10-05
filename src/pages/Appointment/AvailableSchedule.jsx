/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SingleService from "./SingleService";
import BookingModal from "./BookingModal";
const AvailableSchedule = ({ format, date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-center pb-4 text-xl text-primary">
        Available Schedule on{" "}
        <span className="font-semibold ">{format(date, "PP")}</span>.
      </h1>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <SingleService
            setTreatment={setTreatment}
            service={service}
            key={service._id}
          ></SingleService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableSchedule;
