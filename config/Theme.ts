const colors = {
  primary: '#ffa100', // Color for buttons or links
  bg: '#fff', // Background color
  white: '#fff',
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
};

const transitions = {
  normal: '0.200s',
};

const fontSize = {
  small: '0.9rem',
  big: '2.9rem',
};

export default {
  colors,
  transitions,
  fontSize,
};

/**
 * if total pges is more than 10
 *
 * make the middle ones ...
 *
 * total - 10 = middle amount to go
 *
 * middleBottom = 5
 * middleTop = total - 5
 *
 * if(i - middleBottom <= 0 && i - middleTop < 0) {
 * }
 */
