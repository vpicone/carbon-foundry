import React from 'react';
import styled from 'styled-components';
import { textStyle } from 'styled-system';
import PropTypes from 'prop-types';

const LinkStyles = styled.a.attrs({
  textStyle: 'bodyShort01',
})`
  color: ${props => props.theme.colors.link01};
  text-decoration: none;
  outline: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.colors.focus};
  }

  &:active,
  &:active:visited {
    color: ${props => props.theme.colors.text01};
    text-decoration: underline;
  }

  &:visited {
    color: ${props => props.theme.colors.link01};
  }

  &:not([href]) {
    color: ${props => props.theme.colors.disabled02};
    cursor: not-allowed;
    pointer-events: none;
    touch-action: none;
  }

  ${textStyle}
`;

const Link = React.forwardRef(function Link({ disabled, href, ...rest }, ref) {
  const disabledProps =
    disabled || !href
      ? {
          tabIndex: '-1',
          'aria-disabled': true,
          href: undefined,
        }
      : {};

  return (
    <LinkStyles
      ref={ref}
      href={href}
      role="button"
      {...disabledProps}
      {...rest}
    />
  );
});

Link.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

export default Link;
