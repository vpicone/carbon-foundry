import React from 'react';
import PropTypes from 'prop-types';
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { fontFamily } from '@carbon/elements';
import getCarbonTheme from './theme';

const Base = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  ${fontFamily('sans')};
`;
const ThemeProvider = ({ themeColor, children, ...props }) => (
  <StyledThemeProvider theme={getCarbonTheme({ themeColor })} {...props}>
    <Base>{children}</Base>
  </StyledThemeProvider>
);

ThemeProvider.propTypes = {
  /** Array of pixel values for custom breakpoint overrides */
  themeColor: PropTypes.string,
  children: PropTypes.element,
};

export default ThemeProvider;
