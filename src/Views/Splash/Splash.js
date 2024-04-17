import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import { styles } from './Style';
import { Logo } from '../../Assets/svgs';

const Splash = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current;

  setTimeout(function () {
    navigation.navigate('Login')
  }, 2000);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);


  return (
    <View style={styles.main}>
      <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
        <Logo/>
      </Animated.View>
    </View>
  );
};
export default Splash;