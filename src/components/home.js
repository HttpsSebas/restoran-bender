import React from "react";
import Nav from "./nav";
import Reserva from "./reserva";
import Opiniones from "./opiniones";
import asado from "../files/asado.jpg";
import napo from "../files/napo.jpg";
import empanadas from "../files/empanadas.webp";
import spagueti from "../files/spagueti.jpg";
import pizza from "../files/pizza.jpg";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home">
        <h1 className="name">Restorán Bender</h1>
        <div className="platos">
          <h2 className="title">Nuestros platos destacados</h2>
          <div className="plato">
            <img src={asado} alt="Asado" />
            <h2>Asado de tira a la parrilla con chimichurri</h2>
            <p>
              Deliciosa carne de res marinada y cocinada a la perfección,
              servida con nuestro chimichurri casero.
            </p>
            <div>⭐⭐⭐⭐⭐</div>
          </div>
          <div className="plato">
            <img src={napo} alt="Napolitanas" />
            <h2>Milanesas napolitanas con papas fritas</h2>
            <p>
              Deliciosas milanesas de carne rellenas de queso y cubiertas con
              salsa napolitana, servidas con papas fritas.
            </p>
            <div>⭐⭐⭐⭐⭐</div>
          </div>
          <div className="plato">
            <img src={spagueti} alt="Spagueti" />
            <h2>Spagueti con queso y perejil</h2>
            <p>
              Spagueti italiano tradicional, gratinado con queso y perejil
              fresco, una delicia para los amantes de la pasta.
            </p>
            <div>⭐⭐⭐⭐</div>
          </div>
          <div className="plato">
            <img src={empanadas} alt="Empanadas" />
            <h2>Empanadas de varios sabores</h2>
            <p>
              Empanadas de carne, pollo, verdura y queso, horneadas hasta que
              estén crujientes y sabrosas.
            </p>
          </div>
          <div className="plato">
            <img src={pizza} alt="Pizzas" />
            <h2>Varios tipos de pizzas</h2>
            <p>
              Una selección de pizzas con diferentes sabores e ingredientes,
              desde la clásica margarita hasta la pizza de pepperoni y
              champiñones.
            </p>
          </div>
          <h2 className="subtitle">¿Con cuál de estos platos te quedás?</h2>
        </div>
      </div>
      <Reserva />
      <Opiniones />
    </div>
  );
}

export default Home;
