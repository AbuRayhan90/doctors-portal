/* eslint-disable react/no-unescaped-entities */
import allData from "../../../data";
import Service from "./Service";
import TreatmentImg from "../../assets/images/treatment.png";
import Button from "../../components/Button";
const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h3 className="text-xl text-primary">OUR SERVICES</h3>
        <h1 className="text-3xl text-secondary">Services We Provide</h1>
      </div>
      <div className="flex justify-center  py-8   px-10 mx-auto space-x-6">
        {allData.services.map((data) => (
          <Service key={data.id} data={data} />
        ))}
      </div>
      <div className="hero-content grid grid-cols-4 gap-6 py-10">
        <div className="ml-auto mr-10  w-3/6  col-span-2">
          <img
            src={TreatmentImg}
            className="h-[25rem] rounded-lg shadow-2xl "
          />
        </div>
        <div className=" col-span-2 w-4/6 ">
          <h1 className="text-5xl font-bold ">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6  ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
