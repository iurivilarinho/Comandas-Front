import { Documento } from "./documento";

export interface Produto {
  id?: number;
  imagem?: Documento;
  descricao?: string;
  nome?: string;
  valorUnitario?: number;
}
