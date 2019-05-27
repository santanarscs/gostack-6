import React from "react";
import { Container, Header, SongList } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

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
      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:27</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
