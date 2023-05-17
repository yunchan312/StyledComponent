import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const ratationAnimation = keyframes`
0% {transform:rotate(0deg);
border-radius:0px;} 50% {border-radius:100px;} 100%{transform:rotate(360deg);
  border-radius:0px;}`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.border};
  animation: ${ratationAnimation} 1s linear infinite;
  ${Emoji} {
    margin-top: auto;
    margin-bottom: auto;
    &:hover {
      font-size: 60px;
      cursor: pointer;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Emoji as="p">🙂</Emoji>
      <Box>
        <Emoji as="p">🙂</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
