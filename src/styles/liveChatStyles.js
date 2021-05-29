import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  width: 25%;

  @media only screen and (max-width: 1024px) {
    min-width: unset;
    width: 100%;
  }
`;