/* eslint-disable react/prop-types */
const Service = ({ data }) => {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data.image} alt="sevices" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
