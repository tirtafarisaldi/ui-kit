import styled from '@emotion/styled';
import { colors } from 'foundation-ui';

export const StyledBreadcrumbs = styled.span`
  a:not(:last-child) > * {
    color: ${colors.gray90};
  }
  a:not(:last-child) > *:hover {
    color: ${colors.redLight};
    text-decoration: underline;
  }
  a:last-child > * {
    color: ${colors.redLight};
  }
`;
