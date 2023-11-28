import type { IconProps, IconSize, IconExtension } from './Icon.types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { iconSizesMap, iconColorFilter } from './configs';
import { ColorsType } from '../Colors';
import { forwardRef } from 'react';

const StyledIcon = styled.img<{
  name: string;
  size?: IconSize;
  extension?: IconExtension;
  tintColor?: ColorsType | 'auto';
}>`
  ${(props) =>
    props.tintColor
      ? css`
          filter: ${props.tintColor === 'auto'
            ? iconColorFilter['black']
            : iconColorFilter[props.tintColor]};
        `
      : css``};
  width: ${(props) =>
    props.size ? iconSizesMap[props.size] : iconSizesMap.md}px;
  max-width: ${(props) =>
    props.size ? iconSizesMap[props.size] : iconSizesMap.md}px;
  height: ${(props) =>
    props.size ? iconSizesMap[props.size] : iconSizesMap.md}px;
`;

const Icon = forwardRef<HTMLImageElement, IconProps>(
  ({ icon, extension, size, tintColor, ...rest }, _) => (
    <StyledIcon
      name={`${icon} icon`}
      tintColor={tintColor}
      src={icon}
      extension={extension || 'svg'}
      size={size || 'md'}
      alt={icon}
      {...rest}
    />
  )
);

export default Icon;
