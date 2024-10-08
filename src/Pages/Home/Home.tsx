import { useEffect, useState } from "react";
import ListProduto from "../../Components/Produto/ListProduto/ListProduto";
import Categoria from "../../model/Categoria";
import { buscar } from "../../services/Service";
import { Link } from "react-router-dom";
import Carrosel from "../../Components/Carrosel/Carrosel";
import MenuCategoria from "../../Components/MenuCategoria/MenuCategoria";

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="grid md:grid-cols-12">
      <div className="min-h-[0vh] max-h-[60vh] max-md:hidden pb-8 flex items-center col-span-12 p-0 m-0">
        <Carrosel />
      </div>
      <div className="flex flex-col lg:flex-row lg:col-span-2 lg:justify-end">
        <div className="mt-2 p-1 w-[100vw] h-10 lg:hidden">
          <MenuCategoria />
        </div>

        <aside
          className={`max-lg:hidden md:flex-col m-4 w-[100vw] xl:w-[180px] md:h-[500px] rounded-md bg-amber-500 font-Montserrat text-white p-4 shadow-lg transition-transform lg:translate-x-0 lg:w-64`}
        >
          <h2 className="text-base max-lg:hidden xl:text-2xl border-b-2 flex justify-center font-semibold mb-4">
            Categorias
          </h2>
          <ul className="space-y-2 grid grid-cols-4 md:flex-col md:grid-cols-1">
            {categorias.map((categoria) => (
              <li
                key={categoria.id}
                className="p-2 rounded-lg hover:bg-gray-600 text-xs text-center md:text-base md:text-start"
              >
                <Link to={`/categorias/${categoria.id}`} className="block">
                  {categoria.nome}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="md:col-span-9 flex justify-center">
        <div>
          <div className="flex lg:flex-row lg:flex-wrap justify-evenly py-0 px-0">
            <ListProduto />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
