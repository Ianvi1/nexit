// src/components/layout/SearchModal.tsx
import React, { useState } from "react";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import { useSearch } from "../../../hooks/useSearch";

const SearchModal: React.FC = () => {
  const { isOpen, setIsOpen, address, setAddress } = useSearch();
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      setError("CEP inválido, digite novamente");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError("CEP não foi encontrado");
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch {
      setError("Erro ao buscar CEP, consulte novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <Input
          label="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Ex: 03323-120"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-lime-500 hover:bg-[#BFF747] cursor-pointer text-white font-medium py-2 px-4 rounded-md transition"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {address && (
        <div className="mt-4 flex flex-col gap-2">
          <Input label="Logradouro" value={address.logradouro} readOnly />
          <Input label="Complemento" value={address.complemento} readOnly />
          <Input label="Bairro" value={address.bairro} readOnly />
          <Input label="UF" value={address.uf} readOnly />
          <Input label="Estado" value={address.localidade} readOnly />
        </div>
      )}
    </Modal>
  );
};

export default SearchModal;
