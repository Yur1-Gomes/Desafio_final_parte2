import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Home from "./component/Home";
import Topic1 from "./component/Topic1";
import Topic2 from "./component/Topic2";
import Topic3 from "./component/Topic3";
import Topic4 from "./component/Topic4";
import Topic5 from "./component/Topic5";
import Esgoto from "./assets/esgoto.svg";
import Tree from "./assets/tree.svg";
import Livro from "./assets/livro.svg";
import Saude from "./assets/saude.svg";
import Justice from "./assets/justice.svg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    font-family: 'Roboto', sans-serif;
  }
  `;
const H1 = styled.h1`
text-align: center;
margin-top:2vh;
margin-bottom:2vh;
color: #279edb;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Box1 = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #56c02b;
`;
const Box2 = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #26bde2;
`;
const Box3 = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #c5192d;
`;
const Box4 = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: #4c9f38;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
const Box5 = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #00689d;
`;
const Item = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Icon = styled.img`
  height: 9vh;
  position: relative;
  top: 10%;
`;
const H2 = styled.h2`
  font-size: 2.3rem;
`;
const H3 = styled.h3`
  font-size: 0.9rem;
  margin-top: 0.5vh;
  margin-left: 0.3vw;
`;
const BoxContent = styled.div`
  display: flex;
  margin-left: 0.6vw;
`;

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <H1>Objetivos de Desenvolvimento Sustentável em Campo Grande</H1>
        <Container>
          <Item to="/Topic1">
            <Box1>
              <BoxContent>
                <H2>1</H2>
                <H3>VIDA TERRESTRE</H3>
              </BoxContent>
              <Icon src={Tree} alt="" />
            </Box1>
          </Item>
          <Item to="/Topic2">
            <Box2>
              <BoxContent>
                <H2>2</H2>
                <H3>SANEAMENTO E VIDA NA ÁGUA</H3>
              </BoxContent>
              <Icon src={Esgoto} alt="" />
            </Box2>
          </Item>
          <Item to="/Topic3">
            <Box3>
              <BoxContent>
                <H2>3</H2>
                <H3>EDUCAÇÃO DE QUALIDADE</H3>
              </BoxContent>
              <Icon src={Livro} alt="" />
            </Box3>
          </Item>
          <Item to="/Topic4">
            <Box4>
              <BoxContent>
                <H2>4</H2>
                <H3>SAÚDE E BEM-ESTAR</H3>
              </BoxContent>
              <Icon src={Saude} alt="" />
            </Box4>
          </Item>
          <Item to="/Topic5">
            <Box5>
              <BoxContent>
                <H2>5</H2>
                <H3>PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES</H3>
              </BoxContent>
              <Icon src={Justice} alt="" />
            </Box5>
          </Item>
        </Container>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topic1" element={<Topic1 />} />
        <Route path="/Topic2" element={<Topic2 />} />
        <Route path="/Topic3" element={<Topic3 />} />
        <Route path="/Topic4" element={<Topic4 />} />
        <Route path="/Topic5" element={<Topic5 />} />
      </Routes>
    </Router>
  );
}
