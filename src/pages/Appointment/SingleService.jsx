/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const SingleService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  const onBooking = () => {
    setTreatment(service);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{name}</h2>
          <p>
            {slots.length < 1 ? (
              <span className="text-red-500">Try Another Date</span>
            ) : (
              "Avaiable Space " + slots.length
            )}
          </p>
          <p>{slots[0]}</p>
          <div className="card-actions">
            <label
              htmlFor="my_modal_6"
              onClick={onBooking}
              disabled={slots.length === 0}
              className="btn btn-primary text-white "
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
