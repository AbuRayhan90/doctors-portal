/* eslint-disable react/jsx-key */
import allData from "../../../data";
import qoute from "../../assets/icons/quote.svg";
const Testimonial = () => {
  return (
    <div className="container mx-auto my-10">
      <div
        className="flex justify-between mb-18
      "
      >
        <div className="">
          <h2 className="text-primary text-xl">Testimonial</h2>
          <h1 className="text-3xl ">What Our Patients Says</h1>
        </div>
        <div className="">
          <img className="h-30 w-[8rem]" src={qoute} alt="" />
        </div>
      </div>
      <div className="flex space-x-4">
        {allData.testimonial.map((item) => (
          <div key={item.id} className="shadow-xl p-4 bg-base-100">
            <p>{item.description}</p>
            <div className="flex mt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-white ring-offset-2">
                  <img src={item.image} />
                </div>
              </div>
              <div className="ml-4 mt-3">
                <p className="font-semibold">{item.name}</p>
                <span>{item.rank}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
