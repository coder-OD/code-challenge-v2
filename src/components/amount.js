import styled, { css, withTheme } from "styled-components";

import FlexBox from "./flex-box";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Box = styled(FlexBox)`
  color: ${(props) => props.theme.fontGrey};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Available = styled.div`
  font-size: 12px;
`;

const SelectBox = styled(FlexBox)`
  width: 100%;
  height: 56px;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 6px;
  margin: 12px 0 8px 0;
  padding-right: 12px;
  color: ${(props) => props.theme.fg};
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 0 8px;
`;

const AmountContent = styled.div`
  flex: 1;
  height: 100%;
  line-height: 56px;
  border-left: 1px solid #dadada;
  padding-left: 12px;
  font-size: 14px;
  font-weight: 500;
`;

const Atom = styled.div`
  font-weight: 500;
`;
const Dollar = styled.div`
  margin-left: 10px;
  font-size: 10px;
  color: ${(props) => props.theme.fontGrey};
`;
const Tip = styled.div`
  padding: 0 6px;
  height: 28px;
  line-height: 28px;
  margin-left: 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.tipBg};
  color: ${props => props.theme.fontGrey}
`;

const Amount = ({ title, img, content, editable, theme }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Box>
        <Title>Select amount</Title>
        <Available>
          Available 2 <strong>ATOM</strong>
        </Available>
      </Box>
      <SelectBox>
        <Img src="/coin.png" />
        <AmountContent>2</AmountContent>
        <Atom>ATOM</Atom>
        <Dollar> =$1,013</Dollar>
      </SelectBox>
      <FlexBox justifyContent="flex-end">
        <Tip>Max</Tip>
        <Tip>1/2</Tip>
        <Tip>1/3</Tip>
      </FlexBox>
    </Container>
  );
};

export default withTheme(Amount);
