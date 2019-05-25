import React from "react";

import { Container, Header } from "./styles";

export default function playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="teste"
        />
        <div>
          <span>PLAYLIST</span>
          <h1>Rock Forever</h1>
          <p>13 músicas</p>
          <button>PLAY</button>
        </div>
      </Header>
    </Container>
  );
}
