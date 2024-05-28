import { Key, useEffect, useState } from "react";
import { useGetProdutos } from "../api/tanstackQuery/produtoRequests";
import Card from "../components/Cards/Card";
import { Produto } from "../types/produto";
import CardResumoPedido from "../components/Cards/CardResumoPedido";

const Cesta = () => {
  const { data } = useGetProdutos();

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    console.log("Subtotal: ", subtotal);
  }, [subtotal]);

  return (
    <div className="flex items-center flex-col w-full  gap-2 mt-4">
      <p className="text-gray-700 text-4xl">Cesta</p>
      {data?.map((produto: Produto, index: number) => {
        const imageUrl = produto.imagem
          ? `data:${produto.imagem.contentType};base64,${produto.imagem.documento}`
          : "";

        return (
          <Card
            onChangeTotal={(total) => {
              setSubtotal((prev) => {
                console.log(`prev-${index}`, prev);
                console.log(`total-${index}`, total);
                return prev + total;
              });
            }}
            key={produto.id}
            image={imageUrl}
            description={produto.descricao ?? ""}
            unitPriceProduct={produto.valorUnitario ?? 0}
          />
        );
      })}

      <CardResumoPedido taxa={0} subTotal={0} />
    </div>
  );
};

export default Cesta;
