/* eslint-disable react/no-unescaped-entities */
import Doctor from "../../assets/images/doctor-small.png";
import Button from "../../components/Button";
const AppointmentSection = () => {
  return (
    <div>
      <div className="my-[5rem]">
        <div className="bg-doctors-bg flex justify-center items-center ">
          <div className="flex-1 ">
            <img src={Doctor} className=" mt-[-120px]" />
          </div>
          <div className="flex-1 px-10 text-justify">
            <h1 className="text-5xl font-bold text-white">Appointment</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
