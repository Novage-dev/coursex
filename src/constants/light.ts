import {
  ITheme,
  ThemeColors,
  ThemeGradients,
  ThemeSizes,
  ThemeSpacing,
} from './types';

import { THEME as commonTheme } from './theme';

export const COLORS: ThemeColors = {
  text: '#2c2b2bff',
  primary: '#38A954',
  secondary: '#F6F6F6',
  tertiary: '#2F2F2F',

  black: '#111111',
  white: '#FFFFFF',

  dark: '#2F2F2F',
  light: '#F6F6F6',

  gray: '#8C8C8C',

  danger: '#EA0606',
  warning: '#FFC107',
  success: '#82D616',
  info: '#17C1E8',

  card: '#FFFFFF',
  background: '#ffffff',
  backgroundnew: '#FFFFFF',

  adgrad1: '#242424ff',
  adgrad2: '#727272ff',
  adgrad3: '#7a7a7aff',
  adgrad4: '#212524ff',
  adgrad5: '#282828ff',
  adgrad6: '#a2a2a2ff',

  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.1)',

  focus: '#048426ff',
  input: '#111111',

  switchOn: '#048426ff',
  switchOff: '#E9ECEF',

  checkbox: ['#048426ff', '#0c7526ff'],
  checkboxIcon: '#111111',

  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',

  icon: '#111111',
  blurTint: 'light',
  link: '#38A954',
};

export const GRADIENTS: ThemeGradients = {
  primary: ['#38A954', '#0c7526ff'],
  secondary: ['#F6F6F6', '#FFFFFF'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#FFFFFF', '#F6F6F6'],
  dark: ['#2F2F2F', '#111111'],

  white: [String(COLORS.white), '#F6F6F6'],
  black: [String(COLORS.black), '#111111'],

  divider: ['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.02)'],
  menu: [
    'rgba(255, 255, 255, 0.95)',
    'rgba(246, 246, 246, 0.9)',
    'rgba(255, 255, 255, 0.95)',
  ],
};

export const SIZES: ThemeSizes = {
  base: 8,
  text: 14,
  radius: 6,
  padding: 20,

  h1: 44,
  h2: 36,
  h3: 28,
  h4: 22,
  h5: 18,
  p: 16,

  buttonBorder: 1,
  buttonRadius: 12,
  socialSize: 64,
  socialRadius: 16,
  socialIconSize: 26,

  shadowOffsetWidth: 0,
  shadowOffsetHeight: 4,
  shadowOpacity: 0.07,
  shadowRadius: 6,
  elevation: 2,

  inputHeight: 46,
  inputBorder: 1,
  inputRadius: 8,
  inputPadding: 12,

  cardRadius: 16,
  cardPadding: 10,

  imageRadius: 14,
  avatarSize: 32,
  avatarRadius: 8,

  switchWidth: 50,
  switchHeight: 24,
  switchThumb: 20,

  checkboxWidth: 18,
  checkboxHeight: 18,
  checkboxRadius: 5,
  checkboxIconWidth: 10,
  checkboxIconHeight: 8,

  linkSize: 12,
  multiplier: 2,
};

export const SPACING: ThemeSpacing = {
  xs: SIZES.base * 0.5,
  s: SIZES.base * 1,
  sm: SIZES.base * 2,
  m: SIZES.base * 3,
  md: SIZES.base * 4,
  l: SIZES.base * 5,
  xl: SIZES.base * 6,
  xxl: SIZES.base * 7,
};

export const THEME: ITheme = {
  ...commonTheme,
  colors: COLORS,
  gradients: GRADIENTS,
  sizes: { ...SIZES, ...commonTheme.sizes, ...SPACING },
};
