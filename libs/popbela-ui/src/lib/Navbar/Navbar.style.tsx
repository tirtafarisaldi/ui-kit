import styled from '@emotion/styled';
import { Nav } from 'foundation-ui';
import { NavbarProps } from './Navbar.types';
import { css } from '@emotion/react';

export const NavbarPopbela = styled(Nav)`
  width: 100%;
  ul {
    gap: 5px;
    width: 100%;
    max-width: 100%;
    align-items: center;
    list-style-type: none;
    white-space: nowrap;
    margin-left: -7px;
    padding-left: 15px;
    padding-right: 7px;
    text-transform: uppercase;
    flex-direction: row;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;

    ${(props: NavbarProps) => css`
      ${props.isMobile &&
      css`
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
      `}
    `}
    
    ${(props: NavbarProps) => css`
      ${!props.isMobile &&
      css`
        justify-content: space-evenly;
        display: -webkit-flex;
        overflow-x: scroll;
      `}
    `}

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /*
    }

    li {
      a {
        label {
          padding-top: 7px;
          padding-bottom: 7px;
          padding-inline-start: 15px;
          padding-inline-end: 15px;
          line-height: 20px;
          text-transform: uppercase;
 
          ${(props: NavbarProps) => css`
            ${props.isMobile &&
            css`
              padding-top: 3px;
              padding-bottom: 3px;
              padding-inline: 7px;
            `}
          `}
        }
      }
    }
  }
`;
