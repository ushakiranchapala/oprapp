import React, { Component } from 'react';
import { View,Text} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Panel3 extends Component {


       

    state = {
        checkedId: -1,
        checkboxes: [{id: "yes", title: "Yes"}, {id: "no", title: "No"},{id: "now", title: "Now"}]
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