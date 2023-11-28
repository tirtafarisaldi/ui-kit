import { Image, Link, Text, View } from 'foundation-ui';
import { StyledCard } from './Card.style';
import { CardProps } from './Card.types';

export function Card(props: CardProps) {
  const { labels, thumbnailUrl, link, type = 'default' } = props;

  return (
    <StyledCard {...props}>
      <View
        id="card-content"
        backgroundColor={type === 'exclusive' ? 'black' : 'white'}
      >
        <Link {...link}>
          <View
            width={'100%'}
            height={'100%'}
            display="flex"
            flexDirection={
              ['trending', 'latest-small'].includes(type) ? 'row' : 'column'
            }
          >
            <View
              backgroundColor="red90"
              height={
                ['trending', 'latest-small'].includes(type) ? 'auto' : '65%'
              }
              width={
                ['trending', 'latest-small'].includes(type) ? '40%' : '100%'
              }
            >
              <Image src={thumbnailUrl} alt={labels.title} />
            </View>
            <View
              paddingY={['trending', 'latest-small'].includes(type) ? 0 : 18}
              paddingX={['trending', 'latest-small'].includes(type) ? 4 : 18}
              display="flex"
              width={
                ['trending', 'latest-small'].includes(type) ? '50%' : 'auto'
              }
              flexJustifyContent="space-between"
              flexDirection="column"
              flexGap={10}
            >
              {/* hidden category trending type */}
              {type !== 'trending' && (
                <View>
                  <Text fontColor="redDark" fontWeight="bold">
                    {labels.category}
                  </Text>
                </View>
              )}
              {/* end */}

              <View
                style={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                <Text
                  as={
                    ['trending', 'latest-small'].includes(type) ? 'label' : 'h2'
                  }
                  fontColor={type === 'exclusive' ? 'white' : 'black'}
                  fontSize={
                    ['trending', 'latest-small'].includes(type) ? 'md' : 'lg'
                  }
                  fontWeight="bold"
                  style={{ margin: '0' }}
                >
                  {labels.title}
                </Text>
              </View>
              <View display="flex" flexJustifyContent="space-between">
                {type !== 'trending' && (
                  <Text fontColor="gray60" fontSize="xs">
                    {labels.author}
                  </Text>
                )}
                <Text
                  fontColor={
                    ['trending', 'latest-small'].includes(type)
                      ? 'redDark'
                      : 'gray60'
                  }
                  fontSize="xs"
                >
                  {labels.date}
                </Text>
              </View>
            </View>
          </View>
        </Link>
      </View>
    </StyledCard>
  );
}

export default Card;
