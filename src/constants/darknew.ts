import {
  ITheme,
  ThemeColors,
  ThemeGradients,
  ThemeSizes,
  ThemeSpacing,
} from './types';

import { THEME as commonTheme } from './theme';

export const COLORS: ThemeColors = {
  text: '#F6F6F6', // light text
  primary: '#FFCB74', // gold accent
  secondary: '#2F2F2F',
  tertiary: '#FFCB74',

  black: '#111111',
  white: '#FFFFFF',

  dark: '#111111',
  light: '#2F2F2F',

  gray: '#8C8C8C',

  danger: '#EA0606',
  warning: '#FFC107',
  success: '#82D616',
  info: '#17C1E8',

  card: '#2F2F2F',
  background: '#111111',

  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.4)',

  focus: '#FFCB74',
  input: '#2F2F2F',

  switchOn: '#FFCB74',
  switchOff: '#2F2F2F',

  checkbox: ['#FFCB74', '#2F2F2F'],
  checkboxIcon: '#FFFFFF',

  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',

  icon: '#F6F6F6',
  blurTint: 'dark',
  link: '#FFCB74',
};

export const GRADIENTS: ThemeGradients = {
  primary: ['#FFCB74', '#2F2F2F'],
  secondary: ['#2F2F2F', '#111111'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#2F2F2F', '#111111'],
  dark: ['#111111', '#000000'],

  white: [String(COLORS.white), '#F6F6F6'],
  black: [String(COLORS.black), '#111111'],

  divider: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)'],
  menu: [
    'rgba(47,47,47,0.95)',
    'rgba(17,17,17,0.9)',
    'rgba(47,47,47,0.95)',
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
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,

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

export const THEMENEW: ITheme = {
  ...commonTheme,
  colors: COLORS,
  gradients: GRADIENTS,
  sizes: { ...SIZES, ...commonTheme.sizes, ...SPACING },
};
