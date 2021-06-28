import * as React from 'react';
import Svg, { Path, Rect} from "react-native-svg"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ForumNav from './ForumNav';
import Requests from './Requests';
import Services from './Services';
import Finance from './Finance';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  render(){
    return(
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: 'gray',
            tabBarVisible: true,
            }}>
              
          <Tab.Screen 
            name="Главная" 
            component={ForumNav}
            options={{
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Svg style = {{opacity: focused ? 1:0.6}} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                );
              },
            }}
          />


          <Tab.Screen 
            name="Услуги" 
            component={Services}
            options={{
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Svg style = {{opacity: focused ? 1:0.6}} width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M12.7012 6.3C12.518 6.48693 12.4153 6.73825 12.4153 7C12.4153 7.26175 12.518 7.51307 12.7012 7.7L14.3012 9.3C14.4881 9.48323 14.7394 9.58586 15.0012 9.58586C15.263 9.58586 15.5143 9.48323 15.7012 9.3L19.4712 5.53C19.974 6.64119 20.1263 7.87923 19.9077 9.07915C19.689 10.2791 19.1099 11.3838 18.2475 12.2463C17.385 13.1087 16.2803 13.6878 15.0803 13.9065C13.8804 14.1251 12.6424 13.9728 11.5312 13.47L4.6212 20.38C4.22337 20.7778 3.68381 21.0013 3.1212 21.0013C2.55859 21.0013 2.01902 20.7778 1.6212 20.38C1.22337 19.9822 0.999878 19.4426 0.999878 18.88C0.999878 18.3174 1.22337 17.7778 1.6212 17.38L8.5312 10.47C8.02836 9.35881 7.87611 8.12077 8.09474 6.92085C8.31337 5.72094 8.89249 4.61616 9.75492 3.75372C10.6174 2.89129 11.7221 2.31217 12.9221 2.09354C14.122 1.87492 15.36 2.02716 16.4712 2.53L12.7112 6.29L12.7012 6.3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                );
              },
            }}
          />



          <Tab.Screen 
            name="Заявки" 
            component={Requests}
            options={{
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Svg style = {{opacity: focused ? 1:0.6}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect x="3" y="2" width="18" height="20" rx="2" stroke="black" stroke-width="2"/>
                    <Path d="M3 7H21" stroke="black" stroke-width="2"/>
                  </Svg>

                );
              },
            }}
          />

          <Tab.Screen 
            name="Финансы" 
            component={Finance}
            options={{
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Svg style = {{opacity: focused ? 1:0.6}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M12 1V23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                );
              },
            }}
          />

          <Tab.Screen 
            name="Профиль" 
            component={Profile}
            options={{
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Svg style = {{opacity: focused ? 1:0.6}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M21.6667 22.75V20.5833C21.6667 19.4341 21.2101 18.3319 20.3975 17.5192C19.5848 16.7065 18.4826 16.25 17.3333 16.25H8.66668C7.51741 16.25 6.4152 16.7065 5.60255 17.5192C4.78989 18.3319 4.33334 19.4341 4.33334 20.5833V22.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M13 11.9167C15.3932 11.9167 17.3333 9.97657 17.3333 7.58333C17.3333 5.1901 15.3932 3.25 13 3.25C10.6068 3.25 8.66666 5.1901 8.66666 7.58333C8.66666 9.97657 10.6068 11.9167 13 11.9167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>

                );
              },
            }}
          />

        </Tab.Navigator>
    );
  };
}

