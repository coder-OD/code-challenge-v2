import styled, { css, withTheme, ThemeProvider } from "styled-components";

import FlexBox from "./flex-box";
import EditArea from "./edit-area";
import Amount from "./amount";
import Clock from "../icons/clock";

const Arrow = styled.div`
  height: 40px;
  line-height: 40px;
  color: ${(props) => props.theme.fontGrey};
`;

const Estimated = styled(FlexBox)`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 20px 0 12px 0;
  border-radius: 6px;
  font-size: 10px;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.areaBg};
`;

const TransferBtn = styled(FlexBox)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
`;

const CancelBtn = styled(FlexBox)`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.fontGrey};
`;
const CardContent = ({theme}) => {
  return (
    <>
      <FlexBox alignItems="flex-end">
        <EditArea
          title="From Agoric"
          img="/coin.png"
          content="ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604"
        />
        <Arrow>-></Arrow>
        <EditArea
          title="To AssetMantle"
          img="/mantle.png"
          content="ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC"
        />
      </FlexBox>
      <Amount />
      <Estimated justifyContent="flex-start">
        <Clock fill={theme.fg} />
        <div style={{ marginLeft: 8 }}>Estimated time:</div>
        <strong> 20 seconds</strong>
      </Estimated>
      <TransferBtn justifyContent="center">
        <div>Transfer</div>
      </TransferBtn>
      <CancelBtn justifyContent="center">
        <div>Cancel</div>
      </CancelBtn>
    </>
  );
};

export default withTheme(CardContent);
