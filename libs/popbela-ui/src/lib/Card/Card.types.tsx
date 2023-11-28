import { LinkProps } from 'next/link';

type CardType =
  | 'headline'
  | 'exclusive'
  | 'trending'
  | 'latest'
  | 'default'
  | 'latest-small';
type CardLabelsProps = {
  title: string;
  category: string;
  author: string;
  date: string;
};

export interface CardProps {
  labels: CardLabelsProps;
  thumbnailUrl: string;
  link: LinkProps;
  type: CardType;
}
