import { useEffect, useState } from "react";
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

  const [itens, setItens] = useState<Item[]>([]);

  const [totalCesta, setTotalCesta] = useState(0)

  useEffect(() => {
    const calcularTotal = () => {

      const soma = itens.reduce((acc, item) => {

        return acc + (item.quantidade * (item.produto.valorUnitario ?? 0));

      }, 0);

      setTotalCesta(soma);

    };
    calcularTotal();
  }, [itens]);

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
  };

  if (isLoading) {
    return (
      <div className="max-w-full h-screen flex items-center">
        <img className="max-w-24 mx-auto" src={GifLoading} />
      </div>
    );
  }

  const adicionarItem = (count: number, produto: Produto) => {
    setItens((prevItens) => {
      const itemIndex = prevItens.findIndex((item) => item.produto.id === produto.id);
      if (itemIndex >= 0) {
        // Item já está na lista, atualiza a quantidade
        const updatedItens = [...prevItens];
        updatedItens[itemIndex] = {
          ...updatedItens[itemIndex],
          quantidade: count,
        };
        return updatedItens;
      } else {
        // Novo item, adiciona à lista
        return [
          ...prevItens,
          {
            produto,
            quantidade: count,
          },
        ];
      }
    });
  };



  return (
    <div className="flex items-center flex-col w-full  gap-2 mt-4">
      <p className="text-gray-700 text-4xl">Cesta</p>
      {produtos?.map((produto: Produto, index: number) => {
        const imageUrl = produto.imagem
          ? `data:${produto.imagem.contentType};base64,${produto.imagem.documento}`
          : "";

        return (
          <Card
            onHandleClick={(count, produto) => { adicionarItem(count, produto) }}

            produto={produto}
            key={produto.id}
            image={imageUrl}
          />
        );
      })}

      <CardResumoPedido
    
        total={totalCesta}
        onClickSubmit={handleSubmit} taxa={0} subTotal={0} />
    </div>
  );
};

export default Cesta;
