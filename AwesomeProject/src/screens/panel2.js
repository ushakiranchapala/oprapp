import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager, LayoutAnimation,Image,StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();




export default class Panel3 extends Component {


       

    state = {
        checkedId: -1,
        checkboxes: [{id: "Energy", title: "Energy"}, {id: "Water", title: "Water"},{id: "Waste", title: "Waste"},
        {id: "Food", title: "Food"},{id: "Transport", title: "Transport"},{id: "Pollutions", title: "Pollutions"},{id: "Conservations", title: "Conservations"},
        {id: "Certifications", title: "Certifications"}
    ]
      }
     
      handleCheck = (checkedId) => {
        this.setState({checkedId})
      }
     
      render() {
        const { checkboxes, checkedId } = this.state
        return (
          <View>
            {checkboxes.map(checkbox => (
                 <View style={{flex:1,flexDirection:'row'}}>
              <CheckBox
                 iconRight
                containerStyle={{backgroundColor: 'transparent', marginRight:-3}}
                key={checkbox.id}
            
                checked={checkbox.id == checkedId}
                onPress={() => this.handleCheck(checkbox.id)}

              />
              <Text style={{ fontSize: 20,
                    marginLeft:0,
                    paddingTop :15,
                    color: 'black',
                   
                    fontWeight: '500' }}>{checkbox.title}</Text>
            </View>
            ))}
          </View>
        )
      }
}
