import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForumItem from './ForumItem'
import ForumList from './ForumList';
import ForumAdd from './ForumCreate';

const Stack = createStackNavigator();

export default class ForumNav extends Component {
    constructor(props){
        super(props);
    }


  render() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="ForumList" component={ForumList}/>
            {/* <Stack.Screen name="ForumAdd" component={ForumAdd}/> */}
            <Stack.Screen name="ForumItem" component={ForumItem}/>
            <Stack.Screen name="ForumCreate" component={ForumAdd}/>
        </Stack.Navigator>
    );
    }
};