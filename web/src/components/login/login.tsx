import React from "react";
import { useState } from "react";
import { FaUser,FaLock } from "react-icons/fa";
import { login } from "../../service/login";
import './login.css'

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

        const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const data = await login(username, password);

            console.log("Resposta:", data);

            localStorage.setItem("Token", data.token);

            alert("Login realizado com sucesso ");

        } catch (error) {
            console.error(error);
            alert("Erro no login");
        }
        };

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input type="text"  placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" 
                   />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
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