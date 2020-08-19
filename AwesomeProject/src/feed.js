import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/styles';

class Feed extends Component {
    render() {
        return (
            <View style= {styles.center}>
                <Text style ={styles.title}> Navigation drawer</Text>
                <Button
                    title='go to Feed Item'
                    onPress= {() => { }}
                />

            </View>
        )
    }
}

export default Feed;