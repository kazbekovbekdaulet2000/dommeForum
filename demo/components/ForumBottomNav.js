import * as React from 'react';
import { Text, View } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForumList from './ForumList';
import ForumAdd from './ForumCreate';

const Tab = createBottomTabNavigator();

export default class ForumBottomNav extends React.Component {

  render(){
    return(
      <View>
        
      </View>
      // <Tab.Navigator
      //   tabBarOptions={{
      //     activeTintColor: '#000000',
      //     inactiveTintColor: 'gray',}}>
      //   <Tab.Screen 
      //   name="Главная" 
      //   component={ForumList}
      //   options={{
      //     tabBarIcon: ({size,focused,color}) => {
      //       return (
      //         <Svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      //           <Path d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      //         </Svg>
      //       );
      //     },
      //   }}
      //   />
      // </Tab.Navigator>
    );
  };
}