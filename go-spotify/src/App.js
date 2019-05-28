import React from "react";
import "./config/reactotron";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "rc-slider/assets/index.css";
import "./styles/styles.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import ErrorBox from "./components/ErrorBox";
import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
