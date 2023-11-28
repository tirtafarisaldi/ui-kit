import { forwardRef } from 'react';
import { StyledDivider } from './Divider.style';
import { StyledDividerWrapper } from './Divider.style';
import { DividerProps } from './Divider.types';

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { children, type } = props;
  return (
    <StyledDividerWrapper {...props}>
      <StyledDivider ref={ref} {...props}>
        {children && type !== 'vertical' && children}
      </StyledDivider>
    </StyledDividerWrapper>
  );
});

export default Divider;
