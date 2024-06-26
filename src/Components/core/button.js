import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text,View
} from 'react-native';


import {mvs} from '../../Services/metrices';
import Row from './Row';
import Bold from './bold';
//import { useTheme } from "../config/theme";

const PrimaryButton = ({
  onclick,
  label = '',
  color,
  width,
  height,
  style,
  bgColor,
  loading,
  disabled,
  iconName,
  fontSize,
  iconColor='white',
}) => {
   
  return (
    <TouchableOpacity
      style={{...styles.main, width: width, height: height,backgroundColor:bgColor, ...style}}
      onPress={onclick}>
       
        <View style={{alignItems: 'center'}}>
          {loading ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <>
               
              <Bold style={{color: color,fontSize:fontSize}} label={label}/>
            </>
          )}
        </View>
     
    </TouchableOpacity>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(10),
    marginVertical: mvs(20),
    padding:10
  },
});
