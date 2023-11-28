import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GlobalUiProps {}

const StyledGlobalUi = styled.div`
  color: pink;
`;

export function GlobalUi(props: GlobalUiProps) {
  return (
    <StyledGlobalUi>
      <h1>Welcome to GlobalUi!</h1>
    </StyledGlobalUi>
  );
}

export default GlobalUi;
