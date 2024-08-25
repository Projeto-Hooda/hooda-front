import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../model/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Login() {
  let navigate = useNavigate();
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container central */}
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 relative">
        {/* Logotipo Hooda dentro da caixa de login */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <img src="https://i.imgur.com/bLUnK48.png" alt="Hooda Logo" className="w-16 h-auto" />
        </div>

        <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center mt-12">Login</h3>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Não tem conta? <Link to="/register" className="text-orange-500 hover:underline font-semibold">Cadastre-se</Link>
        </p>
        <form onSubmit={login}>
          <div className="mb-4">
            <label className="text-gray-800 text-sm block mb-2">Email</label>
            <input 
              name="usuario" 
              value={usuarioLogin.usuario} 
              type="text" 
              required 
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-orange-500 px-3 py-2 outline-none" 
              placeholder="Seu email"
              onChange={atualizarEstado} 
            />
          </div>
          <div className="mb-6">
            <label className="text-gray-800 text-sm block mb-2">Senha</label>
            <input 
              name="senha" 
              value={usuarioLogin.senha} 
              type="password" 
              required 
              className="w-full text-gray-800 text-sm border rounded-md border-gray-300 focus:border-orange-500 px-3 py-2 outline-none" 
              placeholder="Sua senha"
              onChange={atualizarEstado} 
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-800">Lembrar de mim</label>
            </div>
            <Link to="/forgot-password" className="text-orange-500 hover:underline text-sm">Esqueceu sua senha?</Link>
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none flex items-center justify-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>
          <div className="my-6 flex justify-center items-center">
            <span className="text-gray-600 mx-2">ou</span>
          </div>
          <div className="flex flex-col gap-4">
            <button 
              type="button" 
              className="flex items-center justify-center w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2 text-red-500" />
              Login com Google
            </button>
            <button 
              type="button" 
              className="flex items-center justify-center w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 mr-2" />
              Login com Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
