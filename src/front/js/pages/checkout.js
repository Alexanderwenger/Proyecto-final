import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Checkout = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.GetValidacion(localStorage.getItem("token"));
    setTimeout(() => {
      if (store.login == false) {
        navigate("/demo");
      }
    }, 5000);
  }, []);

  return (
    <div>
      <h3>Checkout</h3>


      
      {store.login ? (
        "Muestra contenido protegido, Aquí va el código"
      ) : (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}





    </div>
  );
};

