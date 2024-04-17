import React from "react";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from "../Views/Dashboard/Dashboard";
import Favourite from "../Views/Favourite/Favourite";
import { colorsTheme } from "../Services/Color";
import { StyleSheet, View } from "react-native";
import * as SVG from '../Assets/svgs';
import WriteYourPoetry from "../Views/writeYourPoetry/writeYourPoetry";
import Login from "../Views/Login/Login";
import Label from "../Components/core/Label";
import Bold from "../Components/core/bold";
import { Home } from "./StackNavigation";
const Tab = createBottomTabNavigator();

const MyTabs = () => {


  const tabBar = [
    {
      id: 1, route: 'Home', Label: 'Home', component:Home  , activeIcon: 'Home', InActive: 'HomeInActive'
    },
    {
      id: 2, route: 'Favourite', Label: 'Favoueite', component: Favourite, activeIcon: 'HeartActive', InActive: 'HeartInActive'
    },
    {
      id: 3, route: 'Favourite', Label: 'Write poetry', component: WriteYourPoetry, activeIcon: 'PoetryActive', InActive: 'PoetryInActive'
    },
    {
      id: 4, route: 'Favourite', Label: 'Login', component: Login, activeIcon: 'PoetryActive', InActive: 'PoetryInActive'
    },
  ]
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          marginBottom:1,
          elevation: 10,
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: 'white',
          shadowColor: colorsTheme.primary

        }
      }}>

      {
        tabBar.map((item, index) => {

          const ActiveIcon = SVG[item.activeIcon];
          const InActiveIcon = SVG[item.InActive];
          return (
            <Tab.Screen name={item.Label} component={item.component} options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={styles.main}>
                  {focused ? <ActiveIcon /> : <InActiveIcon />}
                  {focused ?
                    <Bold label={item.Label} size={12} color={colorsTheme.primary} /> :
                    <Label label={item.Label} size={12} color={colorsTheme.primary} />
                  }

                </View>
              )
            }} />
          )
        })
      }

    </Tab.Navigator>
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  }
})