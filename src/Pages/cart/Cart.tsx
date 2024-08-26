import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProdutos1 from '../../Components/Produto/CardCarrinho/CardCarrinho'

function Cart() {
    const { items, limparCart } = useContext(AuthContext)

    const calcularSubtotal = () => {
        return items.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    };

    // Calcula o subtotal total
    const subtotal = calcularSubtotal();
    

    console.log(items)
    return (
        <>

            <div className='flex flex-col md:mx-6'>
                <div className='font-Montserrat text-hoodaLaranja text-xl pt-2 flex justify-center md:justify-start md:ml-1'>Carrinho de Compras</div>
                <div className="container grid grid-cols-1 justify-between w-full my-4 md:grid-cols-6 md:flex ">

                    <div className="container col-span-3 bg-white shadow-md rounded-lg p-6">
                        <div className='grid grid-cols-5 items-center font-Montserrat'>
                            {/* <div className='col-span-1 flex justify-center text-sm'>Produto</div>
                            <div className='col-span-1 flex justify-center text-sm'>Preço</div>
                            <div className='col-span-1 flex justify-center'>Quantidade</div>
                            <div className='col-span-1 flex justify-center'>Subtotal</div> */}
                        </div>
                        <div className="">
                            {
                                items.map(produto => (
                                    <CardProdutos1 key={produto.id} item={produto} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='container col-span-2 bg-white shadow-md rounded-lg p-6 mt-4 text-center font-Montserrat text-xl md:mt-0 md:ml-6 md:text-2xl md:h-[50vh] md:pb-4 lg:h[50vh]'>
                    <div className=' pb-2 md:pb-4'>Resumo do Pedido</div>
                    <div className='flex justify-between  pt-2 font-Montserrat text-sm px-2 md:text-xl md:py-2 '>
                        <span>Subtotal: </span> <span> R$ {subtotal.toFixed(2)}</span>
                        
                    </div>
                    <div className='flex justify-between pb-2 font-Montserrat text-sm px-2 md:text-xl md:pb-4'>
                        <span>Frete: </span> <span>R$ 0,00</span>
                    </div>
                    <div  className='flex justify-between pt-4 px-2 font-Montserrat border-t-2 border-slate-400 text-lg md:text-xl md:pt-4'>
                    <span>Total: </span> <span> R$ {subtotal.toFixed(2)}</span> 
                    </div>
                    <div className='flex justify-center m-2 pt-6'>
                        <button className="bg-hoodaLaranja hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-full"
                            onClick={limparCart}>Finalizar Compra</button>
                    </div>
                    </div>
                </div>
            </ div >




        </>
    )
}

export default Cart