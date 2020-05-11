import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function newIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu login na plataforma e a ajuda as pessoas a encontrarem casos da sua ONG.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                       Voltar para Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}