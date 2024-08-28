import Popup from "reactjs-popup"
import FormularioUsuario from "../formularioUsuario/formularioUsuario"

function ModalUsuario() {
  return (
    <>
    <Popup 
    trigger={<button className='border rounded px-4 hover:bg-white hover:text-amber-400'> Editar Usuário</button>} modal>
      <div>
        {/* <FormularioUsuario userId={usuario.id} closeModal={close}/> */}
      </div>
    </Popup>
  </>
  )
}

export default ModalUsuario