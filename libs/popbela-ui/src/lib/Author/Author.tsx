import styled from '@emotion/styled';
import { Image, Text, View } from 'foundation-ui';
import { AuthorProps } from './Author.types';

const StyledAuthor = styled.div`
  color: pink;
`;

export function Author({ imageUrl, name }: AuthorProps) {
  return (
    <StyledAuthor>
      <View display="flex" flexAlignItems="center" flexGap={8}>
        <View width={40} height={40} borderRadius={20}>
          <Image width={'100%'} height={'100%'} src={imageUrl} alt={name} />
        </View>

        <Text
          fontSize="md"
          fontWeight="semibold"
          fontColor="gray70"
          style={{ textTransform: 'uppercase' }}
        >
          {name}
        </Text>
      </View>
    </StyledAuthor>
  );
}

export default Author;
