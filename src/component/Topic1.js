import React from "react";
import styled from "styled-components";
import Tree from "../assets/tree.svg";

const MainBox = styled.div`
  width: 50vw;
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
  background-color: #56c02b;
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
          <H2>1</H2>
          <H3>Vida terrestre</H3>
          <h4>
            Proteger, restaurar e promover o uso sustentável dos ecossistemas
            terrestres.
          </h4>
        </TextBox>
        <IconBox>
          <Icon src={Tree} alt="" />
        </IconBox>
      </TopicBox>
      <TextMain>
        <p>
          <strong>
            Objetivo 1. Proteger, recuperar e promover o uso sustentável dos
            ecossistemas terrestres, incluindo a reserva ecológica local.
          </strong>
        </p>
        <p>
          <strong>1.1 </strong>Organizar mutirões para fins de fiscalizar e
          preservar a reserva ecológica.
        </p>
        <p>
          <strong>1.2 </strong>Alertar as entidades competentes caso haja sinais
          de desmatamento e invasão de território protegido.
        </p>
      </TextMain>
    </MainBox>
  );
}
