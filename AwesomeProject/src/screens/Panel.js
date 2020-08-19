
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager, LayoutAnimation,Image} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Panel2 from './panel2.js';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export class SubCheckBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            
        };
    }
        state = {
      
            checked: false,
                    
            
        };

        render(){
            return(
                <View style={{flex:1,flexDirection:'row'}}>

            <CheckBox
            
            iconRight
            checked={this.state.checked}
        onPress={() => {this.setState({ checked: !this.state.checked })
     
    
        }}
            containerStyle={{backgroundColor: 'transparent', marginRight:-3}}
 
            /> 
             
                  <Text style={{ fontSize: 20,
                    marginLeft:0,
                    paddingTop :15,
                    color: 'black',
                   
                    fontWeight: '500' }}>{this.state.title}</Text>

            </View>
            )
        }
}

export  class ListExpand extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            
        };

        this.icons = {     //Step 2
            'up'    : require('../../assets/Arrowhead-01-128.png'),
            'down'  : require('../../assets/Arrowhead-Down-01-128.png')
        };

        
        
    }
  state = {
      
    checked: false,
    unchecked:true,
            expanded1: false,
            expanded:false
};
  render() {

    let icon = this.icons['down'];

    if(this.state.expanded1){
        icon = this.icons['up'];   //Step 4
    }
    return (
       
       
                <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          this.setState({expanded1: !this.state.expanded1});
        }}>
            <View style={{flex:1,flexDirection:'row'}}>

            <CheckBox
            
            iconRight
            checked={this.state.checked}
        onPress={() => this.setState({ checked: !this.state.checked })}
            containerStyle={{backgroundColor: 'transparent', marginRight:-3}}
 
            /> 
             
                  <Text style={{ fontSize: 20,
                    marginLeft:0,
                    paddingTop :15,
                    color: 'black',
                   
                    fontWeight: '500' }}>{this.state.title}</Text>
           

            
          <Image
                            style={ {width   : 30,
                                height  : 25,alignSelf: 'center',
                                marginLeft: 15,
                                marginRight: 15,
                                top:2,
                                bottom: 10,
                                right: 4, }}
                            source={icon}
                        ></Image>
          
            </View>
          
        </TouchableOpacity>
        {this.state.expanded1 && <View style={{marginLeft:20}}>
            {this.props.children}
            </View>
        }
        
        
      </View>

      

        
      
      
    );
  }
}

export default class Panel extends React.Component {


    render(){
        return(
            <View>
                 <ListExpand title="Environment">
                    {/* <SubCheckBox title="Energy"></SubCheckBox>
                    <SubCheckBox title="Water"></SubCheckBox>
                    <SubCheckBox title="Waste"></SubCheckBox>
                    <SubCheckBox title="Food"></SubCheckBox>
                    <SubCheckBox title="Transport"></SubCheckBox>
                    <SubCheckBox title="Pollutions"></SubCheckBox>
                    <SubCheckBox title="Conservations"></SubCheckBox>
                    <SubCheckBox title="Certifications"></SubCheckBox> */}
                     <Panel2 />
                    
             
                   </ListExpand>

                   <ListExpand title="Social">
                   
                   <SubCheckBox title="Illegal Trade"></SubCheckBox>
                   <SubCheckBox title="Landscape"></SubCheckBox>
                   <SubCheckBox title="Local Culture"></SubCheckBox>
                   <SubCheckBox title="Architecture"></SubCheckBox>
                   <SubCheckBox title="Cutural Heritage"></SubCheckBox>
                   <SubCheckBox title="Cultural Interaction"></SubCheckBox>
                   
            
                  </ListExpand>

                  <ListExpand title="Cultural">
                   
                    <SubCheckBox title="Fair Work"></SubCheckBox>
                    <SubCheckBox title="Accessibility"></SubCheckBox>
                    <SubCheckBox title="Local Sourcing"></SubCheckBox>
                    <SubCheckBox title="Equality"></SubCheckBox>
                    <SubCheckBox title="Local Employment"></SubCheckBox>
                    <SubCheckBox title="Community Support"></SubCheckBox>
                    <SubCheckBox title="Exploitation"></SubCheckBox>
                   
             
                   </ListExpand>
            </View>

          
           
            
        )
    }
}