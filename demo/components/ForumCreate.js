import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, TextInput, FlatList, Text, View, SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import Svg, { Path, SvgUri } from "react-native-svg"
import 'react-native-gesture-handler';



export default class ForumAdd extends Component{
    constructor(props) {
      super(props);
      
      this.state = {
        data: [],
        isLoading: true,
        selectedItem: null,
        
        category: null,
        title: null,
        description: null
        
      }
    }
    URL = "http://127.0.0.1:8000";
  
    componentDidMount() {
      fetch(this.URL+'/domme/forumtype/')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  
    _goBack(){
      this.props.navigation.goBack()
    }
    
    _typeChoose(id){
      this.setState({selectedItem: id, category: id});
    }

    _createForum(){
      request_data = {
        author_id: 1, // change in prod this.state.userid
        category_id : this.state.category,
        title : this.state.title,
        description : this.state.description,
      }
      console.log(JSON.stringify(request_data));
      fetch(this.URL + "/domme/forums/", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request_data)
      }).then((response)=>{
        if(response.status.toString() == "201"){
          this.props.navigation.goBack()
        }else{
          alert("error");
        }
      });
      
    }

    render() {
      const {data, isLoading} = this.state;
      return (
        <SafeAreaView contentInsetAdjustmentBehavior="automatic" style = {styles.backgroundColor}>
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
              
              <Text style ={styles.pageName}> Создать Форум </Text>
            </View>
            <ScrollView>
              {isLoading ? <ActivityIndicator/> : (
                <FlatList
                  style = {{marginVertical: 20, marginHorizontal:0}}
                  data={data}
                  numColumns={3}
                  scrollEnabled = {false}
                  keyExtractor={({ id }, index) => index}
                  renderItem={({item}) => (
                    <TouchableOpacity 
                      onPress = {()=>this._typeChoose(item.id)} 
                      style = {this.state.selectedItem === item.id ? [styles.typeElem, {backgroundColor: "#000"}]: styles.typeElem } 
                      activeOpacity = {0.8}>
                      
                      {this.state.selectedItem === item.id ?
                        (<SvgUri 
                        style = {styles.typeSvg}
                        uri={item.logoWhite}
                        width="30"
                        height = "40"
                        />):
                        (<SvgUri 
                          style = {styles.typeSvg}
                          uri={item.logo}
                          width="30"
                          height = "40"
                          />) 
                      }
                      
                      <Text style = {this.state.selectedItem === item.id ?[styles.typeTitle, {color: "#ffffff"}]: styles.typeTitle}> {item.name} </Text>
                    </TouchableOpacity>
                  )}
                />
              )}
              <View>
                <Text style = {styles.Title}> Заголовок</Text>
                
                <View style = {styles.titleInput}>
                  <TextInput
                  style = {[styles.InputText, {lineHeight: 21}]}
                  multiline={true}
                  maxLength = {250} //можно и меньше
                  onChangeText={(text) => this.setState({title:text})}
                  placeholder = "по ЖК Шахристан"
                  placeholderTextColor = "#888"
                  />
                </View>
                    

                <Text style = {styles.Title}> Описание </Text>
                <View style = {styles.descInput}>
                  <TextInput
                  style = {styles.InputText}
                  multiline={true}
                  maxLength = {500} //можно и больше
                  onChangeText={(text) => this.setState({description:text})}
                  placeholder = "Хотим купить квартиру в ЖК 4YOU. Расскажите пожалуйста  об инфраструктуре района?"
                  placeholderTextColor = "#888"
                  />
                </View>
              </View>
            </ScrollView>

            <TouchableOpacity 
                onPress = {()=>this._createForum()}
                style = {{
                  position: 'absolute',
                  width: "100%", 
                  justifyContent: 'center',
                  borderRadius: 8,
                  height: 56, 
                  backgroundColor: "#000000",
                  bottom: 20
                }}
                  activeOpacity= {0.7}>
                  <Text style = {{color: "#ffffff",textAlign: 'center', fontFamily: "Inter-Regular", fontSize: 14, fontWeight: '500'}}>Создать</Text>
                </TouchableOpacity>

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
      height: "100%",
      paddingTop: StatusBar.currentHeight,
      marginLeft: 20,
      marginRight: 20,
    },
  
    backgroundColor:{
      backgroundColor: "#ffffff",
      width:"100%",
      height: "100%"
    },

    typeElem:{
      marginRight: 12,
      marginBottom: 12,
      height: 110,
      width: "31%",
      backgroundColor: "#F3F4FF",
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },

    typeSvg:{
      marginTop: 20,
    },

    typeTitle:{
      fontFamily: "Inter-Regular", 
      fontSize: 10,
      lineHeight: 14,
      fontWeight: '500'
    },

    Title:{
      fontFamily: "Inter-Regular",
      fontSize: 17,
      lineHeight: 19,
      fontWeight: '500'
    },

    titleInput:{
      paddingVertical: 12,
      paddingHorizontal: 18,
      marginVertical: 4,
      borderColor: 'rgba(0, 0, 0, .1)',
      borderWidth: 2,
      borderRadius: 8,
      marginBottom: 30,
    },

    descInput:{
      paddingVertical: 12,
      paddingHorizontal: 18,
      marginVertical: 4,
      borderColor: 'rgba(0, 0, 0, .1)',
      borderWidth: 2,
      borderRadius: 8,
    },

    InputText:{
      fontFamily: "Inter-Regular",
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 17,
    },

    backBtn:{
      position: "absolute",
      left: 0,
    }  
  });