import styled, { css, withTheme, ThemeProvider } from "styled-components";


const FlexBox = withTheme(styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  align-items: ${(props) => props.alignItems ?? "center"}
`);

export default FlexBox;