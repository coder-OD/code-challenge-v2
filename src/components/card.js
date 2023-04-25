import styled, { css, withTheme, ThemeProvider } from "styled-components";

import FlexBox from "./flex-box";

const Container = withTheme(styled.div`
  padding: 16px;
  width: 380px;
  border-radius: 20px;
  box-sizing: border-box;
  margin-right: 20px;
  background: ${(props) => props.theme.bg};
`);

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.fg};
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.closeBg};
  color: ${(props) => props.theme.fg};
`;

const Card = ({ children }) => {
  const title = "Deposit ATOM";
  return (
    <Container>
      <FlexBox style={{ marginBottom: 16 }}>
        <Title>{title}</Title>
        <CloseIcon>
          <span>X</span>
        </CloseIcon>
      </FlexBox>
      {children}
    </Container>
  );
};

export default Card;
