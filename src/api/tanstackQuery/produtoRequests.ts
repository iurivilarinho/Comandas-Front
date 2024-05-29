import { useMutation, useQuery } from "@tanstack/react-query";
import httpRequest from "../axios/httpRequest";
import { Produto } from "../../types/produto";

const getProdutos = async (filter?: string) => {
  const { data } = await httpRequest.get(`/produtos?${filter ?? ""}`);
  return data;
};

const postProdutos = async (produtos: Produto[]) => {
  const { data } = await httpRequest.post("/produtos", { produtos });
  return data;
};

export const useGetProdutos = (filter?: string) => {
  return useQuery({
    queryKey: ["produtos", filter],
    queryFn: () => getProdutos(filter),
  });
};

export const usePostProdutos = () => {
  return useMutation({ mutationFn: postProdutos });
};
