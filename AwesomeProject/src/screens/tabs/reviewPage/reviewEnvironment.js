import React, { Component } from 'react';
import { View, Text,  Image,TouchableOpacity,StyleSheet,ScrollView,TextInput ,KeyboardAvoidingView,ImageBackground} from 'react-native';

import RatingRow from './ratingRow.js';

import { CheckBox, Button } from 'react-native-elements';
import ReviewPage from './reviewPage.js';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EnvironmentRating from './environmentRating.js';





class ReviewEnvironment extends Component {

    state = {
      
        checked: false,
                
        
    };

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} 
            style={{  flex: 1}} >
                <View style={{  flex: 1,backgroundColor: '#5B727B'}}>
                <ScrollView >
                
                <Image
                        style={{top: 206,
                            left: 10,
                            width: 400,
                            height: 200,
                        }}
                        source={require('../../../../assets/Worldicon.png')}
                    />
                    
                
                        
                        
                    <View style={{width: 350,
                        height: 120,
                        
                        marginRight:20,
                        marginLeft:40,
                        
                       
                        backgroundColor:'#FFFFFF',
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff',flexDirection:'row', marginLeft:40, marginTop:30
                       
                    }}>
    

                        <View>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#2684AD', marginRight:40,
                        marginLeft:10,
                        marginTop:10}}>
                             Sheraton Stockholm Hotel
                            
                        </Text>
                        <Text style={{fontSize:9,color:'#2684AD', marginRight:40,
                        marginLeft:10,
                        marginTop:10}}>
                             Tegelbacken 6, 101 23 Stockholm, Sweden
                            
                        </Text>
                        </View>
                        <Image
                        style={{ width: 150,

                            height: 140,
                            resizeMode: 'stretch',
                            marginTop:-10,
                            
                            marginLeft:-40,
                          
                        }}
                        source={require('../../../../assets/reviewimage.png')}
                    />
                         </View>
                      

                   
                    

                
                

                  

                <TouchableOpacity 
                
                    onPress={() => this.props.navigation.navigate('reviewEnv')}
                    style={{
                        top:20,
                        left: 90,
                        width: 250,
                        height: 80,
                        backgroundColor:'#FFFFFF',
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor:'#FFFFFF',
                        shadowColor: 'black',
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                          }
                        }
                    }>
                        <Text style={{fontWeight:'bold',fontSize:20,color:'#2684AD', marginRight:40,
                        marginLeft:60,
                        marginTop:10}}>
                             Environmental
                            
                        </Text>
                        <View style={{marginLeft:40}}>
                            <RatingRow />
                        </View>
                        
                    </TouchableOpacity>




                    <EnvironmentRating />



                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40,
                       
                    }}>
                        <View style={{
                        
                        
                        width: 180,
                        height: 70,
                        backgroundColor:'#FFFFFF',
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor:'#FFFFFF',
                        shadowColor: 'black',
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                          }
                        }
                    }>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2684AD', marginRight:40,
                        marginLeft:60,
                        marginTop:10}}>
                             Social
                            
                        </Text>
                        <View style={{marginLeft:10}}>
                            <RatingRow />
                        </View>
                        
                    </View>

                    <View style={{
                        
                        
                        width: 180,
                        height: 70,
                        backgroundColor:'#FFFFFF',
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor:'#FFFFFF',
                        shadowColor: 'black',
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            width: 0,
                            height: 1,
                          }
                        }
                    }>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2684AD', marginRight:40,
                        marginLeft:60,
                        marginTop:10}}>
                             Cultural
                            
                        </Text>
                        <View style={{marginLeft:10}}>
                            <RatingRow />
                        </View>
                        
                    </View>



                    </View>

                    

                   
                
               
              
                
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
            
        )
    }
}

export default ReviewEnvironment;


const styles = StyleSheet.create({
    container: {
        marginTop:5,
        
        flexDirection: 'row',
      
      
      
      marginLeft: 25
    },
    button: {
      backgroundColor: 'transparent',
      borderRadius: 0,
      padding: 0,
      marginBottom: 10,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
    stretch: {
        width: 100,
        height: 78,
        resizeMode: 'stretch',
      },
  });