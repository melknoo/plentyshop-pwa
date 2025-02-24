export type HnHeroProps = {
    content?: {
      text1?: string;
      text2?: string;
      text3?: string;
    };
    button?: {
      label?: string;
      link?: string;
      variant?: 'primary' | 'secondary';
    };
    images?: {
      hero_img?: string,
      straw_1?: string,
      straw_2?: string
    }
  };
  