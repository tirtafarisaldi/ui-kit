import { ImageProps } from "./Image.types";

const ArticleImage: ImageProps ={
    sourceData: {
      title: 'tes',
      imageUrl:'https://image.sotogubeng.com/content-images/post/20230511/british-blue-2009-cropped-e33340b3760cf2463a61f5da342db895.jpg',
      sourceName: 'article_tes',
    },
    loadingImg: 'lazy',
    srcBlur: 'https://image.sotogubeng.com/content-images/post/20230511/british-blue-2009-cropped-e33340b3760cf2463a61f5da342db895.jpg',
    type: 'article',
    widthImg: '100%',
    heightImg: '400px',
 };
  
const DefaultImage: ImageProps = {
    imageUrl: 'https://image.sotogubeng.com/content-images/post/20230313/164045279-486704675670235-5112036627823917628-n-9236129d39e410cf9cdb968071fcc674.jpg',
    srcBlur: 'https://image.sotogubeng.com/content-images/post/20230313/164045279-486704675670235-5112036627823917628-n-9236129d39e410cf9cdb968071fcc674.jpg',
    loadingImg: 'lazy',
    alt: 'tes',
    priorityImg: true,
    type: 'default',
};

export {
    ArticleImage,
    DefaultImage
}