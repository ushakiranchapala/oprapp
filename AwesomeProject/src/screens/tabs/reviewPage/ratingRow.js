import React, { Component } from 'react';
import { View, Text, Button, Image,TouchableOpacity,StyleSheet } from 'react-native';



class RatingRow extends Component {
    render() {
        return (
            <View style={styles.container}>
                             <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/rating-enabled.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/rating-enabled.png")}/>
                            </TouchableOpacity>
                             <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                            <Image style={styles.stretch} source={require("../../../../assets/rating-enabled.png")}/>
                            </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                             <Image style={styles.stretch} source={require("../../../../assets/rating-disabled.png")}/>
                             </TouchableOpacity>
                          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                            <Image style={styles.stretch} source={require("../../../../assets/rating-disabled.png")}/>
                             </TouchableOpacity>
        
                        </View>
                

            
        )
    }
}

export default RatingRow;

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
        width: 24,
        height: 24,
        resizeMode: 'stretch',
      },
  });