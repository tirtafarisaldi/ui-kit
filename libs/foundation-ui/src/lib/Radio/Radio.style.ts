import styled from "@emotion/styled";
import { RadioProps } from "./Radio.types";
import { css } from '@emotion/react';
import { colors } from '../Colors';

export const StyledInputRadio = styled.input`
${(props: RadioProps) =>
    css`
    margin-right: 9px;
    accent-color: ${colors[props.accentColor || 'blue']};

    &:checked {
      background-color: ${colors[props.accentColor || 'blue']};
    }
  `}
`;
