import {
  themes,
  styles as textStyles,
  spacing,
  fontFamily,
  breakpoints as carbonBreakpoints,
} from '@carbon/elements';

import getButtons from './variants/getButtons';

const breakpoints = Object.entries(carbonBreakpoints).map(
  ([, value]) => value.width
);

const theme = ({ themeColor }) => {
  const colors = themes[themeColor] || themes.white;
  const buttons = getButtons(colors);
  return {
    colors,
    space: [0, ...spacing],
    textStyles,
    breakpoints,
    buttons,
    fonts: fontFamily('sans'),
  };
};

export default theme;
