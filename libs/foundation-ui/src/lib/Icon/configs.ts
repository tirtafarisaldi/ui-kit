import { ColorsType } from '../Colors';
import { IconSize } from './Icon.types';

export const iconSizesMap: Record<IconSize, number> = {
  '2xl': 64,
  'xl': 48,
  'lg': 32,
  'md': 24,
  'sm': 20,
  'xs': 16,
  'xxs': 12,
};

export const iconColorFilter: Record<ColorsType, string> = {
  black:
    'invert(0%) sepia(6%) saturate(26%) hue-rotate(336deg) brightness(103%) contrast(100%);',
  white:
    'invert(100%) sepia(0%) saturate(1534%) hue-rotate(43deg) brightness(114%) contrast(100%)',
  transparent: 'Alpha(opacity=0)',
  blue: 'invert(43%) sepia(99%) saturate(434%) hue-rotate(161deg) brightness(93%) contrast(96%)',
  blue48:
    'invert(46%) sepia(97%) saturate(919%) hue-rotate(162deg) brightness(98%) contrast(96%)',
  blue70:
    ' invert(67%) sepia(20%) saturate(4474%) hue-rotate(168deg) brightness(104%) contrast(97%)',
  blue90:
    'invert(89%) sepia(55%) saturate(2368%) hue-rotate(174deg) brightness(107%) contrast(99%)',
  cyan41:
    ' invert(66%) sepia(37%) saturate(903%) hue-rotate(130deg) brightness(90%) contrast(84%)',
  cyan70:
    'invert(92%) sepia(46%) saturate(3027%) hue-rotate(154deg) brightness(106%) contrast(83%)',
  cyan90:
    'invert(92%) sepia(16%) saturate(374%) hue-rotate(145deg) brightness(105%) contrast(95%)',
  gray20:
    'invert(97%) sepia(95%) saturate(2%) hue-rotate(339deg) brightness(102%) contrast(94%)',
  gray30:
    'invert(99%) sepia(2%) saturate(402%) hue-rotate(51deg) brightness(111%) contrast(87%)',
  gray40:
    'invert(99%) sepia(3%) saturate(3640%) hue-rotate(197deg) brightness(115%) contrast(73%)',
  gray50:
    'invert(100%) sepia(0%) saturate(7471%) hue-rotate(57deg) brightness(106%) contrast(60%)',
  gray60:
    'invert(63%) sepia(0%) saturate(0%) hue-rotate(175deg) brightness(97%) contrast(95%)',
  gray70:
    'invert(47%) sepia(8%) saturate(134%) hue-rotate(314deg) brightness(95%) contrast(81%)',
  gray80:
    'invert(40%) sepia(1%) saturate(0%) hue-rotate(12deg) brightness(97%) contrast(88%)',
  gray90:
    'invert(13%) sepia(0%) saturate(0%) hue-rotate(255deg) brightness(104%) contrast(83%)',
  darkGray: 
    'invert(18%) sepia(38%) saturate(7%) hue-rotate(315deg) brightness(98%) contrast(92%);',
  green55:
    'invert(76%) sepia(10%) saturate(2484%) hue-rotate(62deg) brightness(89%) contrast(88%)',
  green70:
    'invert(84%) sepia(14%) saturate(982%) hue-rotate(62deg) brightness(93%) contrast(92%)',
  green90:
    'invert(94%) sepia(12%) saturate(367%) hue-rotate(59deg) brightness(103%) contrast(90%)',
  purple51:
    'invert(25%) sepia(63%) saturate(2066%) hue-rotate(235deg) brightness(94%) contrast(83%)',
  purple70:
    'invert(65%) sepia(27%) saturate(1089%) hue-rotate(207deg) brightness(92%) contrast(81%)',
  purple90:
    'invert(90%) sepia(15%) saturate(220%) hue-rotate(207deg) brightness(103%) contrast(94%)',
  red56:
    ' invert(31%) sepia(56%) saturate(3679%) hue-rotate(336deg) brightness(95%) contrast(87%)',
  red70:
    'invert(57%) sepia(55%) saturate(861%) hue-rotate(311deg) brightness(105%) contrast(86%)',
  red90:
    'invert(87%) sepia(4%) saturate(1276%) hue-rotate(307deg) brightness(99%) contrast(98%)',
  redVividCerise: 
    'filter: invert(27%) sepia(47%) saturate(6402%) hue-rotate(320deg) brightness(89%) contrast(89%);',
  cyanDark:
    'invert(40%) sepia(18%) saturate(3017%) hue-rotate(139deg) brightness(91%) contrast(103%)',
  cyan: 'invert(41%) sepia(38%) saturate(2636%) hue-rotate(151deg) brightness(97%) contrast(97%)',
  cyanLight:
    'invert(57%) sepia(74%) saturate(364%) hue-rotate(131deg) brightness(93%) contrast(92%)',
  redDark:
    'invert(18%) sepia(41%) saturate(5625%) hue-rotate(333deg) brightness(81%) contrast(103%)',
  red: 'invert(13%) sepia(58%) saturate(7067%) hue-rotate(340deg) brightness(100%) contrast(90%)',
  redLight:
    'invert(36%) sepia(48%) saturate(3456%) hue-rotate(325deg) brightness(96%) contrast(85%)',
  orangeDark:
    'invert(31%) sepia(80%) saturate(1035%) hue-rotate(358deg) brightness(105%) contrast(95%)',
  orange:
    'invert(51%) sepia(53%) saturate(2458%) hue-rotate(354deg) brightness(94%) contrast(99%)',
  orangeLight:
    'invert(52%) sepia(89%) saturate(417%) hue-rotate(340deg) brightness(103%) contrast(90%)',
  greenDark:
    'invert(42%) sepia(12%) saturate(2401%) hue-rotate(71deg) brightness(98%) contrast(80%)',
  green:
    'invert(59%) sepia(6%) saturate(4479%) hue-rotate(71deg) brightness(94%) contrast(83%)',
  greenLight:
    'invert(74%) sepia(6%) saturate(2612%) hue-rotate(71deg) brightness(88%) contrast(88%)',
  blueDark:
    'invert(34%) sepia(92%) saturate(794%) hue-rotate(171deg) brightness(86%) contrast(89%)',
  blueLight:
    'invert(57%) sepia(78%) saturate(347%) hue-rotate(162deg) brightness(87%) contrast(101%)',
  smokeDark:
    'invert(92%) sepia(22%) saturate(158%) hue-rotate(176deg) brightness(99%) contrast(97%)',
  smokeLight:
    'invert(91%) sepia(23%) saturate(53%) hue-rotate(193deg) brightness(103%) contrast(98%)',
  darkBlue90:
    'invert(4%) sepia(5%) saturate(6978%) hue-rotate(161deg) brightness(93%) contrast(100%)',
  darkBlue80:
    'invert(8%) sepia(9%) saturate(3734%) hue-rotate(162deg) brightness(93%) contrast(101%)',
  darkBlue70:
    'invert(10%) sepia(71%) saturate(721%) hue-rotate(164deg) brightness(96%) contrast(98%)',
  darkBlue60:
    'invert(13%) sepia(22%) saturate(2291%) hue-rotate(166deg) brightness(99%) contrast(97%)',
  darkBlue50:
    'invert(17%) sepia(8%) saturate(6533%) hue-rotate(168deg) brightness(99%) contrast(96%)',
  darkBlue40:
    'invert(20%) sepia(24%) saturate(2987%) hue-rotate(174deg) brightness(92%) contrast(93%)',
  darkBlue30:
    'invert(20%) sepia(88%) saturate(983%) hue-rotate(176deg) brightness(97%) contrast(90%)',
  darkBlue20:
    'invert(19%) sepia(83%) saturate(2102%) hue-rotate(186deg) brightness(93%) contrast(85%)',
  darkBlue10:
    'invert(20%) sepia(96%) saturate(2107%) hue-rotate(187deg) brightness(92%) contrast(83%)',
  cyanDarkest: '',
  cyanLightest: '',
  redDarkest: '',
  redLightest: '',
  orangeDarkest: '',
  orangeLightest: '',
  greenDarkest: '',
  greenLightest: '',
  blueDarkest: '',
  blueLightest: '',
  purple: '',
};