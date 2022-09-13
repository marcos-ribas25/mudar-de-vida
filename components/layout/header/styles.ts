import styled from "styled-components";

export const Header = styled.header`
  max-width: 300px;
  width: 100%;
  background-color: #22313b;
  padding: 25px;
  height: 100vh;

  .link {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #fff;

    i {
      width: 20px;
      height: auto;
      display: flex;
      align-items: center;

      svg,
      img {
        width: 100%;
        object-fit: contain;
        fill: #fff;
      }
    }
  }
`;
