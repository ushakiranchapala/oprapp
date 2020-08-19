import React, { Component } from 'react';
import { ImageBackground, Animated, View, Text, Button, TouchableHighlight, TouchableOpacity,Image,TextInput} from 'react-native';

import * as hotelImg from '../../assets/hotel.png';
import * as citiesImg from '../../assets/cities.png';
import * as sightsImg from '../../assets/sights.png';
import * as attractImg from '../../assets/cities.png';

import * as blurHotelImg from '../../assets/hotel-blur.png';
import  hotelsactive from '../../assets/hotels-active.png';
import hotelwhite from '../../assets/hotels-white.png';
import citiesactive from '../../assets/cities-active.png';
import citieswhite from '../../assets/cities-white.png';
import  restaurantsactive from '../../assets/restaurants-active.png';
import  restaurantswhite from '../../assets/restaurants-white.png';
import  attractionsactive from '../../assets/sights-active.png';
import  attractionswhite from '../../assets/sights-white.png';
class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageValue: hotelImg,
            cities: citiesImg,
            
            hiconchange: true,
            iconchange: true,

        };
      }



    render() {

var hotelicon =this.state.hiconchange? hotelsactive : hotelwhite;
var citiesicon =this.state.iconchange? citiesactive : citieswhite;
var restaurantsicon =this.state.iconchange? restaurantsactive : restaurantswhite;
var attractionsicon =this.state.iconchange? attractionsactive : attractionswhite;
        return (
            <ImageBackground
            source={this.state.imageValue.default}
            style={{flex: 1,
            alignSelf: 'stretch',
            width: null}}
        >

        <Animated.View style={{justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:200
                        }}>
                <View style={{
                        flexDirection: 'row',
                         alignItems: 'center',
                        height: 80,
                        marginBottom: 40
                                }}> 
                    
                    <TouchableHighlight
                         onPress={() => {
                            this.setState({ hiconchange: !this.state.hiconchange })
                            this.setState({ imageValue: hotelImg })

                         }
                            
                         }
                         underlayColor="transparent"
                         activeOpacity={0.7}
                         >
                      <View style= {{
                   flex: 1,
                   justifyContent: 'center',
                       alignItems: 'center'
              }} >
                    
                    <Image style={{width: 53.7,height: 53.7,margin: 5}} source={hotelicon} />
                 <Text style={{ color: "#fff",textAlign: "center", fontSize: 10}} > hotels</Text> 
             </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                         onPress={ () => {this.setState({ iconchange: !this.state.iconchange })
                            this.setState({ imageValue: citiesImg })
                         }}
                         underlayColor="transparent"
                         activeOpacity={0.7}
                         >
                      <View style= {{
                   flex: 1,
                   justifyContent: 'center',
                       alignItems: 'center'
              }} >

                    <Image style={{width: 53.7,height: 53.7,margin: 5}} source={citiesicon} />
                 <Text style={{ color: "#fff",textAlign: "center", fontSize: 10}} > cities</Text> 
             </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                         onPress={() => this.setState({ imageValue: sightsImg })}
                         underlayColor="transparent"
                         activeOpacity={0.7}
                         >
                      <View style= {{
                   flex: 1,
                   justifyContent: 'center',
                       alignItems: 'center'
              }} >

                    <Image style={{width: 53.7,height: 53.7,margin: 5}} source={require("../../assets/hotels-active.png")} />
                 <Text style={{ color: "#fff",textAlign: "center", fontSize: 10}} > cities</Text> 
             </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                         onPress={() => this.props.navigation.navigate('list')}
                         underlayColor="transparent"
                         activeOpacity={0.7}
                         >
                      <View style= {{
                   flex: 1,
                   justifyContent: 'center',
                       alignItems: 'center'
              }} >

                    <Image style={{width: 53.7,height: 53.7,margin: 5}} source={require("../../assets/hotels-active.png")} />
                 <Text style={{ color: "#fff",textAlign: "center", fontSize: 10}} > cities</Text> 
             </View>
                 </TouchableHighlight>
                
                
                
                </View>
               
                <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:312 }}
      placeholder='Search'
      onFocus={() => this.setState({ imageValue: blurHotelImg })}
      onBlur= {() => this.setState({ imageValue: hotelImg }) }
      
    />

             
            </Animated.View>



            </ImageBackground>
        )
    }
}

export default Search;