import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../../styles/styles';

class Tab1 extends Component {
    render() {
        return (
            <View style= {styles.center}>
                <Text style ={styles.title}> Profile Screen</Text>
                <Button
                    title='profile '
                    onPress= {() => { }}
                />

            </View>
        )
    }
}

export default Tab1;