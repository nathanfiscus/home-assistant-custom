import { createMuiTheme } from 'material-ui/styles';
import * as PlatformColors from './colors';

export const PlatformTheme = createMuiTheme({
  palette: {
    direction: 'ltr',
    type: 'dark',
    common: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'rgba(0,0,0,0)',
      fullBlack: 'rgba(0, 0, 0, 1)',
      darkBlack: 'rgba(0, 0, 0, 0.87)',
      lightBlack: 'rgba(0, 0, 0, 0.54)',
      minBlack: 'rgba(0, 0, 0, 0.26)',
      faintBlack: 'rgba(0, 0, 0, 0.12)',
      fullWhite: 'rgba(255, 255, 255, 1)',
      darkWhite: 'rgba(255, 255, 255, 0.87)',
      lightWhite: 'rgba(255, 255, 255, 0.54)'
    },
    primary: PlatformColors.purple,
    secondary: PlatformColors.green,
    error: PlatformColors.red,
    grey: PlatformColors.secondarybase,
    shades: {
      dark: {
        text: {
          primary: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
          hint: 'rgba(255, 255, 255, 0.5)',
          icon: 'rgba(255, 255, 255, 0.5)',
          divider: 'rgba(255, 255, 255, 0.12)',
          lightDivider: 'rgba(255, 255, 255, 0.075)'
        },
        input: {
          bottomLine: 'rgba(255, 255, 255, 0.7)',
          helperText: 'rgba(255, 255, 255, 0.7)',
          labelText: 'rgba(255, 255, 255, 0.7)',
          inputText: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.5)'
        },
        action: {
          active: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.3)'
        },
        background: {
          default: PlatformColors.base[500],
          paper: PlatformColors.secondarybase[500],
          appBar: '#212121',
          contentFrame: '#212121',
          status: '#000'
        }
      },
      light: {
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.38)',
          hint: 'rgba(0, 0, 0, 0.38)',
          icon: 'rgba(0, 0, 0, 0.38)',
          divider: 'rgba(0, 0, 0, 0.12)',
          lightDivider: 'rgba(0, 0, 0, 0.075)'
        },
        input: {
          bottomLine: 'rgba(175, 175, 175, 0.42)',
          helperText: 'rgba(0, 0, 0, 0.54)',
          labelText: 'rgba(0, 0, 0, 0.54)',
          inputText: 'rgba(0, 0, 0, 0.87)',
          disabled: 'rgba(0, 0, 0, 0.42)'
        },
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.26)'
        },
        background: {
          default: PlatformColors.base[500],
          paper: PlatformColors.secondarybase[500],
          appBar: '#f5f5f5',
          contentFrame: '#eeeeee'
        }
      }
    },
    text: {
      primary: PlatformColors.text[500],
      secondary: PlatformColors.secondarytext[500],
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      icon: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      lightDivider: 'rgba(0, 0, 0, 0.075)'
    },
    input: {
      bottomLine: 'rgba(100, 100, 100, 0.42)',
      helperText: 'rgba(0, 0, 0, 0.54)',
      labelText: 'rgba(0, 0, 0, 0.54)',
      inputText: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.42)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)'
    },
    background: {
      default: PlatformColors.base[500],
      paper: PlatformColors.secondarybase[500],
      appBar: '#f5f5f5',
      contentFrame: '#eeeeee'
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      display4: {
        fontSize: 112,
        fontWeight: 300,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: '-.04em',
        lineHeight: 1,
        color: 'rgba(0, 0, 0, 0.54)'
      },
      display3: {
        fontSize: 56,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: '-.02em',
        lineHeight: 1.35,
        color: 'rgba(0, 0, 0, 0.54)'
      },
      display2: {
        fontSize: 45,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '48px',
        color: 'rgba(0, 0, 0, 0.54)'
      },
      display1: {
        fontSize: 34,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '40px',
        color: 'rgba(0, 0, 0, 0.54)'
      },
      headline: {
        fontSize: 24,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '32px',
        color: 'rgba(0, 0, 0, 0.87)'
      },
      title: {
        fontSize: 21,
        fontWeight: 500,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 1,
        color: 'rgba(0, 0, 0, 0.87)'
      },
      subheading: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '24px',
        color: 'rgba(0, 0, 0, 0.87)'
      },
      body2: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '24px',
        color: 'rgba(0, 0, 0, 0.87)'
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '20px',
        color: 'rgba(0, 0, 0, 0.87)'
      },
      caption: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 1,
        color: 'rgba(0, 0, 0, 0.54)'
      },
      button: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 500,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
      }
    },
    mixins: {
      toolbar: {
        minHeight: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: 48
        },
        '@media (min-width:600px)': {
          minHeight: 64
        }
      }
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: [360, 600, 960, 1280, 1920]
    },
    shadows: [
      'none',
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
      '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
      '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
      '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
      '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
      '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
      '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
      '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
      '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
      '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
      '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
      '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
      '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
      '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
    ],
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
      }
    },
    spacing: {
      unit: 8
    },
    zIndex: {
      mobileStepper: 900,
      menu: 1000,
      appBar: 1100,
      drawerOverlay: 1200,
      navDrawer: 1300,
      dialogOverlay: 1400,
      dialog: 1500,
      layer: 2000,
      popover: 2100,
      snackbar: 2900,
      tooltip: 3000
    }
  },
  overrides: {
    MuiInput: {
      inkbar: {
        '&:after': {
          backgroundColor: PlatformColors.blue[500]
        }
      }
    }
  }
});

export const Colors = PlatformColors;
