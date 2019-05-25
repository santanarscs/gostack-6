import React from "react";

import { Container, Search, User } from "./styles";

export default function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Search" />
      </Search>
      <User>
        <img
          src="https://avatars2.githubusercontent.com/u/1571674?v=4"
          alt="User"
        />
        Raphael Santana
      </User>
    </Container>
  );
}
