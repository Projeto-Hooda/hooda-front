import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import CardProdutos1 from "../../Components/Produto/CardCarrinho/CardCarrinho";

function Cart() {
  const { items, limparCart } = useContext(AuthContext);

  const calcularSubtotal = () => {
    return items.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
      0
    );
  };

  // Calcula o subtotal total
  const subtotal = calcularSubtotal();

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  console.log(items);
  return (
    <>
      <div className="flex flex-col md:mx-6">
        <div className="font-Montserrat text-hoodaLaranja text-xl pt-2 flex justify-center md:justify-start md:ml-1">
          Carrinho de Compras
        </div>
        <div className="flex justify-center">
          <div className="container grid grid-cols-1 justify-between w-full my-4 md:grid-cols-6 md:flex xl:grid xl:grid-cols-10">
            <div className="container md:h-[18.5rem] lg:h-[21rem] col-span-3 bg-white shadow-md rounded-lg md:p-0 xl:col-span-7">
              <div className="grid grid-cols-5 items-center font-Montserrat">
                {/* <div className='col-span-1 flex justify-center text-sm'>Produto</div>
                            <div className='col-span-1 flex justify-center text-sm'>Preço</div>
                            <div className='col-span-1 flex justify-center'>Quantidade</div>
                            <div className='col-span-1 flex justify-center'>Subtotal</div> */}
              </div>
              <div className="">
                {items.map((produto) => (
                  <CardProdutos1 key={produto.id} item={produto} />
                ))}
              </div>
            </div>
            <div
              className="container col-span-2  bg-white shadow-md rounded-lg p-6 mt-4 text-center font-sans font-semibold text-xl 
                    md:mt-0 md:ml-6 md:text-2xl md:h-[18.5rem] lg:h-[21rem] md:pb-4 lg:text-3xl xl:col-span-3 xl:text-2xl"
            >
              <div className=" pb-2 md:pb-4">Resumo do Pedido</div>
              <div className="flex justify-between  pt-2 font-sans font-normal text-sm px-2 md:text-xl md:py-2 lg:text-2xl xl:text-xl ">
                <span>Subtotal: </span>{" "}
                <span> R$ {formatarPreco(subtotal)}</span>
              </div>
              <div className="flex justify-between pb-2 font-sans font-normal text-sm px-2 md:text-xl md:pb-4 lg:text-2xl xl:text-xl">
                <span>Frete: </span> <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between pt-4 px-2 font-sans font-semibold border-t-2 border-slate-400 text-lg md:text-xl md:pt-4 lg:text-2xl xl:text-xl">
                <span>Total: </span>{" "}
                <span className=""> R$ {formatarPreco(subtotal)}</span>
              </div>
              <div className="flex justify-center m-2 pt-6">
                <button
                  className="bg-slate-400 hover:bg-amber-400 text-white font-medium py-1 px-2 rounded-full xl:text-xl"
                  onClick={limparCart}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
