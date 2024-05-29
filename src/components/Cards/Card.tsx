import { useState } from "react";
import Counter from "../Specific/Contador";
import { useTotal } from "../../context/totalContext";
import { Produto } from "../../types/produto";
import { Item } from "../../types/item";

interface CardProps {
  image: string;
  produto: Produto;
  onHandleClick: (count: number, produto: Produto) => void;
}

const Card = ({ onHandleClick, image, produto }: CardProps) => {
  const [totalCard, setTotalCard] = useState(0);


  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl 2xl:max-w-4xl rounded-3xl overflow-hidden shadow-lg flex bg-white h-fit ">
      <div className="w-2/5 flex items-center justify-center overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="Card 1" />
      </div>
      <div className="px-6 py-4 w-4/5 flex flex-col justify-between">
        <div>
          <p className="text-gray-700 text-base">{produto.descricao}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base">
            R${produto.valorUnitario}/UN
          </p>
          <p className="text-gray-700 flex justify-end text-3x">
            R${totalCard}
          </p>
        </div>

        <div className="mt-4">
          <Counter
            onClickPlus={(count) => {

              onHandleClick(count, produto ?? 0)
              setTotalCard(count * (produto.valorUnitario ?? 0))

            }}

            onClickMinus={(count) => {

              onHandleClick(count, produto ?? 0)
              setTotalCard(count * (produto.valorUnitario ?? 0))

            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
