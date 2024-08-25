import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../model/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { Link } from 'react-router-dom';
import { toastAlerta } from '../../utils/ToastAlerta';

function Register() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro');
      }
    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-6 flex flex-col">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <img src="https://i.imgur.com/bLUnK48.png" alt="Hooda Logo" className="w-20 h-auto" />
        </div>
        
        <h3 className="text-4xl font-semibold font-Docker-One pt-5 text-[#feae04] mb-6 text-center mt-16">HOODA</h3>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Venha mudar o mundo com a gente.
        </p>

        <form onSubmit={cadastrarNovoUsuario}>
          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Nome</label>
            <input
              name="nome"
              type="text"
              required
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-[#feae04] px-3 py-2 outline-none"
              placeholder="Nome"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Email</label>
            <input
              name="usuario"
              type="email"
              required
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-[#feae04] px-3 py-2 outline-none"
              placeholder="Email"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Foto (URL)</label>
            <input
              name="foto"
              type="text"
              required
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-[#feae04] px-3 py-2 outline-none"
              placeholder="URL da Foto"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Senha</label>
            <input
              name="senha"
              type="password"
              required
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-[#feae04] px-3 py-2 outline-none"
              placeholder="Senha"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Confirmar Senha</label>
            <input
              name="confirmarSenha"
              type="password"
              required
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-[#feae04] px-3 py-2 outline-none"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-semibold rounded-full text-white bg-[#feae04] hover:bg-[#f9a308] focus:outline-none transition-colors duration-200"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Já possui um cadastro? <Link to="/login" className="text-[#feae04] hover:underline font-semibold">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
