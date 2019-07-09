import {
  themes,
  styles as textStyles,
  spacing,
  fontFamily,
  breakpoints as carbonBreakpoints,
} from '@carbon/elements';

import getButtons from './variants/getButtons';

const theme = ({ themeColor }) => {
  const colors = themes[themeColor] || themes.white;
  const buttons = getButtons(colors);
  const breakpoints = [];
  const mq = {};

  Object.entries(carbonBreakpoints).forEach(([key, value]) => {
    breakpoints.push(value.width);
    mq[key] = `@media screen and (min-width: ${value.width})`;
  });

  return {
    colors,
    space: [0, ...spacing],
    textStyles,
    breakpoints,
    buttons,
    mq,
    fonts: fontFamily('sans'),
  };
};

export default theme;
