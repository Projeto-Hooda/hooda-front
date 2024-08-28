import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Categoria from "../../model/Categoria";
import { buscar } from "../../services/Service";
import { Link } from "react-router-dom";
import "./styles.css";

function MenuCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        type: "fraction",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {categorias.map((categoria) => (
        <SwiperSlide
          key={categoria.id}
          className="p-2 rounded-lg hover:bg-gray-600 text-xs text-center md:text-base md:text-start"
        >
          <Link to={`/categorias/${categoria.id}`} className="block">
            {categoria.nome}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MenuCategoria;
