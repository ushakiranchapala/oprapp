import React, { Component } from 'react';
import { View, Text, Button ,Image, ScrollView,StyleSheet,TouchableOpacity,  Picker,TouchableHighlight} from 'react-native';
import { CheckBox } from 'react-native-elements';

import Panel from './Panel.js';
import Panel2 from './panel2.js';
import Panel3 from './panel3.js';


class Filter extends Component {

  

    
    render() {
        var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

        return (
          <ScrollView>
               <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{fontSize: 20,
                                    marginBottom: 10,
                                     marginLeft: 10,
                                     color: 'black',
                                  
                                  fontWeight: '500',
                                  padding: 15}} >Minimum Rating</Text>
                
                <Image
                    style={{
                    height: 50,
                    width: 20,
                    paddingRight: 70,
                             }}
                    source={
                        require('../../assets/tick.png')
                                }
                />


                </View>
            
                <View style={{ flexDirection: 'row'}}>
                <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.stretch} source={require("../../assets/rating-enabled.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.stretch} source={require("../../assets/rating-enabled.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.stretch} source={require("../../assets/rating-enabled.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.stretch} source={require("../../assets/rating-disabled.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.stretch} source={require("../../assets/rating-disabled.png")}/>
            </TouchableOpacity>
            
          </View>
          </View>
            
          <TouchableOpacity
                 style={{ padding: 5,
                 marginBottom: 5, }} onPress={() => { }} activeOpacity={0.2}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text
                    style={{ fontSize: 20,
                    marginLeft: 10,
                    padding: 15,
                    color: 'black',
                   
                    fontWeight: '500' }}
                  >
                   Most Popular
                  </Text>
                  <Image
                    style={{
                    height: 50,
                    width: 20,
                    paddingRight: 70,
                             }}
                    source={
                        require('../../assets/tick.png')
                                }
                />
            </View>

        </TouchableOpacity>
        <TouchableOpacity
                 style={{ padding: 5,
                 marginBottom: 5, }} onPress={() => { }} activeOpacity={0.2}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text
                    style={{ fontSize: 20,
                    marginLeft: 10,
                    padding: 15,
                    color: 'black',
                   
                    fontWeight: '500' }}
                  >
                   Highest Rating
                  </Text>
                  <Image
                    style={{
                    height: 50,
                    width: 20,
                    paddingRight: 70,
                             }}
                    source={
                        require('../../assets/tick.png')
                                }
                />
            </View>
            
        </TouchableOpacity>
        
        <Panel />
       
      
      
           


        <TouchableOpacity style={{
    backgroundColor: 'black',
    opacity: 0.5,
    
      height: 45,
      width: "40%",
      alignSelf: 'center',
      marginRight: 10,
      
      borderRadius: 1,
      marginTop: 5,
      borderRadius:30,
      borderWidth:1,
      borderColor:'#DBDFE1',
      padding: 5
    
        }}
            onPress={() => this.props.navigation.navigate('list')} activeOpacity={0.2}>
          <Text style={ { fontSize: 23,
          color: '#fff',
          alignSelf: 'center'}}>
            Clear Filter
          </Text>
        </TouchableOpacity>

        
       


           
      </View>
       

          </ScrollView>
           








           
        )
    }
}

export default Filter;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      
      alignItems: 'center',
      
      marginLeft: 16
    },
    button: {
      backgroundColor: 'transparent',
      borderRadius: 10,
      padding: 0,
      marginBottom: 10,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
    stretch: {
        width: 36,
        height: 36,
        resizeMode: 'stretch',
      },
      expandcontainer: {
        flex            : 1,
        backgroundColor : '#f4f7f9',
        paddingTop      : 30
      },
  });