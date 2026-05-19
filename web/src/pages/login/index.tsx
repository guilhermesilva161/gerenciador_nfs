import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { login } from "../../service/login";

import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            const data = await login(username, password);
            console.log("Resposta:", data);
            localStorage.setItem("Token", data.token);
            localStorage.setItem("Role", data.user.role);
            alert("Login realizado com sucesso");
            if (data.user.role === 1) {
                navigate("/dashboard/admin");
            } else {
                navigate("/dashboard/operador");
            }
        } catch (error) {
            console.error(error);
            alert("Erro no login");
        }
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;