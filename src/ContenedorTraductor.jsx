import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";

const CajaContenedorTraductor = styled.div`
  width: 60%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    /* Cambia el width a 100% en dispositivos móviles */
    width: 100%;
  }
`;

const TituloApp = styled.img`
  max-height: 100px;
  margin: 1em;
`;

const TextAreaIntro = styled.textarea`
  font-size: 24px;
  min-height: 150px;
  min-width: 80%;
  max-width: 80%;
  border-radius: 15px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  outline: 0;
  border: 0;
  padding: 30px;
`;

const BotonTraducir = styled.div`
  margin: 2em;
  padding: 15px;
  width: 50%;
  background: #004aad;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.4s;

  &:hover {
    transform: scale(0.97);
    //background-color: #da8d00;
  }
`;

const TextAreaOutro = styled.textarea`
  font-size: 24px;
  min-height: 300px;
  min-width: 80%;
  max-width: 80%;
  border-radius: 15px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  outline: 0;
  border: 0;
  padding: 30px;
`;

const ContenedorTraductor = () => {
  const [textoIntro, setTextoIntro] = useState("");
  const [textoTraducido, setTextoTraducido] = useState("");

  const traducir = () => {
    // Implementa la lógica de traducción aquí usando un switch
    // Puedes cambiar esto según tus necesidades específicas
    switch (textoIntro.toLowerCase()) {
      case "uno":
        setTextoTraducido("jekh");
        break;
      case "dos":
        setTextoTraducido("dui");
        break;
      default:
        setTextoTraducido("Palabra no reconocida");
    }
  };

  return (
    <CajaContenedorTraductor>
      <TituloApp src={logo}></TituloApp>
      <TextAreaIntro
        placeholder="Español"
        value={textoIntro}
        onChange={(e) => setTextoIntro(e.target.value)}
      />
      <BotonTraducir onClick={traducir}>TRADUCIR</BotonTraducir>
      <TextAreaOutro placeholder="Romanés" value={textoTraducido} readOnly />
    </CajaContenedorTraductor>
  );
};

export default ContenedorTraductor;
