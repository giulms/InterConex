import styles from "./Filtro.module.css";
import Botao from "./BotaoFiltro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

function Filtro() {
  const [isMobile, setIsMobile] = useState(false);
  const botoes = [
    "Pessoas",
    "Publicações",
    "Startups",
    "Empresas",
    "Vagas",
    "Freelancers",
    "Todos os Filtros",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1160);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.filtroContainer}>
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {botoes.map((texto, index) => (
            <SwiperSlide key={index}>
              <Botao texto={texto} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        botoes.map((texto, index) => <Botao key={index} texto={texto} />)
      )}
    </div>
  );
}

export default Filtro;
