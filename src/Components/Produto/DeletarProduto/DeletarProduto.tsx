import { useContext, useEffect, useState } from 'react'
import { toastAlerta } from '../../../utils/ToastAlerta'
import { buscar, deletar } from '../../../services/Service'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../model/Produto'

const DeleteProduto = () => {

  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deleteProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o produto', 'erro')
    }

    retornar()
  }
  return (
<>
    <div className='flex justify-center mt-20 mx-2'>
      <div className="relative flex flex-col justify-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h3 className='text-lg font-bold text-center uppercase my-3 font-sans'>Deletar produto:</h3>
          <p className='text-xl flex justify-center my-3 font-semibold font-sans'>{produto.nome}</p>
          <p className='flex justify-center my-2 font-sans'>({produto.descricao})</p>
        </div>

        <p className='flex justify-center m-1 font-semibold font-sans'>Tem certeza que você quer deletar {produto.nome}?</p>
        <div className="p-6 pt-0 flex justify-evenly">

          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-hoodaLaranja text-white shadow-md hover:shadow-lg hover:bg-amber-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4"
            type="button" onClick={deleteProduto}>
            Sim
          </button>

          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md hover:shadow-lg hover:bg-red-400 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none m-4 "
            type="button" onClick={retornar}>
            Não
          </button>


        </div>
      </div>
    </div>
    </>
  )
}
export default DeleteProduto