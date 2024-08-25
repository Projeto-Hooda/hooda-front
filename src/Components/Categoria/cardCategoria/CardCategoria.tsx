import { Link } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col bg-white shadow-lg hover:shadow-xl rounded-lg border border-gray-200 w-full max-w-xs md:max-w-sm h-auto mb-4 mx-auto transition-transform transform hover:scale-105">
      <div className="p-4 flex flex-col">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 truncate">{categoria.nome}</h3>
        <p className="text-gray-600 text-xs md:text-sm flex-1 truncate">{categoria.descricao}</p>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex flex-col md:flex-row p-2">
        <Link to={`/editarCategoria/${categoria.id}`} className="w-full mb-2 md:mb-0 md:mr-1">
          <button
            className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-white text-xs md:text-sm font-semibold py-1 px-2 rounded transition duration-150 ease-in-out w-full"
            type="button"
          >
            <FaEdit className="mr-1" />
            Editar
          </button>
        </Link>
        <Link to={`/delete/${categoria.id}`} className="w-full md:ml-1">
          <button
            className="flex items-center bg-red-600 hover:bg-red-500 text-white text-xs md:text-sm font-semibold py-1 px-2 rounded transition duration-150 ease-in-out w-full"
            type="button"
          >
            <FaTrashAlt className="mr-1" />
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
