import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  min-width: 25em;
  width: 25%;
  max-width: 30empx;
  

  @media only screen and (max-width: 1024px) {
    min-width: unset;
    width: 90%;
  }
`;