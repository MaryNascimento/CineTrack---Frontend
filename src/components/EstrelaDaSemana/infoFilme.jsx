import { useState, useEffect } from "react";
import Filme from "../../assets/exemplo-filme.png"; // Importe a imagem do filme
import IdadeMinima from "../../assets/idade-minima.png"; // Importe a imagem de idade mínima

export const InfosFilme = () => {
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando uma requisição de API
    setTimeout(() => {
      try {
        const filmeSimulado = {
          imagem: {Filme}, // Coloque uma URL de imagem real ou de placeholder
          titulo: "Coringa: Delírio A Dois",
          descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate atque odit suscipit nam deserunt corporis incidunt itaque dicta unde facilis sint, quod quis dolorum ullam nemo eos, placeat facere.",
          duracao: "2h18",
          genero: "Drama, Suspense",
          idadeMinima: {IdadeMinima}, // Substitua por uma imagem de idade mínima ou placeholder
          direcao: "Todd Phillips",
          distribuidor: "Warner Bros"
        };
        setFilme(filmeSimulado);
      } catch {
        setError("Erro ao simular a busca de dados");
      } finally {
        setLoading(false);
      }
    }, 1); // Simula um atraso de 1 segundo na requisição
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="flex gap-12">
      <img className="" src={filme?.imagem || "URL_PADRAO_IMAGEM"} alt={filme?.titulo || "Filme"} />
      <div>
        <h1 className="text-left text-xl font-bold">
          {filme?.titulo || "Título do Filme"}
        </h1>
        <p className="text-left font-light break-all">
          {filme?.descricao || "Descrição não disponível."}
        </p>
        <div className="mt-4 items-center flex gap-4">
          <img src={filme?.idadeMinima || "URL_PADRAO_IDADE"} alt="Idade mínima" />
          <p>{filme?.duracao || "Duração desconhecida"} | {filme?.genero || "Gênero desconhecido"}</p>
          <p>
            <span className="font-bold">Direção: </span>{filme?.direcao || "Diretor desconhecido"}
          </p>
          <p>
            <span className="font-bold">Distribuidor:</span> {filme?.distribuidor || "Distribuidor desconhecido"}
          </p>
        </div>
      </div>
    </div>
  );
};
