import {StyleSheet} from 'react-native';
import { colors, colorsTheme } from '../../Services/Color';
 
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:colorsTheme.primary,
     justifyContent:'center',
     alignItems:'center'
  },
});
export {styles};