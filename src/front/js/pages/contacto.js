import React, { useContext, useEffect, useRef, useState } from "react";
import {useForm} from "react-hook-form"
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";


//Instalar npm install @emailjs/browser --save
//Instalar npm install react-hook-form
import emailjs from "@emailjs/browser";

export const Contacto = () => {
  const [estado, setEstado] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3q83svb",
        "template_ds0qae1",
        form.current,
        "iEJeEfqPLuw3KXA1l"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEstado("Enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (estado === "Enviado") {
      setTimeout(() => {
        setEstado("");
        formulario.reset();
      }, 4000);
    }
  }, [estado]);

  return (
    <div class="row imghome">
      <Navbar />

      <div class="row login-row">
        <div class="col-md-6 login-form-1">
          <h3>Formulario de Contacto</h3>
          <form id="formulario" ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input
              type="text"
              class="form-control"
              placeholder="Tu nombre"
              name="user_name"
              required
            />
            <label>Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              placeholder="Tu correo electrónico"
              name="user_email"
              required
            />
            <label>Mensaje</label>
            <textarea
              class="form-control"
              placeholder="Mensaje"
              name="message"
              required
            />
            {estado && renderizarMensaje()}
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const renderizarMensaje = () => (
  <div class="text-primary">Mensaje enviado correctamente</div>
);
