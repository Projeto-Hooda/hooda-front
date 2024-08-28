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

  function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  return (
    <div className='bg-white shadow-md rounded-lg px-4 gap-4 md:mb-6 md:px-0 xl:grid xl:grid-flow-col xl: '>

      <div className="relative h-32 w-full md:h-36 md:w-full xl:h-30 xl:w-40">
        <img src={item.imagem} className="h-full w-full object-cover rounded-md" alt={item.nome} />
      </div>

      <div className="ml-4 md:col-span-1 xl:ml-0 xl:items-center xl:flex">
        <p className="font-sans text-base text-center p-2 font-semibold md:text-xl lg:text-3xl md:flex md:justify-center 
        md:items-center md:mb-2 lg:py-4 xl:text-xl xl:justify-start  xl:w-[30vh] xl:font-medium ">{item.nome}</p>
      </div>

      <div className='flex justify-between p-1 md:col-span-1 xl:col-span-1  xl:p-0'>
        <div className="flex items-center justify-center md:pl-2 xl:flex xl:justify-start xl:p-0">
          <p className="font-sans text-lg font-normal text-slate-400 md:text-xl lg:text-3xl xl:text-xl xl:flex xl:justify-start  ">R$ {formatarPreco(item.preco)}</p>
        </div>
        <div className="flex items-center justify-center space-x-2  xl:w-[17vh]">
          <button
            className="text-white shadow-md rounded-lg"
            onClick={() => removerQuantidadeProduto(item.id)}
            disabled={item.quantidade <= 1}
          >
            <MinusIcon className="text-slate-600 hover:text-red-500 h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 xl:h-6 xl:w-6" />
          </button>
          <span className="font-sans text-slate-400 text-lg font-normal md:text-xl lg:px-3 lg:text-3xl xl:text-xl xl:px-1  ">{item.quantidade}</span>
          <button
            className=" text-white border-1 shadow-md rounded-lg"
            onClick={() => adicionarQuantidadeProduto(item.id)}
          >
            <PlusIcon className=" text-slate-600 hover:text-amber-500 h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 xl:h-6 xl:w-6" />
          </button>
        </div>
        <div className="flex items-center justify-center col-span-1">
          <p className="font-sans text-lg  font-medium text-slate-400 md:text-xl lg:text-3xl md:pr-2 xl:text-xl xl:pl-4 xl:w-[23vh]
           ">R$ {formatarPreco(total)}</p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center xl:p-0 ">
        <button
          className="w-full flex justify-center xl:shadow-md m-2 mx-10 mb-5 text-white font-bold rounded-lg md:mx-6 md:text-xl 
          lg:text-2xl lg:mt-8 lg:py-1 xl:px-0 xl:text-lg xl:mr-2 xl:flex xl:justify-center xl:m-0"
          onClick={() => removerProduto(item.id)}
        >
           <TrashIcon className=" text-slate-600 hover:text-red-400 h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8 xl:h-6 xl:w-6" />
        </button>
      </div>

    </div>
  );
}

export default CardCarrinho;
