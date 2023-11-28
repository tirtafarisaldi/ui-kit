import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CardProps } from './Card.types';

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #card-content {
    ${(props: CardProps) => css`
      width: 260px;
      height: 400px;
      ${['exclusive', 'headline', 'latest'].includes(props.type) &&
      css`
        width: 360px;
        height: 430px;
      `};
      ${['latest-small'].includes(props.type) &&
      css`
        width: 300px;
        height: 160px;
      `};
      ${['trending'].includes(props.type) &&
      css`
        width: 300px;
        height: 80px;
      `};
      @media (max-width: 600px) {
        width: 100%;
      }
    `}
  }
`;
