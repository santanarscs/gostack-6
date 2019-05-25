import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }
  div {
    margin-left: 20px;
    span {
      font-size: 11px;
      letter-spacing: 1.11px;
    }
  }
  h1 {
    margin-top: 10px;
    font-size: 48px;
  }
  p {
    margin-top: 0;
    color: #b3b3b3;
    font-size: 11px;
    letter-spacing: 1.11px;
    text-transform: uppercase;
  }

  button {
    background: #1db854;
    height: 32px;
    border-radius: 16px;
    color: #fff;
    line-height: 32px;
    padding: 0 35px;
    border: 0;
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 1.11px;
  }
`;
