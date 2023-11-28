import { SyntheticEvent, useEffect, useState } from 'react';

import { Link, Skeleton, View, Image as FoundationImage } from 'foundation-ui';
import { imageLoader } from '../../utils/LoaderImage';
import { ImageProps, ImageLoaderProps } from './Image.types';
import { IMAGE_FALLBACK_200 } from '../../constants/image';
import getBase64ImageFromUrl from '../../utils/getBase64Image';

export const ImageLoader = ({
  alt,
  noLoader,
  loading,
  src = '',
  srcBlur = IMAGE_FALLBACK_200,
  fallback = IMAGE_FALLBACK_200,
  type = 'default',
  priority = false,
  ...rest
}: ImageLoaderProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [onErrorSrc, setOnErrorSrc] = useState<string>('');
  const [blurSrc, setBlurSrc] = useState<string>(srcBlur);

  // error handling apabila ada kerusakan selama fetch src
  function handleOnError(
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void {
    if (e?.currentTarget?.src !== fallback) {
      setOnErrorSrc(fallback);
    }
  }

  useEffect(() => {
    getBase64ImageFromUrl(`${srcBlur}?width=200&height=200&format=webp`).then(
      (result: string) => setBlurSrc(result)
    );

    setImgSrc(src);
  }, [src, srcBlur]);

  const imageSrc = onErrorSrc || imgSrc;

  return (
    <>
      {!noLoader && isLoadingImage && <Skeleton />}
      <FoundationImage
        {...rest}
        nextImageProps={{
          priority,
          alt,
          placeholder: 'blur',
          fill: true,
          src: imageSrc,
          blurDataURL: blurSrc,
          sizes:
            '(max-width: 320) 33vw,(max-width: 640) 55vw,(max-width: 1200px) 55vw,(max-width: 1600px) 75vw, 80vw',
          loader: imageLoader,
          style: {
            objectFit: 'cover',
          },
          onLoadingComplete: () => {
            !rest.debug && setIsLoadingImage(false);
          },
          onError: (e: SyntheticEvent<HTMLImageElement, Event>) =>
            handleOnError(e),
        }}
        objectFit="cover"
        isCDN
        src={imageSrc}
        alt={alt ?? 'ImageLoader'}
      />
    </>
  );
};

export const Image = (props: ImageProps) => {
  const {
    sourceData,
    sourcePosition = 'bottomRight',
    heightImg = 'auto',
    widthImg = 'full',
    priorityImg = false,
    srcBlur,
    alt = '',
    imageUrl = '',
    loadingImg,
    type,
    ...rest
  } = props;

  const styleSource = (position: string) => {
    switch (position) {
      case 'topRight':
        return {
          top: '0',
          right: '0',
        };
      case 'topLeft':
        return {
          top: '0',
          left: '0',
        };
      case 'bottomRight':
        return {
          bottom: '0',
          right: '0',
        };
      case 'bottomLeft':
        return {
          bottom: '0',
          left: '0',
        };
      default:
        return {
          bottom: '0',
          right: '0',
        };
    }
  };
  
  if (type === 'article') {
    const { imageUrl = '', sourceName = '', title = '' } = sourceData ?? {};
    return (
      <View data-testid="card-image-article">
        <View
          {...rest}
          style={{
            boxSizing: 'border-box',
            position: 'relative',
          }}
          position="relative"
          width={widthImg === 'full' ? '100%' : widthImg}
          height={heightImg === 'auto' ? 'auto' : heightImg}
          minHeight="200px"
          display="block"
        >
          <ImageLoader
            data-testid="card-image"
            alt={title}
            src={imageUrl}
            srcBlur={srcBlur}
            loader={imageLoader}
            priority={priorityImg}
            loading={loadingImg}
          />
          {sourceName && type === 'article' && (
            <View
              data-testid="card-image-source"
              position="absolute"
              padding="1px 6px"
              style={{
                background: 'rgba(0,0,0,.5)',
                fontSize: '16px',
                fontStyle: 'italic',
                ...styleSource(sourcePosition),
              }}
            >
              <Link
                className="!text-white"
                href={'/'}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {sourceName}
              </Link>
            </View>
          )}
        </View>
      </View>
    );
  }
  return (
    <ImageLoader
      style={rest.style}
      loading={loadingImg}
      src={imageUrl}
      srcBlur={srcBlur}
      alt={alt}
      fill
      priority={priorityImg}
    />
  );
};
