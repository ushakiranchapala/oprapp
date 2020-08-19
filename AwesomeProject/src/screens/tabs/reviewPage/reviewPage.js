import React, { Component } from 'react';
import { View, Text,  Image,TouchableOpacity,StyleSheet,ScrollView,TextInput ,KeyboardAvoidingView,ImageBackground} from 'react-native';

import RatingRow from './ratingRow.js';

import { CheckBox, Button } from 'react-native-elements';




class ReviewPage extends Component {

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
                    
                
                        <ImageBackground source={require('../../../../assets/dialogueRewiew.png')} style={{width: 420,
                            height: 230,resizeMode: 'stretch',}}>
                        
                    <View style={{flexDirection:'row', marginLeft:40, marginTop:30
                       
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
                        </ImageBackground>  

                   
                    

                
                <View style={{
                        top: -110,
                        left: 70,
                        width: 200,
                        height: 80,
                      
                        }
                    }>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000000', marginRight:40,
                        marginLeft:25,
                        marginTop:10}}>
                             Sustainability rating
                            
                        </Text>
                        <Text style={{fontWeight:'bold',fontSize:9,color:'#000000', marginRight:40,
                        marginLeft:100,
                        }}>
                             (required)
                            
                        </Text>
                        <RatingRow />
                    </View>

                 <View style={{
                        width: 350,
                        height: 25,
                        marginTop:-20,
                        marginRight:20,
                        marginLeft:40,
                        
                       
                        backgroundColor:'#FFFFFF',
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:15,
                        marginTop: 2
                        }}>
                             Tell us more and help create a positive impact
                            
                        </Text>
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

                    <View style={{
                        top:40,
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
                        marginLeft:95,
                        marginTop:10}}>
                             Social
                            
                        </Text>
                        <View style={{marginLeft:40}}>
                            <RatingRow />
                        </View>
                        
                    </View>

                    <View style={{
                        top:60,
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
                        marginLeft:85,
                        marginTop:10}}>
                             Cultural
                            
                        </Text>
                        <View style={{marginLeft:40}}>
                            <RatingRow />
                        </View>
                        
                    </View>

                    <View style={{flexDirection: "column"}}>
           
                        <View style={{
                        
                        width: 80,
                        height: 80, 
                        borderRadius: 80 / 2,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center', 
                        }}>
                        <View style={{
                        
                        width: 75, 
                        height: 75,
                        borderRadius: 75 / 2,
                        backgroundColor: 'transparent',
                        borderColor: 'white',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center', 
                        }}>
                            <Text style={{fontWeight:'bold',fontSize:14,color:'white'
                        }}>
                             10
                            
                        </Text>
                        <Text style={{fontSize:9,color:'white'
                        }}>
                             one planet points
                            
                        </Text>

                    </View>

                    </View>

                    <View style={{
                        marginLeft:22.5,
                        marginTop:5,
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        backgroundColor: 'green',
                        borderColor: 'white',
                        borderWidth: 3
                    }}>

                    </View>

                    <View style={{
                        marginLeft:27.5,
                        marginTop:10,
                        width: 20,
                        height: 20,
                        borderRadius: 20 / 2,
                        backgroundColor: 'white',
                        
                        
                    }}>

                    </View>

                        </View>
                   


                  

                    

                    <View style={{
                        width: 200,
                        height: 25,
                        marginTop:80,
                        marginRight:20,
                        marginLeft:120,
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:0.8,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:10,
                        marginTop: 2
                        }}>
                             What sort of trip was this
                            
                        </Text>
                </View> 

