import React, { useState } from "react";

function Opiniones() {
  const opiniones = [
    { id: 1, nombre: "Juan", opinion: "Excelente servicio, muy recomendable." },
    {
      id: 2,
      nombre: "Ana",
      opinion: "No me gustó la comida, no cumplió con mis expectativas.",
    },
    { id: 3, nombre: "Pedro", opinion: "Muy buen servicio, lo recomiendo." },
    { id: 4, nombre: "Luis", opinion: "No me convenció, no volvería a comer." },
    {
      id: 5,
      nombre: "María",
      opinion: "Excelente calidad, los mozos unos genios.",
    },
    {
      id: 6,
      nombre: "Carlos",
      opinion: "No me gustó el lugar, el ambiente era muy raro.",
    },
    {
      id: 7,
      nombre: "Kevin",
      opinion: "Full recomiendo las empanadas, riquísimas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const nextSlide = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
  };

  const prevSlide = () => {
    setSlideDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length
    );
  };

  return (
    <div className="opiniones-carousel">
            <h2>Opiniones de Clientes</h2>
            <div className={`carousel ${slideDirection}`}>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <p>"{opiniones[currentIndex].opinion}"</p>
                        <h4>- {opiniones[currentIndex].nombre}</h4>
                    </div>
                </div>
            </div>
            <button className="prev-btn" onClick={prevSlide}>❮</button>
            <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>
  );
}

export default Opiniones;
