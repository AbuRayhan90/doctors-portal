import { format } from "date-fns";

/* eslint-disable react/prop-types */
const Modal = ({ treatment, date, setTreatment }) => {
  const { id, name, slots } = treatment;

  const onSubmitBooking = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log({ date, slot, email, phone, id });
    setTreatment(null);
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Booking For : {name}</h3>

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
              className="block w-full mt-4 px-6 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 ocus:ring-opacity-50 input input-bordered"
              placeholder="Your Email"
            />
            <input
              name="phone"
              type="phone"
              className="block w-full mt-4 px-6 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 ocus:ring-opacity-50 input input-bordered"
              placeholder="Phone"
            />

            <button
              className="btn btn-primary my-6 text-center text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
