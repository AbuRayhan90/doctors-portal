/* eslint-disable react/prop-types */
const AvailableAppointment = ({ format, date }) => {
  return (
    <div className="container mx-auto my-6 py-8">
      <div className="text-center pb-4">
        <h1 className="text-xl text-primary">
          Available Services on{" "}
          <span className="font-semibold ">{format(date, "PP")}</span>.
        </h1>
        <p>Please select a service.</p>
      </div>
      <div className="grid grid-cols-3  col-span-3 text-center gap-6 ">
        <div className="card shadow-xl py-8 px-6 bg-base-100 ">
          <button className="text-primary font-semibold">
            Teeth Orthodontics
          </button>
        </div>
        <div className="card shadow-xl py-8 px-6 bg-base-100">
          <button className="text-primary font-semibold">
            Cosmetic Dentistry
          </button>
        </div>
        <div className="card shadow-xl py-8 px-6 bg-base-100">
          <button className="text-primary font-semibold">Teeth Cleaning</button>
        </div>
        <div className="card shadow-xl py-8 px-6 bg-base-100">
          <button className="text-primary font-semibold">
            Cavity Protection
          </button>
        </div>
        <div className="card shadow-xl py-8 px-6 bg-base-100">
          <button className="text-primary font-semibold">
            Pediatric Dental
          </button>
        </div>
        <div className="card shadow-xl py-8 px-6 bg-base-100">
          <button className="text-primary font-semibold">Oral Surgery</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
