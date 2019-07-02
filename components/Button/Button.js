import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { width, space, textStyle, buttonStyle } from 'styled-system';

const getPaddingRight = props => {
  if (props.variant !== 'ghost') return '60px';
  if (props.icon) return '40px';
  return '13px';
};

const buttonSize = props => {
  const paddingRight = getPaddingRight(props);
  switch (props.size) {
    case 'small':
      return {
        minHeight: '32px',
        padding: `4px ${paddingRight} 4px 13px`,
      };
    case 'field':
      return {
        minHeight: '40px',
        padding: `8px ${paddingRight} 8px 13px`,
      };
    default:
      return {
        minHeight: '48px',
        padding: `12px ${paddingRight} 12px 13px`,
      };
  }
};

const ButtonStyles = styled.button.attrs({
  textStyle: 'bodyShort01',
})`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-shrink: 0;
  text-decoration: none;
  transition: all 70ms cubic-bezier(0, 0, 0.38, 0.9);
  border: 3px solid transparent;
  max-width: 320px;
  outline: 1px solid;
  outline-color: transparent;
  outline-offset: -4px;
  color: ${props => props.theme.colors.text04};

  &:focus {
    outline-color: ${props => props.theme.colors.ui02};
    border-color: ${props => props.theme.colors.focus};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.colors.ui04};
    background: #bebebe;
    border-color: #bebebe;
  }

  svg {
    position: absolute;
    right: 8px;
    path {
      fill: currentColor;
    }
  }

  ${width} ${space} ${textStyle} ${buttonSize} ${buttonStyle} 
`;

const Button = ({ children, icon, ...props }) => (
  <ButtonStyles icon={icon} {...props}>
    {children}
    {icon}
  </ButtonStyles>
);

Button.defaultProps = {
  variant: 'primary',
};

Button.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.element,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'ghost',
  ]),
};

export default Button;
