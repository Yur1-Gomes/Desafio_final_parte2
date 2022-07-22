import React from "react";
import styled from "styled-components";
import Justice from "../assets/justice.svg";

const MainBox = styled.div`
  width: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3vh;
  margin-left: 25vw;
  @media (max-width: 720px) {
    width: 75vw;
    margin-left: 13vw;
  }
`;
const TopicBox = styled.div`
  background-color: #00689d;
  display: flex;
  justify-content: space-between;
  padding: 3vh;
  width: 50vw;
  height: 56vh;
  margin-top: 2vh;
  @media (max-width: 720px) {
    width: 75vw;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2vw;
  width: 20.8vw;
`;
const H2 = styled.h2`
  font-size: 6rem;
`;
const H3 = styled.h3`
  font-size: 2.25rem;
`;
const IconBox = styled.div`
  margin: auto;
`;
const Icon = styled.img`
  height: 35vh;
  @media (max-width: 1024px) {
    height: 15vh;
  }
  @media (max-width: 720px) {
    height: 10vh;
    margin-left: 22vw;
  }
  @media (max-width:500px){
    height:8vh;
    margin-left:27vw;
  }
`;
const TextMain = styled.div`
  width: 40.4vw;
  margin-bottom:2vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 720px) {
    width: 75vw;
  }
`;

export default function Topic1() {
  return (
    <MainBox>
      <TopicBox>
        <TextBox>
          <H2>5</H2>
          <H3>Paz e Justiça</H3>
          <h4>
            Promover sociedades pacíficas e inclusivas para o desenvolvimento
            sustentável.
          </h4>
        </TextBox>
        <IconBox>
          <Icon src={Justice} alt="" />
        </IconBox>
      </TopicBox>
      <TextMain>
        <p>
          <strong>
            Objetivo 5. Proteger, recuperar e promover o uso sustentável dos
            ecossistemas terrestres, incluindo a reserva ecológica local.
          </strong>
        </p>
        <p>
          <strong>5.1 </strong>Desencorajar, entre a comunidade, a exploração
          infantil e o uso de drogas.
        </p>
        <p>
          <strong>5.2 </strong>Realizar petições com o objetivo de obter melhora
          no policiamento da região.
        </p>
        <p>
          <strong>5.3 </strong>Incentivar a criação e o aperfeiçoamento de
          programas sociais com o fim de reabilitar detentos na sociedade.
        </p>
      </TextMain>
    </MainBox>
  );
}