import React from "react";
import styled from "styled-components";
import Livro from "../assets/livro.svg";

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
  background-color: #c5192d;
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
          <H2>3</H2>
          <H3>Educação de qualidade</H3>
          <h4>
            Garantir o acesso à educação inclusiva, de qualidade e equitativa.
          </h4>
        </TextBox>
        <IconBox>
          <Icon src={Livro} alt="" />
        </IconBox>
      </TopicBox>
      <TextMain>
        <p>
          <strong>
            Objetivo 3. Assegurar a educação inclusiva e equitativa e de
            qualidade, e promover oportunidades de aprendizagem ao longo da vida
            para todas e todos.
          </strong>
        </p>
        <p>
          <strong>3.1 </strong>Cobrar dos governantes melhorias estruturais e
          orçamentárias nas escolas públicas regionais.
        </p>
        <p>
          <strong>3.2 </strong>Organizar programas de doações de livros e a
          criação de bibliotecas comunitárias.
        </p>
      </TextMain>
    </MainBox>
  );
}
