import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState<{
    logradouro: string;
    complemento: string;
    bairro: string;
    uf: string;
    localidade: string;
  } | null>(null);

  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen, address, setAddress }}>
      {children}
    </SearchContext.Provider>
  );
};
