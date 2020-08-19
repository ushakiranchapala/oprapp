import React, { Component } from 'react';
import { View, Text, Button ,Image, ScrollView,StyleSheet,TouchableOpacity, TouchableHighlight} from 'react-native';

import { Card, ListItem, Icon } from 'react-native-elements'


class AttractionsList extends Component {
    render() {
        return (
            <View>
                     <ScrollView>
                <TouchableOpacity>
                <Card
            containerStyle={{padding: 0, margin:0}}
            imageStyle={{height: 170,
                width: '100%'}}
            image={ require('../../../assets/hotels.jpg') }>
            <Text style={{fontWeight: 'bold',paddingBottom:10,fontSize:20, marginBottom: 0,marginLeft: 16}}>
              Grand Hotel
            </Text>
            <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              503
            </Text>
            <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              Reviews
            </Text>
      </View>
      
      </View>
      <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 16}}>
              #1 of twenty hotels in sweden
            </Text>
          </Card>

                </TouchableOpacity>
                     <Card
            containerStyle={{padding: 0, margin:0}}
            imageStyle={{height: 170,
                width: '100%'}}
            image={ require('../../../assets/hotels.jpg') }>
            <Text style={{fontWeight: 'bold',paddingBottom:10,fontSize:20, marginBottom: 0,marginLeft: 16}}>
              Grand Hotel
            </Text>
            <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              503
            </Text>
            <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              Reviews
            </Text>
      </View>
      
      </View>
      <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 16}}>
              #1 of twenty hotels in sweden
            </Text>
          </Card>
         
          <Card
            containerStyle={{padding: 0, margin:0}}
            imageStyle={{height: 170,
                width: '100%'}}
            image={ require('../../../assets/hotels.jpg') }>
            <Text style={{fontWeight: 'bold',paddingBottom:10,fontSize:20, marginBottom: 0,marginLeft: 16}}>
              Grand Hotel
            </Text>
            <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              503
            </Text>
            <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              Reviews
            </Text>
      </View>
      
      </View>
      <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 16}}>
              #1 of twenty hotels in sweden
            </Text>
          </Card>


          <Card
            containerStyle={{padding: 0, margin:0}}
            imageStyle={{height: 170,
                width: '100%'}}
            image={ require('../../../assets/hotels.jpg') }>
            <Text style={{fontWeight: 'bold',paddingBottom:10,fontSize:20, marginBottom: 0,marginLeft: 16}}>
              Grand Hotel
            </Text>
            <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              503
            </Text>
            <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              Reviews
            </Text>
      </View>
      
      </View>
      <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 16}}>
              #1 of twenty hotels in sweden
            </Text>
          </Card>

          <Card
            containerStyle={{padding: 0, margin:0}}
            imageStyle={{height: 170,
                width: '100%'}}
            image={ require('../../../assets/hotels.jpg') }>
            <Text style={{fontWeight: 'bold',paddingBottom:10,fontSize:20, marginBottom: 0,marginLeft: 16}}>
              Grand Hotel
            </Text>
            <View style={{ flexDirection: 'row'}}>
       
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-enabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.stretch} source={require("../../../assets/rating-disabled.png")}/>
        </TouchableOpacity>
        <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              503
            </Text>
            <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 7}}>
              Reviews
            </Text>
      </View>
      
      </View>
      <Text style={{paddingBottom:10,fontSize:16, marginBottom: 0,marginLeft: 16}}>
              #1 of twenty hotels in sweden
            </Text>
          </Card>
            </ScrollView>
            <TouchableHighlight

            onPress={this.onMapButtonPressed}
          >
            <View >
  
              <Image
                style={{alignSelf: 'center',
                marginLeft: 15,
                marginRight: 15,
                position: 'absolute',
                bottom: 10,
                right: 4,
                height: 60,
                width: 60}}
                source={require('../../../assets/map.png')}
              />
  
  
            </View>
          </TouchableHighlight>   
            </View>
        )
    }
}

export default AttractionsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      backgroundColor: '#fff',
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
        width: 24,
        height: 24,
        resizeMode: 'stretch',
      },
  });