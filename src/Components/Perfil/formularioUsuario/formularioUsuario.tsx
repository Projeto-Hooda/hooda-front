import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/ToastAlerta';
import UsuarioLogin from '../../../model/UsuarioLogin';

interface FormularioUsuarioProps {
  userId: number;
  closeModal: () => void;
}

const FormularioUsuario: React.FC<FormularioUsuarioProps> = ({ userId, closeModal }) => {
  const [usuario, setUsuario] = useState<UsuarioLogin>({} as UsuarioLogin);
  const navigate = useNavigate();
  const { usuario: usuarioContext, handleLogout } = useContext(AuthContext);
  const token = usuarioContext.token;
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if (userId) {
      buscarPorId(userId);
    }
  }, [userId]);

  async function buscarPorId(id: number) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      toastAlerta('Erro ao buscar usuário', 'erro');
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'senha') {
      setSenha(e.target.value);
    }
  }

  async function gerarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await atualizar(`/usuarios/atualizar`, usuario, setUsuario, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta('Usuário atualizado com sucesso', 'sucesso');
      closeModal(); // Fecha o modal após o sucesso
      navigate('/perfils');
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      } else {
        toastAlerta('Erro ao atualizar o Usuário', 'erro');
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className=" w-[40rem] lg:w-[50rem] xl:w-full flex flex-col justify-start md:items-center mx-auto border bg-white rounded-lg">
      <h1 className="text-4xl text-center my-8 font-Montserrat">
        Editar Perfil
      </h1>

      <form className="w-[35vh] md:items-center lg:w-[50vh] xl:w-full flex flex-col gap-4 " onSubmit={gerarNovoUsuario}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="usuario">E-mail de Usuário</label>
          <input
            type="text"
            placeholder="Nome de Usuário"
            name="usuario"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.usuario}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            name="senha"
            className="border-2 border-slate-700 rounded p-2"
            value={senha}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto URL (opcional)</label>
          <input
            type="text"
            placeholder="URL da foto"
            name="foto"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
        </div>

        <div className='flex justify-evenly p-2 mb-3'>
          <button
            className="rounded text-slate-100 bg-hoodaLaranja hover:bg-amber-400 w-[15vh] py-2 mx-1 block"
            type="submit"
          >
            Salvar Alterações
          </button>
          {/* <button
            className="rounded text-slate-100 bg-red-500 hover:bg-red-400 w-1/2 py-2 mx-1 block"
            type="button"
            onClick={closeModal}
          >
            Cancelar
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default FormularioUsuario;
