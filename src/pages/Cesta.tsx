import { useState } from "react";
import {
  useGetProdutos,
  usePostProdutos,
} from "../api/tanstackQuery/produtoRequests";
import Card from "../components/Cards/Card";
import { Produto } from "../types/produto";
import CardResumoPedido from "../components/Cards/CardResumoPedido";
import GifLoading from "../utils/loading.gif";
import { Item } from "../types/item";

const Cesta = () => {
  const { data: produtos, isLoading } = useGetProdutos();

  const [totalCard, setTotalCard] = useState<{ [key: number]: Item }>({});

  const handleTotalCardChange = (index: number, item: Item) => {
    setTotalCard((prevTotals) => ({
      ...prevTotals,
      [index]: item,
    }));
  };

  const postMutation = usePostProdutos();
  const handleSubmit = () => {
    postMutation.mutate(produtos, {
      onSuccess: (data) => {
        console.log("Pedido enviado com sucesso:", data);
      },
      onError: (error) => {
        console.error("Erro ao enviar pedido:", error);
      },
    });
    console.log("Total Card", totalCard);
  };

  if (isLoading) {
    return (
      <div className="max-w-full h-screen flex items-center">
        <img className="max-w-24 mx-auto" src={GifLoading} />
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col w-full  gap-2 mt-4">
      <p className="text-gray-700 text-4xl">Cesta</p>
      {produtos?.map((produto: Produto, index: number) => {
        const imageUrl = produto.imagem
          ? `data:${produto.imagem.contentType};base64,${produto.imagem.documento}`
          : "";

        return (
          <Card
            produto={produto}
            index={index}
            onTotalCardChange={handleTotalCardChange}
            key={produto.id}
            image={imageUrl}
          />
        );
      })}

      <CardResumoPedido onClickSubmit={handleSubmit} taxa={0} subTotal={0} />
    </div>
  );
};

export default Cesta;
