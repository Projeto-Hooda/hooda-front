import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/ToastAlerta';
import Produto from '../../model/Produto';
import { buscar } from '../../services/Service';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormularioUsuario from '../../Components/Perfil/formularioUsuario/formularioUsuario';

function Perfils() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const token = usuario.token;

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'info');
            navigate("/login");
        }
    }, [usuario.token, navigate]);

    async function buscarProdutos() {
        if (usuario.token === '') return;

        try {
            await buscar("/produtos", setProdutos, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                toastAlerta("O token expirou, favor logar novamente", "info");
                handleLogout();
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [usuario.token]);


    const produtosDoUsuario = produtos.filter(produto => produto.usuario?.id === usuario.id);

    function formatarPreco(valor) {
        return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="bg-background text-foreground p-6 md:p-8 lg:p-10 rounded-lg shadow-lg border-2 border-red-500 md:w-full">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-4">
                    <div className="grid md:flex items-center gap-4">
                        <div className="md:block">
                            <img
                                src={usuario.foto}
                                alt="User Profile"
                                width={200}
                                height={200}
                                className="rounded-full w-full max-w-[200px] mx-auto"
                                style={{ aspectRatio: "200/200", objectFit: "cover" }}
                            />
                        </div>
                        <div className="grid md:gap-1">
                            <h2 className="flex justify-center text-xl font-bold font-sans xl:text-xl">{usuario.nome}</h2>
                            <div className="flex justify-center items-center gap-0 md:gap-2 text-sm text-muted-foreground font-sans xl:text-xl">
                                {usuario.usuario}
                            </div>
                            <div className='flex mt-4 justify-center'>
                                <Popup className=''
                                    trigger={<button
                                        className="mt-3 w-1/2 md:w-full bg-hoodaLaranja text-white py-2 px-4 rounded-lg shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
                                        Editar Perfil
                                    </button>}
                                    modal
                                    closeOnDocumentClick
                                >

                                    <div className='w-full h-full'>
                                        <FormularioUsuario userId={usuario.id} closeModal={close} />
                                    </div>

                                </Popup>

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                        </div>
                    </div>
                </div>
            </div>
            <img src='' className="my-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {produtosDoUsuario.map((produto) => (
                    <div
                        key={produto.id}
                        className="bg-card text-card-foreground p-4 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative h-40">
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                className="h-full w-full object-cover shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mt-4 grid">
                            <h3 className="text-lg font-semibold font-sans">{produto.nome}</h3>
                            <div className="text-primary font-bold font-sans pb-2">R$ {formatarPreco(produto.preco)}</div>
                            <div className='relative h-20'>
                                <p className="text-gray-600 text-sm font-normal font-sans opacity-75">
                                    Descrição: {produto.descricao}
                                </p>
                                <p className="text-gray-600 text-sm font-normal font-sans opacity-75">
                                    Categoria: {produto.categoria?.nome}
                                </p>
                                <p className="text-gray-600 text-sm font-normal font-sans opacity-75">
                                    Estoque: {produto.estoque}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between p-4 border-t border-gray-200 ">
                            <div className='w-1/2 text-white mr-2 bg-hoodaLaranja rounded-lg shadow hover:bg-amber-400 flex items-center justify-center py-2'>
                                <Link to={`/editarProduto/${produto.id}`} >
                                    <button>Editar</button>
                                </Link>
                            </div>
                            <div className='w-1/2 text-white bg-red-400 rounded-lg shadow hover:bg-red-700 flex items-center justify-center py-2'>
                                <Link to={`/deleteProduto/${produto.id}`} >
                                    <button>Deletar</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}

export default Perfils;
