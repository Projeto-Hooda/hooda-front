import { useContext } from "react";
import { Link } from "react-router-dom";
import Produto from "../../../model/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../utils/ToastAlerta";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { usuario, adicionarProduto } = useContext(AuthContext);

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  let opcoes;

  let opcoesUsuario = (
    <>
      <div className="relative h-40">
        <img
          src={produto.imagem}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-4 h-[12rem]">
        <div className="mb-2 flex items-center justify-between text-base md:text-xl">
          <p className="text-hoodaLaranja font-medium">{produto.nome}</p>
        </div>
        <div className="mb-2 flex items-center justify-between text-md">
          <p className="text-hoodaLaranja font-medium">
            R$ {formatarPreco(produto.preco)}
          </p>
        </div>
        <p className="text-gray-600 text-sm font-normal opacity-75">
          Descrição: {produto.descricao}
        </p>
        <p className="text-gray-600 text-sm font-normal opacity-75">
          Categoria: {produto.categoria?.nome}
        </p>
        <p className="text-gray-600 text-sm font-normal opacity-75">
          Estoque: {produto.estoque}
        </p>
        <p className="text-gray-600 text-sm font-normal opacity-75">
          Avaliação: {produto.avaliacao}
        </p>
      </div>
      <div className="flex justify-between p-4 border-t border-gray-200 ">
        <div className="w-1/2 text-white mr-2 bg-hoodaLaranja rounded-lg shadow hover:bg-amber-400 flex items-center justify-center py-2">
          <Link to={`/editarProduto/${produto.id}`}>
            <button>Editar</button>
          </Link>
        </div>
        <div className="w-1/2 text-white bg-red-400 rounded-lg shadow hover:bg-red-700 flex items-center justify-center py-2">
          <Link to={`/deleteProduto/${produto.id}`}>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </>
  );

  if (usuario.token === "" || usuario.id !== produto.usuario?.id) {
    opcoes = (
      <>
        <div className="relative h-40">
          <img
            src={produto.imagem}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="p-4 h-[12rem]">
          <div className="xl:mb-2 flex items-center justify-between lg:text-xl">
            <p className="text-hoodaLaranja font-medium">{produto.nome}</p>
          </div>
          <div className="xl:mb-2 flex items-center justify-between text-md">
            <p className="text-hoodaLaranja font-medium">
              R$ {formatarPreco(produto.preco)}
            </p>
          </div>
          <p className="text-gray-600 text-sm font-normal opacity-75">
            Descrição: {produto.descricao}
          </p>

          <p className="text-gray-600 text-sm font-normal h-[2rem] opacity-75">
            Avaliação: {produto.avaliacao}
          </p>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => {
              adicionarProduto(produto);
              toastAlerta("Produto adicionado ao carrinho!", "sucesso");
            }}
            className="w-full bg-hoodaLaranja text-white py-2 px-4 rounded-lg shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="w-[18rem] md:w-[12rem] lg:w-[15rem] xl:w-[17rem] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-2 mx-[2rem]">
      {usuario.token !== "" && usuario.id === produto.usuario?.id
        ? opcoesUsuario
        : opcoes}
    </div>
  );
}

export default CardProduto;
