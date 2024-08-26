import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from "../../../model/Produto";

interface CardProdutosProps {
  item: Produto;
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function CardCarrinho({ item }: CardProdutosProps) {
  const { adicionarQuantidadeProduto, removerQuantidadeProduto, removerProduto } = useContext(AuthContext);

  const total = item.quantidade * item.preco
  return (
    <div className='bg-white shadow-md rounded-lg my-4 p-1 gap-4'>
     
        <div className="relative h-32 w-full md:h-48 md:w-full md:col-span-1 ">
          <img src={item.imagem} className="h-full w-full object-cover rounded-md" alt={item.nome} />
        </div>

        <div className="ml-4 md:col-span-1">
          <p className="text-base text-center p-2 text-amber-400 font-semibold md:text-2xl lg:text-2xl md:flex md:justify-center md:items-center">{item.nome}</p>
        </div>

      <div className='flex justify-between p-1 md:col-span-1'>
      <div className="flex items-center justify-start md:justify-center">
        <p className="text-lg font-semibold text-gray-900 md:text-2xl">R$ {item.preco.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white rounded-full"
          onClick={() => removerQuantidadeProduto(item.id)}
          disabled={item.quantidade <= 1}
        >
          <MinusIcon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
        <span className="text-lg font-medium md:text-2xl">{item.quantidade}</span>
        <button
          className="bg-amber-400 hover:bg-amber-600 text-white rounded-full"
          onClick={() => adicionarQuantidadeProduto(item.id)}
        >
          <PlusIcon className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <p className="text-lg font-medium text-gray-900 md:text-2xl">R$ {total.toFixed(2)}</p>
      </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <button
          className="w-full bg-red-500 hover:bg-red-700 my-2 text-white font-bold rounded-full md:text-2xl"
          onClick={() => removerProduto(item.id)}
        >
          Remover
        </button>
      </div>

    </div>
  );
}

export default CardCarrinho;
