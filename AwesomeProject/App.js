import 'react-native-gesture-handler';
import * as React from 'react';
import{ Component } from 'react';
import {Dimensions} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Image, Button,View, Text, TouchableOpacity, TouchableHighlight} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Tab1 from './src/screens/tabs/tab1.js';
import HomeTab from './src/screens/tabs/hometab.js';
import reviewEnvironment from './src/screens/tabs/reviewPage/reviewEnvironment';
import reviewPage from './src/screens/tabs/reviewPage/reviewPage';
import HotelsList from './src/screens/tabs/hotelslist.js';
import CitiesList from './src/screens/tabs/citieslist.js';
import RestaurentsList from './src/screens/tabs/Restaurentslist.js';
import AttractionsList from './src/screens/tabs/attractionslist.js';
import Search from './src/screens/search.js';
import Filter from './src/screens/filter.js';

Icon.loadFont();
FontAwesome.loadFont();

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const Width = Dimensions.get('window').width;
const tabBarWidth = Width - 30; 

export default class App extends Component {
  render(){ 
    const listOptions = ({ navigation }) => ({
      title: 'Sweden',
          headerStyle: { backgroundColor: "#009CFA"},
          headerTintColor: "white",
          headerLeft: () => (
            <Icon name="ios-arrow-back" color="white" size={24} style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate('searchpage')}/>
          ),
           headerRight: () => (<View style={{
            flexDirection: "row"
          }} >
              <Icon name="ios-search" color="white" size={24} style={{ marginRight: 20 }}/>
              <TouchableOpacity style={{
                backgroundColor: 'transparent',
                borderRadius: 10,
                padding: 0,
                marginBottom: 10,
                shadowColor: '#303838',
                shadowOffset: { width: 0, height: 5 },
                shadowRadius: 10,
                shadowOpacity: 0.35,
              }} onPress={()=>navigation.navigate('filter')}>
            
              <Icon name="ios-options" color="white" size={24} style={{ marginRight: 20 }}
             
              />
       
       
           </TouchableOpacity>
              
              

           </View>
           
          ),

    })
    
    createSearchstack = () => 
      <Stack.Navigator>
        <Stack.Screen name ="searchpage" component= {Search}  options= {{
            headerShown: false
        }
      
    }/>
        <Stack.Screen name ="list" component= {createToptabs} 
        
        
        options={listOptions} />

        <Stack.Screen name ="filter" component= {Filter} options= {({navigation})=> {
          return {
            title: 'Filter',
          headerStyle: { backgroundColor: "#009CFA"},
          headerTintColor: "white",
            headerLeft: () => (
              <Icon name="ios-arrow-back" color="white" size={24} style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate('list')}/>
            ),
            headerRight: () => (
              <Button
              onPress={() => { }}
              color="white"
              title="Save"
              />
            )
      
            
            

          }

        }} />
      </Stack.Navigator>


    createReviewStack =() => 

      <Stack.Navigator>
      <Stack.Screen name="reviewhome" component={reviewPage} />
      <Stack.Screen name="reviewEnv" component={reviewEnvironment} options= {{
            headerShown: false}}/>
      
    </Stack.Navigator>
    
    createToptabs= () => {
      return (
        

      
      <MaterialTopTabs.Navigator tabBarOptions={{

                       indicatorStyle:{
                        
                        backgroundColor: 'blue',
                        marginLeft:-20
                        },
                        allowFontScaling: false,
                        activeTintColor: 'black',
                        tabStyle: {padding: 0, margin: 0, border: 0, },
                        labelStyle: { fontSize: 13 },
                        
                        
                      }}
                      
                   
                      >
                  <MaterialTopTabs.Screen name ="Hotels" component={HotelsList}/>
                  <MaterialTopTabs.Screen name ="Cities" component={CitiesList} 
                                  options={{
                                    tabBarLabel: () => (
                                       <Text style={{ fontSize: 13,marginLeft:-40 }}>CITIES</Text> )
                                  }}        
                                />
                  <MaterialTopTabs.Screen name ="Restaurants" component={RestaurentsList} 
                                  options={{
                                    tabBarLabel: () => (
                                       <Text style={{ fontSize: 13,marginLeft:-45 }}>RESTAURANTS</Text> )
                                  }} 
                  
                  />
                  <MaterialTopTabs.Screen name ="attractions" component={AttractionsList}
                                          options={{
                                            tabBarLabel: () => (
                                               <Text style={{ fontSize: 13,marginLeft:-30 }}>ATTRACTIONS</Text> )
                                          }} 
                  />
              </MaterialTopTabs.Navigator>

      )}

  return (

    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search';
            
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } 



            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#009CFA',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="Search" children={createSearchstack}
        options={{
          tabBarLabel: () => null,
        }}
        />

        <Tab.Screen
        name="Home"
        children={createReviewStack}
        options={{
          tabBarLabel: () => null,
          
           tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/rating-enabled.png')} style={{ height: 40, width: 40 }} />
            ),
        }}
        
      />
        <Tab.Screen name="Profile" component={Tab1}
        options={{
          tabBarLabel: () => null,
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}