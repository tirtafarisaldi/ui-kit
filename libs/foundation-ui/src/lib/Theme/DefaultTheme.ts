import {type ColorsType} from '../Colors';

export interface DefaultTheme {
  type: 'light' | 'dark';
  common: {
    background: {primary: ColorsType; secondary: ColorsType};
    component: {
      placeholder: ColorsType;
      background: ColorsType;
      text: ColorsType;
      subText: ColorsType;
      outline: ColorsType;
    };
  };
}