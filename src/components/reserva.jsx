import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

function Reserva() {
  const elementRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    hour: "",
    quantity: "",
    comments: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  //Esta funcion captura el valor del input y lo guarda

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2hbmf3a",
        "template_txuqwu6",
        formData,
        "zRxqJv1_OMvg31wiy"
      )
      .then(() => {
        alert("Reserva enviada exitosamente");
        setFormData({
          name: "",
          lastName: "",
          phone: "",
          date: "",
          hour: "",
          quantity: "",
          comments: "",
          email: "",
          message: "",
        }); // Limpiar el formulario
      })
      .catch((error) => {
        alert("Error al enviar el mensaje: " + JSON.stringify(error));
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="reserva" ref={elementRef}>
      <h1 className="titulo-reserva">Reservá ahora tu espacio</h1>
      <div className="form">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Fecha"
            required
          />
          <input
            type="time"
            name="hour"
            value={formData.hour}
            onChange={handleChange}
            placeholder="Hora"
            required
          />
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Cantidad de personas"
            required
          />
          <input
            type="text"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comentarios"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Reserva;
