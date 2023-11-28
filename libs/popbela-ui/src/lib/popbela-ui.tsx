import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PopbelaUiProps {}

const StyledPopbelaUi = styled.div`
  color: pink;
`;

export function PopbelaUi(props: PopbelaUiProps) {
  return (
    <StyledPopbelaUi>
      <h1>Welcome to PopbelaUi!</h1>
    </StyledPopbelaUi>
  );
}

export default PopbelaUi;
