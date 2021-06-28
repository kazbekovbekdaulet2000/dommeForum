import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, TextInput, Text, View, SafeAreaView, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from "react-native-svg"
import 'react-native-gesture-handler';

export default class ForumList extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      }
    }

    URL = "http://127.0.0.1:8000";
    getData() {
      fetch(this.URL +'/domme/forums/')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
    
  
    _goBack() {
      this.props.navigation.goBack();
    }
  
    _addForum(){
      this.props.navigation.navigate('ForumAdd');
    }
  
    openForumItem(item){
      this.props.navigation.navigate('Главная', { screen: 'ForumItem', params:{data:item}});
    }
  
    render() {
      this.getData(); // хуевый рефреш
      const { data, isLoading } = this.state;
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
                    stroke-linejoin="round"
                    />
                </Svg>
              </TouchableOpacity>
              <Text style ={styles.pageName}> Форум </Text>
              <TouchableOpacity style={styles.addBtn} onPress= {()=>this._addForum()}>
                <Svg height="50" width="18" viewBox="0 0 18 18">
                  <Path d="M9 1V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <Path d="M17 9L1 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
              </TouchableOpacity>
            </View>
          





            <View style = {styles.searcharea}>
              <View style = {styles.filterSelector}>
                <Text style = {styles.filterSelectorText}>
                  Все форумы
                </Text>
                <TouchableOpacity style = {styles.filterSelectorMore} activeOpacity ={0.7}>
                  <Svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M6.65685 1L3.82843 3.82843L1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                </TouchableOpacity>
              </View>
              <View style={styles.searchInput}>
                <Svg style = {{alignSelf:'center', paddingRight: 12}} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path opacity="0.4" d="M12.0075 12.7051L7.72126 8.41811C5.81451 9.77371 3.18709 9.44212 1.67691 7.65531C0.166742 5.8685 0.277629 3.22255 1.93201 1.56836C3.58596 -0.0865529 6.23215 -0.197921 8.0193 1.31217C9.80645 2.82227 10.1382 5.44995 8.78251 7.35686L13.0688 11.6439L12.0083 12.7044L12.0075 12.7051ZM5.11351 1.74985C3.69129 1.74953 2.46428 2.74787 2.17537 4.14044C1.88645 5.53301 2.61504 6.93707 3.92002 7.50254C5.22499 8.06801 6.74768 7.63949 7.56619 6.4764C8.3847 5.31332 8.27406 3.73535 7.30126 2.69786L7.75501 3.14786L7.24351 2.63786L7.23451 2.62886C6.67335 2.06424 5.90956 1.74771 5.11351 1.74985Z" fill="black"/>
                </Svg>
                <TextInput
                  style ={{width: "90%"}}
                  placeholder="Поиск"
                />
              </View>
            </View>



          </View>
          <View>
              <ScrollView
                style = {styles.horizontalscroll}
                horizontal={true}
                // overflow ={true}
                showsHorizontalScrollIndicator={false}>
                  <View style = {{marginLeft:20, marginRight:20, display:'flex', flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {alert('You tapped the button!')}} style ={styles.btnholderselected} activeOpacity={0.7}>
                      <Text style = {styles.btn}> Популярные </Text>
                      <Svg style={styles.btn2} width="8" height="6" viewBox="0 0 8 6">
                        <Path style={alignSelf="center"} d="M6.65685 1.58582L3.82843 4.41424L1 1.58582" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style ={styles.btnholder} activeOpacity={0.7}>
                      <Text style = {styles.btn}> Новые </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.btnholder} activeOpacity={0.7}>
                      <Text style = {styles.btn}> По темам </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style ={styles.btnholder} activeOpacity={0.7}>
                      <Text style = {styles.btn}> Сохраненные </Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style ={styles.btnholder} activeOpacity={0.7}>
                      <Text style = {styles.btn}> Мои форумы</Text>
                    </TouchableOpacity>
                  </View>
              </ScrollView>
            </View>
          {/* <View style={styles.container}> */}
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              style = {{paddingLeft: 20,
                paddingRight: 20,}}
              scrollEnabled={true}
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>this.openForumItem(item)} activeOpacity = {0.6}>
                  <View style={styles.forumholder}>
                    <View style = {styles.forumheader}>
                      <Text style = {styles.categoryname}>{item.category.name}</Text>
                      <Text style = {styles.authorname}> {item.author.last_name} {item.author.first_name}</Text>
                      <Text style = {styles.forumdate}> {new Date(item.created).toLocaleDateString()}</Text> 
                    </View>
                    <Text style = {styles.texttheme}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              
              )}
            />
          )}
          {/* </View> */}
        </SafeAreaView>
      )
    }
  }

  const styles = StyleSheet.create({
    header:{
      paddingTop: 12,
      paddingBottom: 30,
      width:"100%",
      justifyContent: 'space-between',
      position:'relative',
      height: 50,
    },
  
    searcharea:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      justifyContent: 'space-between',
    },
  
    filterSelectorText:{
      fontFamily:"Inter-Regular",
      fontWeight:"500",
      fontSize:14,
      lineHeight:17,
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
  
    horizontalscroll:{
      display:'flex',
      marginTop:20,
      marginBottom:30,
      overflow:'visible',
    },
  
    btnholderselected:{
      display:'flex',
      flexDirection:'row',
      paddingHorizontal:3,
      paddingVertical:6,
      marginRight:4,
      backgroundColor:"#3897F0",
      borderRadius:4,
    },
  
    btnholder:{
      paddingHorizontal:3,
      paddingVertical:6,
      borderWidth:1,
      borderColor: "#DBDBDB",
      marginRight:4,
      borderRadius:4
    },
  
    btn:{
      padding: 0,
      alignSelf:"center",
      fontFamily:"Roboto-Regular",
      fontWeight: '600',
      fontSize:12,
    },
  
    btn2:{
      alignSelf:"center",
    },
    
    container: {
      paddingTop: StatusBar.currentHeight,
      paddingLeft: 20,
      paddingRight: 20,
    },
  
    forumheader:{
      width: "90%",
      justifyContent:"space-between",
      display:"flex",
      flexDirection:"row",
    },
  
    categoryname:{
      fontFamily:"Roboto-Regular",
      fontWeight:"700",
      alignSelf:'center',
      fontSize:12,
      lineHeight:12,
      textDecorationLine: "underline"
    },
  
    authorname:{
      alignSelf:'center',
      fontFamily:"Roboto-Regular",
      fontWeight:"400",
      fontSize:12,
      lineHeight:12,
    },
  
    forumdate:{
      alignSelf:'center',
      fontFamily:"Roboto-Regular",
      fontWeight:"400",
      fontSize:12,
      lineHeight:12,
    },
  
    texttheme:{
      paddingTop:26,
      paddingBottom:26,
      fontFamily:"Inter-Regular",
      fontWeight:"500",
      lineHeight: 17,
    },
  
    forumholder:{
      marginBottom: 14,
      paddingLeft:16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: "#F3F4FF",
      borderRadius:8,
    },
  
  
    backgroundColor:{
      backgroundColor: "#ffffff",
      width:"100%",
      height: "100%"
    },
  
    backBtn:{
      position: "absolute",
      left: 0,
    },
    
    addBtn:{
      position: "absolute",
      right: 0,
    },

    filterSelector:{
      height: 20,
      alignSelf: 'center',
      width: "30%",
      display: 'flex',
      flexDirection: 'row',
    },

    filterSelectorText:{
      alignSelf: 'center',
      fontFamily: "Inter-Regular",
      fontWeight: '500',
      fontSize: 14,
      lineHeight:17
    },

    filterSelectorMore:{
      marginLeft: 8,
      borderColor:"#DBDBDB",
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      paddingHorizontal: 4,
      paddingVertical: 6
    },

    searchInput:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "65%",
      borderColor:"#dbdbdb",
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 2,
      paddingHorizontal: 4,
      paddingVertical: 6,
    },
  });
  