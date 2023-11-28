import styled from '@emotion/styled';
import { Button } from 'foundation-ui';
import { ButtonProps } from './Button.types';
import { css } from '@emotion/react';

const IconLoadMore: string =
    require('../../../assets/icons/diamond.svg').default;

export const StyledButton = styled(Button)`
    background-color: #FFFFFF;
    border-width: 1px;
    border-color: #8b8b8b;
    transition: 0.3s;
    &:hover {
        background-color: #d72772;
        color: #FFFFFF;
        border-color: #d72772;
    }
    &:focus {
        background-color: #d72772;
        color: #FFFFFF;
        border-color: #d72772;
    }
    ${(props: ButtonProps) => css`
        color: #333;
        font-weight: 700;
        font-size: 12px;
        @media (min-width: 960px) {
            font-size: 14px;
        }
        ${props.variant === 'load-more' && css`
            margin-left: 27px;
            border-color: #E2E8F0;
            position: relative;
            padding-left: 15px;
            padding-right: 15px;
            &:before {
                position: absolute;
                top: 0;
                content: "";
                background-image: url(${IconLoadMore});
                background-repeat: no-repeat;
                background-size: 37px;
                margin: -5px 0;
                display: inline-block;
                height: 37px;
                width: 37px;
                left: -27px;
                transform: rotate(-15deg);
            };
            &:after{
                position: absolute;
                top: 0;
                content: "";
                background-image: url(${IconLoadMore});
                background-repeat: no-repeat;
                background-size: 37px;
                margin: -5px 0;
                display: inline-block;
                height: 37px;
                width: 37px;
                right: -27px;
                transform: rotate(15deg);
            }
            @media (min-width: 960px) {
                &:before {
                    background-size: 40px;
                    height: 40px;
                    width: 40px;
                }
                &:after {
                    background-size: 40px;
                    height: 40px;
                    width: 40px;
                }
            }
        `}
        ${props.isLoading && css`
            opacity: 0.4;
            cursor: not-allowed;
        `}
    `}
`;
