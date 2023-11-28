import * as React from 'react';
import styled from '@emotion/styled';
import getImageCommonStyle from '../../utils/getImageCommonStyle';
import valueToUnit from '../../utils/valueToUnit';
import NextImage from 'next/image';

import { ImageMIMEType, type ImageProps } from './Image.types';
import { colors } from '../Colors';

interface PictureSource {
  srcSet: string;
  media: string;
  type: ImageMIMEType;
}

export interface Props extends ImageProps {
  picSrc?: PictureSource | PictureSource[];
}

const Img = styled.img`
  width: ${(props) => valueToUnit(props.width) || '100%'};
  height: ${(props) => valueToUnit(props.height) || '100%'};
  position: relative;
  overflow: hidden;
  ${(props: ImageProps) => getImageCommonStyle(props, props.theme)};

  & :before {
    content: ' ';
    display: block;

    height: 100%;
    width: 100%;
    background-color: ${colors['gray20']};
  }
`;

const Image = React.forwardRef<HTMLImageElement, Props>((props, ref) => {
  const { picSrc, isCDN, nextImageProps, ...otherProps } = props;

  const pictures = React.useMemo(() => {
    if (picSrc) {
      return Array.isArray(picSrc) ? (
        picSrc.map((val) => (
          <source media={val.media} srcSet={val.srcSet} type={val.type} />
        ))
      ) : (
        <source
          media={picSrc.media}
          srcSet={picSrc.srcSet}
          type={picSrc.type}
        />
      );
    }
    return null;
  }, [picSrc]);

  if (picSrc) {
    return (
      <picture>
        {pictures}
        <Img ref={ref} {...otherProps} />
      </picture>
    );
  }

  if (isCDN && nextImageProps) {
    return <NextImage {...nextImageProps} />;
  }

  return <Img ref={ref} {...otherProps} />;
});

export default React.memo<Props>(Image);
