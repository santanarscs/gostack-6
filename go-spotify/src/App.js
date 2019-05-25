import React from "react";
import "rc-slider/assets/index.css";
import "./styles/styles.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import { Wrapper, Container, Content } from "./styles/components";
function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
