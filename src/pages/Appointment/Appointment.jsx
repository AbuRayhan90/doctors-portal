import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import { useState } from "react";
import { format } from "date-fns";
import AvailableSchedule from "./AvailableSchedule";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment format={format} date={date} />
      <AvailableSchedule format={format} date={date} />
    </div>
  );
};

export default Appointment;
