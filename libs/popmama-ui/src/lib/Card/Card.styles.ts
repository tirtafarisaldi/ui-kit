import styled from "@emotion/styled";
import { Link, Text } from "foundation-ui";
import { CardProps } from "./Card.types";
import { css } from "@emotion/react";

export const StyledCard = styled.article`
  ${(props: CardProps) => css`
    display: flex; 
    ${['latest', 'related', 'default'].includes(props.type) && css`
      height: 80px;
      flex-direction: row;
      ${['latest', 'default'].includes(props.type) && css`
        @media (min-width: 600px) {
          height: 150px;
        }
      `}
    `}
    ${props.type === 'trending' && css`
      gap: 10px;
      flex-direction: column;
      height: 195px;
      @media (min-width: 600px) {
        flex-direction: row;
        height: 124px;
      }
    `}
    ${props.type === 'related' && css`
      @media (min-width: 600px) {
        gap: 10px;
        height: 312px;
        flex-direction: column;
      }
    `}  
    ${props.type === 'editor-pick' && css`
      gap: 10px;
      @media (min-width: 600px) {
        flex-direction: column;
        height: 220px;
      }
    `}
  `}
`;
export const StyledCover = styled(Link)`
  ${(props: CardProps) => css`
    position: relative;
    ${['latest', 'related', 'default'].includes(props.type) && css`
      width: 40%;
      min-height: 80px;
      height: 80px;
      > img {
        height: inherit;
        width: 100%;
      }
      ${['latest', 'default'].includes(props.type) && css`
        @media (min-width: 600px) {
          height: 150px;
        }
      `}
      ${props.type === 'related' && css`
        @media (min-width: 600px) {
          width: 100%;
          height: 194px;
        }
      `}
    `}
    ${props.type === 'trending' && css`
      width: 100%;
      height: 90px;
      > img {
        height: inherit;
        width: 100%;
      }
      @media (min-width: 600px) {
        height: 100%;
      }
    `}
    ${props.type === 'editor-pick' && css`
      display: none;
      @media (min-width: 600px) {
        display: block;
        width: 100%;
        height: 117px;
        > img {
          height: inherit;
          width: 100%;
        }
      }
    `}
  `}
`
export const StyledDesc = styled.div`
  ${(props: CardProps) => css`
    a {
      text-decoration: none;
    }
    ${['latest', 'related', 'default'].includes(props.type) && css`
      width: 60%;
      padding-inline-start: 10px;
      display: flex;
      flex-direction: column;
      ${props.type === 'related' && css`
        @media (min-width: 600px) {
          width: 100%;
          padding-inline-start: 0;
        }
      `}
    `}
    ${props.type === 'trending' && css`
      width: 100%;
    `}
    ${props.type === 'editor-pick' && css`
      @media (min-width: 600px) {
        flex: 1;
      }
    `}
  `}
  
`
export const StyledExcerpt = styled(Text)`
  display: none;
  color: #666;
  font-size: 16px;
  transition: 0.5s;
  &:hover {
    opacity: .7;
  }
  ${(props: CardProps) => css`
    @media(min-width: 600px){
      ${props.type === 'editor-pick' ? css`display: none`: css`display: block`}
    }
  `}
`
export const StyledTitle = styled(Text)`
  display: -webkit-box;
  margin: 0;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  transition: 0.5s;
  &:hover {
    opacity: .7;
  }
  @media(min-width: 600px){
    margin-bottom: 0;
    font-size: 18px;
  }
`
export const StyledLabel = styled(Text)`
  a {
    color: gray;
    font-size: 12px;
    text-transform: capitalize;
    transition: 0.5s;
    &:hover {
      opacity: .7;
    }
    @media(min-width: 600px){
      font-size: 13px;
    }
  }
`