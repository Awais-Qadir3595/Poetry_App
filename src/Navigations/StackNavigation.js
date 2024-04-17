import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Views/Login/Login';
import SignUp from '../Views/SignUp/Signup';
import Splash from '../Views/Splash/Splash';
import Dashboard from '../Views/Dashboard/Dashboard';
import MyTabs from './MyTabs';
import Categories from '../Views/Categories/Categories';
import UserProfile from '../Views/UserProfile/UserProfile';


const Stack = createNativeStackNavigator();

const StackFlow = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyTabs'>
        <Stack.Screen name="splash" component={Splash} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="MyTabs" component={MyTabs} options={{
          headerShown: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default StackFlow;

// home stack is child of tab navigation
const Home = () => {
  return (
    <Stack.Navigator initialRouteName='MyTabs'>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{
        headerShown: false,
      }} />
       <Stack.Screen name="Categories" component={Categories} options={{
        headerShown: false,
      }} />

<Stack.Screen name="UserProfile" component={UserProfile} options={{
        headerShown: false,
      }} />

    </Stack.Navigator>
  )
}
export { Home };