                <View style={{flex: 1, flexDirection: 'row',marginTop:20,justifyContent: 'center',
                                 alignItems: 'stretch',}}>
                        <TouchableOpacity style={styles.button} >
                            <Image style={styles.stretch} source={require("../../../../assets/socialreview.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Image style={styles.stretch} source={require("../../../../assets/couple.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Image style={styles.stretch} source={require("../../../../assets/family.png")}/>
                        </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row',marginTop:20,justifyContent: 'center',
                                alignItems: 'stretch',}}>
                        <TouchableOpacity style={styles.button} >
                            <Image style={styles.stretch} source={require("../../../../assets/friends.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Image style={styles.stretch} source={require("../../../../assets/solo.png")}/>
                        </TouchableOpacity>
                        
                </View>
                <View style={{
                     
                     alignItems: 'center',
                     padding:30,

                }}>
                <View style={{
                        width: 200,
                        height: 25,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:0.8,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:10,
                        marginTop: 2
                        }}>
                             When was this trip?
                            
                        </Text>
                </View> 
                </View>

                <View style={{
                     
                     alignItems: 'center',
                     padding:3,

                }}>
                    <View style={{
                        width: 350,
                        height: 40,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:1,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <TextInput
                             style={{  width: 300,
                                         height: 40,
                                        }}
                            placeholder='Click here to select'
                 />

                    </View>
                
                         
                </View> 

                <View style={{
                     
                     alignItems: 'center',
                     padding:30,

                }}>
                <View style={{
                        width: 200,
                        height: 25,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:0.8,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:10,
                        marginTop: 2
                        }}>
                             Title of your review
                            
                        </Text>
                </View> 
                </View>

                <View style={{
                     
                     alignItems: 'center',
                     padding:3,

                }}>
                    <View style={{
                        width: 350,
                        height: 40,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:1,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <TextInput
                             style={{  width: 300,
                                         height: 40,
                                        }}
                            placeholder='Summarize your review'
                 />

                    </View>
                
                         
                </View> 

                <View style={{
                     
                     alignItems: 'center',
                     padding:30,

                }}>
                <View style={{
                        width: 200,
                        height: 25,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:0.8,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:10,
                        marginTop: 2
                        }}>
                             What sort of trip was this?
                            
                        </Text>
                </View> 
                </View>

                <View style={{
                     
                     alignItems: 'center',
                     padding:3,

                }}>
                    <View style={{
                        width: 350,
                        height: 100,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:1,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <TextInput
                             style={{  width: 300,
                                         height: 100,
                                        }}
                                       
                                        
                            placeholder='Write your story/experience here.'
                 />

                    </View>

                
                         
                </View> 

                <View style={{
                     
                     alignItems: 'center',
                     padding:30,

                }}>
                <View style={{
                        width: 200,
                        height: 25,
                        
                        alignItems: 'center',
                        
                       
                        backgroundColor:'#FFFFFF',
                        opacity:0.8,
                        borderRadius:20,
                        borderWidth: 1,
                        borderColor: '#fff'
                    }}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2684AD',marginLeft:10,
                        marginTop: 2
                        }}>
                             Submit your review
                            
                        </Text>
                </View> 
                </View>
                
                <View style={{ flexDirection:'row',alignContent:'center'}}>
                <CheckBox
            
            iconRight
            checked={this.state.checked}
            uncheckedColor='#FFFFFF'
            checkedColor='#FFFFFF'
        onPress={() => {this.setState({ checked: !this.state.checked })
     
    
        }}
            containerStyle={{backgroundColor: 'trasparent', marginleft:40}}
 
            /> 

            <Text style={{height:200,width:300, fontWeight:'bold',fontSize:10,color:'#FFFFFF',marginLeft:10, marginRight:40,
                        marginTop: 2
                        }}>
            I certify that this review is based on my genuine opinion and my own experience from this establishment. Furthermore I certify that I have no personal or business relationships with this establishment. I have not been offered any monetary compensation from the establishment to write this review.
            </Text>

                </View>
                
            
            <View style={{ flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:-110}}>
            <Button
            title="Preview"
            buttonStyle={{width:150,borderRadius:20,
                borderWidth: 1,
                borderColor: '#5B727B'}}
            />
            <Button
            title="Submit"
            buttonStyle={{width:150,borderRadius:20,
                borderWidth: 1,
                borderColor: '#5B727B'}}
            />

              
            </View>

            <Text style={{ fontWeight:'bold',fontSize:15,color:'#FFFFFF',padding:30, alignSelf:"center"
                        }}>
                           Thanks for sharing your experience! 
            </Text>
                
               
              
                
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
            
        )
    }
}

export default ReviewPage;


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