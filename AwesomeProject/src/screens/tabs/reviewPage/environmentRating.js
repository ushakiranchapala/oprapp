import React, { Component } from 'react';
import { View, Text,  Image,TouchableOpacity,StyleSheet,ScrollView,TextInput ,KeyboardAvoidingView,ImageBackground} from 'react-native';
import RatingRow from './ratingRow.js';




class EnvironmentRating extends Component {

    constructor(props){
        super(props);
        this.state={
            module:1,
        };
    }
    render() {
        return (
            <View 
               
                
               
                style={{
                    top:30,
                    left: 35,
                    width: 350,
                    height: 350,
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
                <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap: 'wrap'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.setState({module:1})}>
                             {
                                 this.state.module==1?
                                 <Image style={styles.stretch} source={require("../../../../assets/activeLocalEmployment.png")}/>
                                 :<Image style={styles.stretch} source={require("../../../../assets/localemployment.png")}/>
                             }
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>this.setState({module:2})}>
                    {
                                 this.state.module==2?
                                 <Image style={styles.stretch} source={require("../../../../assets/price-active.png")}/>
                                 :<Image style={styles.stretch} source={require("../../../../assets/price-inactive.png")}/>
                             }
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>this.setState({module:3})}>
                    {
                                 this.state.module==3?
                                 <Image style={styles.stretch} source={require("../../../../assets/safety-active.png")}/>
                                 :<Image style={styles.stretch} source={require("../../../../assets/safety.png")}/>
                             }
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/fairwork.png")}/>
                            </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap: 'wrap'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/equality.png")}/>
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/accessebility.png")}/>
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/communitysupport.png")}/>
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                             <Image style={styles.stretch} />
                            </TouchableOpacity>
                    
                    
                </View>

                <View style={{flex:1}}>
                    {
                        this.state.module==1?
                        (<View>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/activeLocalEmployment.png")}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#1EAC00', marginRight:10,
                                            marginLeft:5,
                                            marginTop:10}}>
                                        Local Employement
                            
                             </Text>

                             <Text style={{fontWeight:'bold',fontSize:12,color:'#024345', marginRight:10,
                                            marginLeft:5,
                                            marginTop:12}}>
                                        Ratio of local staff
                            
                             </Text>
                           
                            </View>
                            <View style={{marginTop:-20, marginLeft:-5}}>
                                <RatingRow />
                            </View>

                            <View
                                style={{borderBottomColor: '#5B727B',borderBottomWidth: 1, left:10, width:320
                                }}
                                />
                             <Text style={{fontWeight:'bold',fontSize:12,color:'#313333', marginRight:10,
                                            marginLeft:10,
                                            marginTop:12}}>
                                        Is the hotel locally owned?
                            
                             </Text>

                             <View style={{ marginLeft:-5}}>
                                <RatingRow />
                            </View>

                             <Text style={{fontWeight:'bold',fontSize:12,color:'#313333', marginRight:10,
                                            marginLeft:10,
                                            marginTop:12}}>
                                        Is the hotel locally operated?
                            
                             </Text>
                             <View style={{ marginLeft:-5}}>
                                <RatingRow />
                            </View>
                            
                           
                           
                        </View>)

                       
                        :this.state.module==2?
                        (<View>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/price-active.png")}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#1EAC00', marginRight:10,
                                            marginLeft:5,
                                            marginTop:10}}>
                                        Price
                            
                             </Text>

                             <Text style={{fontWeight:'bold',fontSize:12,color:'#024345', marginRight:10,
                                            marginLeft:5,
                                            marginTop:12}}>
                                        Affordability and value for money
                            
                             </Text>
                           
                            </View>
                            <View style={{marginTop:-20, marginLeft:-5}}>
                                <RatingRow />
                            </View>

                            <View
                                style={{borderBottomColor: '#5B727B',borderBottomWidth: 1, left:10, width:320
                                }}
                                />
                             <Text style={{fontWeight:'bold',fontSize:12,color:'#313333', marginRight:10,
                                            marginLeft:10,
                                            marginTop:12}}>
                                        Does the hotel feature locally manufactured items in its rooms and buildings?
                            
                             </Text>

                             <View style={{ marginLeft:-5}}>
                                <RatingRow />
                            </View>

                            
                           
                           
                        </View>)

                      : (<View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                         <Image style={styles.stretch} source={require("../../../../assets/safety-active.png")}/>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'bold',fontSize:16,color:'#1EAC00', marginRight:10,
                                        marginLeft:5,
                                        marginTop:10}}>
                                    Safety
                        
                         </Text>

                         <Text style={{fontWeight:'bold',fontSize:12,color:'#024345', marginRight:10,
                                        marginLeft:5,
                                        marginTop:12}}>
                                    overall impression of security
                        
                         </Text>
                       
                        </View>
                        <View style={{marginTop:-20, marginLeft:-5}}>
                            <RatingRow />
                        </View>

                        <View
                            style={{borderBottomColor: '#5B727B',borderBottomWidth: 1, left:10, width:320
                            }}
                            />
                         <Text style={{fontWeight:'bold',fontSize:12,color:'#313333', marginRight:10,
                                        marginLeft:10,
                                        marginTop:12}}>
                                    Does the hotel actively discourage sexual exploitation?
                        
                         </Text>

                         <View style={{ marginLeft:-5}}>
                            <RatingRow />
                        </View>

                        
                       
                       
                    </View>)
                       


                    }


                </View>
                    
                    
               

            </View>
        )
    }
}

export default EnvironmentRating;




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
        width: 50,
        height: 50,
        resizeMode: 'stretch',
      },
  });