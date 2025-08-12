import { createContext } from "react";

type AddressData = {
  logradouro: string;
  complemento: string;
  bairro: string;
  uf: string;
  localidade: string;
} | null;

export type SearchContextType = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  address: AddressData;
  setAddress: (v: AddressData) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);
