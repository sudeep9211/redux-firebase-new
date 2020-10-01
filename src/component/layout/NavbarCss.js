import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'customClass': {
    'background': 'rgb(2, 0, 36)',
    'background': 'linear-gradient(
    59deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 37%,
    rgba(0, 212, 255, 1) 100%
  )',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'costom': {
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '10'
  },
  'nav-nav-bar': {
    'justifyContent': 'end'
  }
});
