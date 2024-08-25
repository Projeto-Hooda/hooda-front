import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

import  Produto  from "../../../model/Produto"

interface CardProdutosProps {
    item: Produto
}

function CardCarrinho({ item }: CardProdutosProps) {
    const { adicionarProduto, removerProduto } = useContext(AuthContext)

    return (
        <div className='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md'>
        <div className="relative h-40">
          <img src={item.imagem} className="h-full w-full object-cover" alt="" />

        </div>
        <div className='p-4'>
          <div className="mb-2 flex items-center justify-between text-md md:text-xl">
            <p className="text-hoodaLaranja font-medium">{item.nome}</p>
          </div>
          <div className="mb-2 flex items-center justify-between text-md">
            <p className="text-hoodaLaranja font-medium">R$ {item.preco.toFixed(2)}</p>
          </div>
          <p className="text-gray-600 text-sm font-normal opacity-75">
            Descrição: {item.descricao}
          </p>

          <p className="text-gray-600 text-sm font-normal opacity-75">
            Avaliação: {item.avaliacao}
          </p>

          <p className="text-gray-600 text-sm font-normal opacity-75">
            Quantidade: {item.quantidade}
          </p>

          <p className="text-gray-600 text-sm font-normal opacity-75">
            Subtotal: {item.quantidade * item.preco}
          </p>

        </div>

        <div className="p-4 border-t border-gray-200 flex justify-evenly">
        <button className="bg-hoodaLaranja hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => adicionarProduto(item)}>Adicionar</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => removerProduto(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CardCarrinho