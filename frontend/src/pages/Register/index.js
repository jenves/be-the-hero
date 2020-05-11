import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
    return (
        
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da Ong" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}