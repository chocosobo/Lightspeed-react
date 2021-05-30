import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  max-width: 1400px;
  align-self: center;

  @media only screen and (max-width: 1024px) {
    algin-self: unset;
  }

`;
