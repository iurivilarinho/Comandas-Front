import Button from "../Buttons/Buttons";
import Counter from "../Specificos/Contador";

interface CardProps {
    image: string;
    description: string;
    buttonText: string;
    productPrices: number;
    unitPriceProduct: number;

    onButtonClick: () => void;

}

const Card = ({ image, description, buttonText, productPrices, unitPriceProduct,onButtonClick }: CardProps) => {
    return (
        <div className="max-w-4xl w-full rounded overflow-hidden shadow-lg flex bg-white">
            <img className="w-2/5 object-cover" src={image} alt="Card" />
            <div className="px-6 py-4 w-4/5 flex flex-col justify-between">
                <div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 text-base">
                       R${unitPriceProduct}/UN
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 flex justify-end text-3xl">
                        R${productPrices}
                    </p>
                </div>

                <div className="mt-4">
                    <Counter />
                </div>
            </div>
        </div>
    );
};
export default Card;
