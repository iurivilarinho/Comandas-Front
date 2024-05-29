import { useTotal } from "../../context/totalContext";

interface CardResumoPedidoProps {
  taxa: number;
  total: number;
  subTotal: number;
  numeroMesa?: string;
  onClickSubmit: () => void;
}

const CardResumoPedido = ({
  taxa,
  subTotal,
  ...props
}: CardResumoPedidoProps) => {


  return (
    <div className="w-full max-w-sm mx-auto bg-slate-300 rounded-lg shadow-md p-6">
      <div className="bg-red-500 rounded-t-lg p-3">
        <p className="text-center text-white font-bold">
          Resumo mesa {props.numeroMesa}
        </p>
      </div>
      <div className="my-4 flex justify-between">
        <p className="text-lg">Subtotal:</p>
        <p className="text-lg">R${props.total.toFixed(2)}</p>
      </div>
      <div className="my-4 flex justify-between">
        <p className="text-lg">Taxa:</p>
        <p className="text-lg">R${taxa.toFixed(2)}</p>
      </div>
      <div className="my-4 flex justify-between font-bold">
        <p className="text-lg">Total:</p>
        <p className="text-lg">R${(props.total + taxa).toFixed(2)}</p>
      </div>
      <button
        className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:bg-green-950"
        disabled={props.total === 0}
        onClick={() => {
          props.onClickSubmit();
        }}
      >
        Confirmar
      </button>
    </div>
  );
};

export default CardResumoPedido;
