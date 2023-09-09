const card = ({ card }) => {
  return (
    <div
      className={`flex items-center card card-side  shadow-xl px-4 w-2/6 text-white ${
        card.id === 2 ? " bg-secondary" : " bg-primary "
      }`}
    >
      <div className="">
        <img src={card.image} alt="doctors" />
      </div>
      <div className="card-body ">
        <h2 className="card-title text-white">{card.name}</h2>
        <p className="text-white">{card.description}</p>
      </div>
    </div>
  );
};
export default card;
