import { useEffect, useState } from "react";
import Button from "../Buttons/Buttons";
import Counter from "../Specific/Contador";
import { useTotal } from "../../context/totalContext";

interface CardProps {
  image: string;
  description: string;
  unitPriceProduct: number;
  onChangeTotal: (valorTotal: number) => void;
}

const Card = ({
  image,
  description,
  unitPriceProduct,
  onChangeTotal,
}: CardProps) => {
  const [totalCard, setTotalCard] = useState(0);

  const { setTotal, total } = useTotal();


  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl 2xl:max-w-4xl rounded-3xl overflow-hidden shadow-lg flex bg-white h-fit ">
      <div className="w-2/5 flex items-center justify-center overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="Card 1" />
      </div>
      <div className="px-6 py-4 w-4/5 flex flex-col justify-between">
        <div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base">R${unitPriceProduct}/UN</p>
          <p className="text-gray-700 flex justify-end text-3x">R${totalCard}</p>
        </div>

        <div className="mt-4">
          <Counter
            onClickPlus={(count) => {
              const newTotalCard = count * unitPriceProduct
              setTotalCard(newTotalCard)
              const newTotal = total + unitPriceProduct
              setTotal(newTotal)
            }}
            onClickMinus={(count) => {
              const newTotalCard = count * unitPriceProduct
              setTotalCard(newTotalCard)
              const newTotal = total - unitPriceProduct
              setTotal(newTotal)
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
