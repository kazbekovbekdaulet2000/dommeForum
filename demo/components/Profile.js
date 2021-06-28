import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg"
import 'react-native-gesture-handler';


export default class Profile extends Component{
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      };
    }
  
    _goBack(){
      this.props.navigation.goBack()
    }
  
    render() {
      return (
        <SafeAreaView style = {styles.backgroundColor}>
          <View style={styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress= {()=>this._goBack()}>
                    <Svg height="50" width="10" viewBox="0 0 10 18">
                    <Path 
                        d="M9 1L1 9L9 17" 
                        stroke="black" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </Svg>
                </TouchableOpacity>
                <Text style ={styles.pageName}> Профиль </Text>
            </View>
          </View>
        </SafeAreaView>
      )
    }
  };
  

  const styles = StyleSheet.create({
    header:{
      position: 'relative',
      paddingBottom: 20,
      width:"100%",
      height:50,
    },
  
    pageName:{
      position:"absolute",
      alignSelf:'center',
      fontFamily:"Inter-Regular",
      fontWeight: '600',
      fontSize: 22,
      justifyContent: 'center',
      lineHeight: 50,
    },
  
    container: {
      paddingTop: StatusBar.currentHeight,
      paddingLeft: 20,
      paddingRight: 20,
    },
  
    backgroundColor:{
      backgroundColor: "#ffffff",
      width:"100%",
      height: "100%"
    },
  
    backBtn:{
      position: "absolute",
      left: 0,
    }  
  });