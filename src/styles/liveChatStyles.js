import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  margin: 0 2.5em;
  min-width: 25em;
  width: 25%;
  max-width: 30empx;
  height: 100%;
  

  @media only screen and (max-width: 1024px) {
    margin: 1em 0.3em;
    min-width: unset;
    width: 91%;
  }
`;