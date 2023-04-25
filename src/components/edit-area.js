import styled, { css, withTheme } from "styled-components";

import FlexBox from "./flex-box";
import Edit from "../icons/edit";


const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => props.theme.fontGrey};
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 6px;
`;

const Box = styled(FlexBox)`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.areaBg};
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: ${props => props.theme.fontGrey}
`;

const EditArea = ({ title, img, content, editable, theme }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Box justifyContent="flex-start">
        <Img src={img} />
        <Content>{content}</Content>
        <Edit fill={theme.fg} />
      </Box>
    </Container>
  );
};

export default withTheme(EditArea);
