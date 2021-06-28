import App from './components/ApplicationNav';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForumAdd from './components/ForumCreate';
const Stack = createStackNavigator();

export default class ForumNav extends Component {
    constructor(props){
        super(props);
    }


  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              
              <Stack.Screen name="App" component={App}/>
              <Stack.Screen name="ForumAdd" component={ForumAdd}/>

          </Stack.Navigator>
        </NavigationContainer>
    );
    }
};

// export default App;