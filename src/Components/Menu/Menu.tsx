import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTag, faCube, faPlusCircle, faTimes, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState<number>(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-hoodaLaranja border-gray-200">
        <div className="max-w-screen-xl px-4 py-2.5 mx-auto flex items-center justify-between">

          {/* Mobile Layout: Logo and Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link to={"/home"} className="flex items-center text-xl hover:text-2xl duration-200">
              <img
                src="https://i.imgur.com/bLUnK48.png"
                className="h-8 mr-2 sm:h-9 hover:h-9"
                alt="Hooda Logo"
              />
              <span className="m-2 pt-1 font-Docker-One dark:text-black">HOODA</span>
            </Link>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Layout: Logo, Navigation Links, and Buttons */}
          <div className="hidden md:flex items-center flex-grow">
            {/* Left Side: Logo */}
            <Link to={"/home"} className="flex items-center text-xl hover:text-2xl duration-200 mr-8">
              <img
                src="https://i.imgur.com/bLUnK48.png"
                className="h-8 mr-2 sm:h-9 hover:h-9"
                alt="Hooda Logo"
              />
              <span className="m-2 pt-1 font-Docker-One dark:text-black">HOODA</span>
            </Link>

            {/* Centered Navigation Links */}
            <div className="flex flex-grow justify-center">
              <ul className="flex space-x-4">
                <li>
                  <Link to={"/home"} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center" aria-current="page">
                    <FontAwesomeIcon icon={faHome} className="h-6 w-6 mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/aboutus"} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="h-6 w-6 mr-2" />
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to={"/categorias"} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faTag} className="h-6 w-6 mr-2" />
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link to={"/produtos"} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faCube} className="h-6 w-6 mr-2" />
                    Produto
                  </Link>
                </li>
                <li className="relative">
                  <button onClick={toggleDropdown} className="font-Montserrat text-gray-700 px-4 py-2 rounded hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faPlusCircle} className="h-6 w-6 mr-2" />
                    Cadastro
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-[7rem] bg-gray-100 border border-gray-300 rounded shadow-lg flex flex-col">
                      <Link to="/cadastroCategoria" onClick={closeMenu} className="py-2 px-4 hover:bg-gray-200">Categoria</Link>
                      <Link to="/cadastroProduto" onClick={closeMenu} className="py-2 px-4 hover:bg-gray-200">Produto</Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Right Side: Buttons and Cart Icon */}
            <div className="flex items-center space-x-4 ml-8">
              <button className="font-Montserrat text-[254, 174, 4] text-1xl hover:bg-amber-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-4 py-2 lg:px-5 lg:py-2.5 dark:focus:ring-purple-800">
                {token === '' ? (
                  <Link to='/login'><button>Entrar</button></Link>
                ) : (
                  <button onClick={handleLogout}>Sair</button>
                )}
              </button>
              <Link to={"/cart"} className="flex items-center">
                <div className="relative inline-block">
                  <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-white" />
                  {notifications > 0 && (
                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-white text-hoodaLaranja text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className={`relative w-64 h-full bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
            <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-700">
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-start py-4 px-6 space-y-4">
              <Link to={"/home"} className="flex items-center text-xl hover:text-2xl duration-200" onClick={closeMenu}>
                <img
                  src="https://i.imgur.com/bLUnK48.png"
                  className="h-8 mr-2 sm:h-9 hover:h-9"
                  alt="Hooda Logo"
                />
                <span className="m-2 pt-1 font-Docker-One dark:text-black">HOODA</span>
              </Link>
              <button className="font-Montserrat text-[254, 174, 4] text-1xl hover:bg-amber-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-4 py-2 w-full text-left">
                {token === '' ? (
                  <Link to='/login' onClick={closeMenu}><button>Entrar</button></Link>
                ) : (
                  <button onClick={() => { handleLogout(); closeMenu(); }}>Sair</button>
                )}
              </button>
              <Link to={"/cart"} onClick={closeMenu} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                <div className="relative inline-block">
                  <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-gray-700" />
                  {notifications > 0 && (
                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-white text-hoodaLaranja text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </div>
                Carrinho
              </Link>
              <ul className="flex flex-col w-full space-y-4">
                <li>
                  <Link to={"/home"} onClick={closeMenu} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center" aria-current="page">
                    <FontAwesomeIcon icon={faHome} className="h-6 w-6 mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/aboutus"} onClick={closeMenu} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="h-6 w-6 mr-2" />
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to={"/categorias"} onClick={closeMenu} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faTag} className="h-6 w-6 mr-2" />
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link to={"/produtos"} onClick={closeMenu} className="py-2 px-3 font-Montserrat text-gray-700 hover:text-white flex items-center">
                    <FontAwesomeIcon icon={faCube} className="h-6 w-6 mr-2" />
                    Produto
                  </Link>
                </li>
                <li className="relative">
                  <button onClick={() => { toggleDropdown(); closeMenu(); }} className="font-Montserrat text-gray-700 px-4 py-2 rounded hover:text-white flex items-center w-full text-left">
                    <FontAwesomeIcon icon={faPlusCircle} className="h-6 w-6 mr-2" />
                    Cadastro
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-2 w-full bg-gray-100 border border-gray-300 rounded shadow-lg flex flex-col">
                      <Link to="/cadastroCategoria" onClick={closeMenu} className="py-2 px-4 hover:bg-gray-200">Categoria</Link>
                      <Link to="/cadastroProduto" onClick={closeMenu} className="py-2 px-4 hover:bg-gray-200">Produto</Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
