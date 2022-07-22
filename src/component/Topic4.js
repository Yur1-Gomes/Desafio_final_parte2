import React from "react";
import styled from "styled-components";
import Saude from "../assets/saude.svg";

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
  background-color: #4c9f38;
  display: flex;
  justify-content: space-between;
  padding: 3vh;
  width: 50vw;
  height: 56vh;
  margin-top: 2vh;
  @media (max-width: 720px) {
    width: 75vw;
  }
  @media (max-width:500px){
    height:65vh;
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
          <H2>4</H2>
          <H3>Saúde e bem-estar</H3>
          <h4>
            Garantir o acesso à saúde de qualidade e promover o bem-estar para todas as idades.
          </h4>
        </TextBox>
        <IconBox>
          <Icon src={Saude} alt="" />
        </IconBox>
      </TopicBox>
      <TextMain>
        <p>
          <strong>
            Objetivo 4. Assegurar uma vida saudável e promover o bem-estar para
            todas e todos, em todas as idades.
          </strong>
        </p>
        <p>
          <strong>4.1 </strong>Cobrar dos governantes o término do sucateamento
          dos hospitais públicos e dos postos de saúde.
        </p>
        <p>
          <strong>4.2 </strong>Organizar programas de incentivo de prática de
          atividades físicas, com foco na população de terceira idade.
        </p>
      </TextMain>
    </MainBox>
  );
}
