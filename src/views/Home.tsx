import { useState } from "react";
import { useQuery } from "react-query";

import { fetchPokemon } from "../http";

const buttonClassName =
  "border-2 border-gray-600 p-2 cursor-pointer rounded-lg hover:bg-gray-600 transition-all min-w-[46px] disabled:opacity-30";

export default function Home() {
  const [currentOffset, setCurrentOffset] = useState(0);

  const { data, isLoading, isError } = useQuery(
    ["fetchPokemon", currentOffset],
    () => fetchPokemon(currentOffset),
  );

  const changePage = (forward: boolean = false) => {
    if (forward) setCurrentOffset(currentOffset + 100);
    else setCurrentOffset(currentOffset - 100);
  };

  if (isLoading) return <div>Estoy cargando...</div>;

  if (isError) throw new Error("Error al obtener la lista de Pokémon.");

  return (
    <section>
      <div className="w-full flex gap-4 flex-wrap justify-center">
        {data?.data.results.map((pokemon) => {
          return (
            <div
              key={pokemon.name}
              className="border-2 border-gray-600 p-4 capitalize cursor-pointer hover:bg-gray-600 transition-all"
            >
              {pokemon.name}
            </div>
          );
        })}
      </div>

      <div className="w-full py-4 flex gap-4 justify-center mt-10">
        <button
          className={buttonClassName}
          onClick={() => changePage()}
          disabled={!data?.data.previous}
        >
          Anterior
        </button>

        <button
          className={buttonClassName}
          onClick={() => changePage(true)}
          disabled={!data?.data.next}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}
