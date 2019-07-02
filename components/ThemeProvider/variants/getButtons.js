const getButtons = colors => ({
  primary: {
    backgroundColor: colors.interactive01,
    '&:hover:not([disabled])': {
      backgroundColor: colors.hoverPrimary,
    },
    '&:active:not([disabled])': {
      backgroundColor: colors.activePrimary,
    },
  },
  secondary: {
    backgroundColor: colors.interactive02,
    '&:hover:not([disabled])': {
      backgroundColor: colors.hoverSecondary,
    },
    '&:active:not([disabled])': {
      backgroundColor: colors.activeSecondary,
    },
  },
  tertiary: {
    backgroundColor: colors.uiBackground,
    border: `1px solid ${colors.interactive03}`,
    color: colors.interactive03,
    '&:hover:not([disabled])': {
      backgroundColor: colors.hoverTertiary,
      color: colors.text04,
    },
    '&:active:not([disabled])': {
      backgroundColor: colors.activeTertiary,
    },
  },
  danger: {
    backgroundColor: '#dc222b',
    '&:hover:not([disabled])': {
      backgroundColor: colors.hoverDanger,
    },
    '&:active:not([disabled])': {
      backgroundColor: colors.activeDanger,
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.interactive04,
    '&:hover:not([disabled])': {
      backgroundColor: colors.hoverUI,
    },
    '&:active:not([disabled])': {
      backgroundColor: colors.activeUI,
    },
    '&:disabled': {
      background: 'transparent',
      borderColor: 'transparent',
      color: '#bebebe',
    },
  },
});

export default getButtons;
