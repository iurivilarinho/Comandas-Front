import { useQuery } from "@tanstack/react-query";
import httpRequest from "../axios/httpRequest";

const getProdutos = async (filter?: string) => {
  const { data } = await httpRequest.get(`/produtos?${filter ?? ""}`);
  return data;
};

export const useGetProdutos = (filter?: string) => {
  return useQuery({
    queryKey: ["produtos", filter],
    queryFn: () => getProdutos(filter),
  });
};
