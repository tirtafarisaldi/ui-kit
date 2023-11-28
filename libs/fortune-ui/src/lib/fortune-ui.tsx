import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FortuneUiProps {}

const StyledFortuneUi = styled.div`
  color: pink;
`;

export function FortuneUi(props: FortuneUiProps) {
  return (
    <StyledFortuneUi>
      <h1>Welcome to FortuneUi!</h1>
    </StyledFortuneUi>
  );
}

export default FortuneUi;
