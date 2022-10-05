import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css"
import { Context } from "../store/appContext";


export const Resetear = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");


    const FuncionResetear = () => {
      if (email != "" ) actions.ValidacionEmail(email); //
      else alert("Favor ingresa tu correo");
    };

    return (
        <div class="container login-container">
            <div class="row login-row">
                <div class="col-md-6 login-form-1">
                    <h3>Resetear contraseña</h3>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    
                    <div class="form-group">
                        <Link to="/demo">
                        <input onClick={FuncionResetear} type="submit" class="btnSubmit" value="Enviar correo" />
                        </Link>
                        
                    </div>
                    

                </div>
                <div class="col-md-6 login-form-2">
                    <div class="login-logo">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
}