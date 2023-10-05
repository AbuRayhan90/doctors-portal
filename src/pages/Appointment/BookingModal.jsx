import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
/* eslint-disable react/prop-types */
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [LoginUser] = useAuthState(auth);

  const onSubmitBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formattedDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot: slot,
      email: LoginUser.email,
      paitentName: LoginUser.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:3000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.succsess) {
          toast(`succsessfully submitted ${formattedDate} at ${slot}`);
        } else {
          toast.error(`Already added on this time  ${data.booking?.time}`);
        }
        console.log(data);
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-xl text-primary">
            Booking For : {name}
          </h3>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle btn-ghost  absolute right-4 top-4 text-red-500"
            >
              X
            </label>
          </div>
          <form onSubmit={onSubmitBooking} className="mb-6">
            <input
              type="text"
              name="date"
              className="w-full my-3  block px-6 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              disabled
              placeholder="Your Name"
              value={format(date, "PP")}
            />

            <select
              name="slot"
              className="select select-bordered w-full text-black"
            >
              {slots.map((slot) => (
                <option key={Math.random()} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="email"
              type="email"
              className="block w-full mt-4 px-6 py-2 border-gray-300 rounded-md shadow-sm text-black"
              value={LoginUser.email}
              disabled
            />
            <input
              name="name"
              type="text"
              className="block w-full mt-4 px-6 py-2 border-gray-300 rounded-md shadow-sm text-black"
              value={LoginUser.displayName}
              disabled
            />
            <input
              name="phone"
              type="number"
              className="block w-full mt-4 px-6 py-2 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 ocus:ring-opacity-50 input input-bordered"
              placeholder="Phone"
              required
            />

            <button
              className="btn btn-primary my-6 text-center text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
