import { CardProps } from './Card.types';
import {
  StyledCard,
  StyledCover,
  StyledDesc,
  StyledExcerpt,
  StyledLabel,
  StyledTitle,
} from './Card.styles';
import { Image, Link } from 'foundation-ui';

/**
 * Primary UI component for user interaction
 */

export function Card(props: CardProps) {
  const {
    type = 'default',
    url = '/',
    title,
    media,
    excerpt,
    subCategory,
  } = props;
  return (
    <StyledCard type={type}>
      <StyledCover href={url} type={type}>
        <Image objectFit="cover" src={media?.source_url ?? '/'} alt={title} />
      </StyledCover>
      <StyledDesc type={type}>
        <Link href={url}>
          <StyledTitle as="h3">{title}</StyledTitle>
          <StyledExcerpt type={type} as="p">
            {excerpt}
          </StyledExcerpt>
        </Link>
        <StyledLabel>
          <Link href={subCategory?.url ?? '/'}>{subCategory?.name}</Link>
        </StyledLabel>
      </StyledDesc>
    </StyledCard>
  );
}

export default Card;
