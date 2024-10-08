import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/capa-perfil.jpg';
import { Card } from 'react-bootstrap';
import { toastAlerta } from '../../utils/ToastAlerta';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Certifique-se de que o CSS do Popup está importado
import FormularioUsuario from '../../Components/Perfil/formularioUsuario/formularioUsuario';

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', 'info');
      navigate("/login");
    }
  }, [usuario.token, navigate]);

  return (
    <div className="overflow-hidden">
      <img className="w-full h-80 object-cover border-b-8 border-white" src={loginLogo} alt="Capa do Perfil" />
      <div className="flex justify-center mt-[-4rem]">
        <Card className="p-4 text-center shadow-lg" style={{ maxWidth: '540px' }}>
          <img
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
            className="rounded-full w-45 h-44 mx-auto mb-4 border-2 border-hoodaLaranja object-cover"
          />
          <Card.Body className="p-0">
            <Card.Title className="font-jura text-2xl mb-2">{usuario.nome}</Card.Title>
            <Card.Text className="font-jura text-gray-700 mb-2">
              {usuario.usuario}
            </Card.Text>
            <Popup
              trigger={<button
                className="mt-3 w-full bg-hoodaLaranja text-white py-2 px-4 rounded-lg shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Editar Perfil
              </button>}
              modal
              closeOnDocumentClick
            >
            
                <div className='w-full h-full bg-white'>
                  <FormularioUsuario userId={usuario.id} closeModal={close} />
                </div>
             
            </Popup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Perfil;
