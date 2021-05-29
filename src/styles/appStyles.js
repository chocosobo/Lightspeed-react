import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-height: 100%;
  vertical

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  max-width: 1400px;
`;
