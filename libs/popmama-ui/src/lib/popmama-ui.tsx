import styled from '@emotion/styled';
/* eslint-disable-next-line */
export interface PopmamaUiProps {}

const StyledPopmamaUi = styled.div`
  color: pink;
`;

export function PopmamaUi(props: PopmamaUiProps) {
  return (
    <StyledPopmamaUi>
      <h1>Welcome to PopmamaUi!</h1>
    </StyledPopmamaUi>
  );
}

export default PopmamaUi;
