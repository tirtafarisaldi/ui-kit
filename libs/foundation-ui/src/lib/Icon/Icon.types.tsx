import { ColorsType } from '../Colors';

export type IconSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export type IconExtension = 'svg' | 'png' | 'gif';

export type IconProps = {
  icon: string;
  /**
   * [2xl : 64],
   * [xl       : 48],
   * [lg         : 32],
   * [md       : 24],
   * [sm         : 20],
   * [xs       : 16],
   * [xxs         : 12],
   */
  size?: IconSize;
  tintColor?: ColorsType | 'auto';
  extension?: IconExtension;
};
