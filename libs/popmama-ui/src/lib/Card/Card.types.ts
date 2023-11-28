export type CardType =
  | 'default'
  | 'latest'
  | 'trending'
  | 'related'
  | 'editor-pick'

type category = {
  name?: string;
  custom_name?: string;
  url?: string;
}
type media = {
  source_url?: string;
  thumbnail_url?:string;
  width: number;
  height: number;
}
export interface CardProps {
    /**
     * tipe card yang akan di gunakan
     */
    type: CardType;
    subCategory?: category;
    title?: string;
    media?: media;
    excerpt?: string;
    url?: string;
}