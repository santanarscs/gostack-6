import React from "react";

import { Container, Title, List, Playlist } from "./styles";

export default function browse() {
  return (
    <Container>
      <Title>Navegar</Title>
      <List>
        <Playlist href="">
          <img
            src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
            alt="teste"
          />
          <strong>Rock dos bons</strong>
          <p>
            Relaxa enquanto você programa ouvindo apenas as melhores do rock
            mundial
          </p>
        </Playlist>
        <Playlist href="">
          <img
            src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
            alt="teste"
          />
          <strong>Rock dos bons</strong>
          <p>
            Relaxa enquanto você programa ouvindo apenas as melhores do rock
            mundial
          </p>
        </Playlist>
        <Playlist href="">
          <img
            src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
            alt="teste"
          />
          <strong>Rock dos bons</strong>
          <p>
            Relaxa enquanto você programa ouvindo apenas as melhores do rock
            mundial
          </p>
        </Playlist>
        <Playlist href="">
          <img
            src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
            alt="teste"
          />
          <strong>Rock dos bons</strong>
          <p>
            Relaxa enquanto você programa ouvindo apenas as melhores do rock
            mundial
          </p>
        </Playlist>
      </List>
    </Container>
  );
}
