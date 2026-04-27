import React from "react";
import { useState } from "react";
import { FaUser,FaLock } from "react-icons/fa";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return(
        <div className="container">
            <form action="">
                <h1>Acesse o Sistema</h1>
                <div>
                    <input type="text"  placeholder="username"/>
                    <FaUser className="icon" />
                </div>
                <div>
                    <input type="password" placeholder="senha" />
                    <FaLock className="icon"/>
                </div>
                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" name="" id=""/>
                    Lembre de mim 
                    </label>
                    <a href="http://">Esqueci a senha</a>
                </div>
            <button>Entrar</button>
            </form>
        </div>
    )
}
export default Login;