import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface YummyUiProps {}

const StyledYummyUi = styled.div`
  color: pink;
`;

export function YummyUi(props: YummyUiProps) {
  return (
    <StyledYummyUi>
      <h1>Welcome to YummyUi!</h1>
    </StyledYummyUi>
  );
}

export default YummyUi;
