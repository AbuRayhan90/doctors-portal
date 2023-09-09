import allData from "../../../data";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="flex justify-center  py-8   px-10 mx-auto space-x-6 ">
      {allData.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
export default Cards;
