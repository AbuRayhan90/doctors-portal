import chair from "../../assets/images/chair.png";
import Button from "../../components/Button";
const Heroarea = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-Bg-Chair">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="w-3/6 h-auto rounded-lg shadow-2xl" />
          <div className="w-3/6">
            <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
