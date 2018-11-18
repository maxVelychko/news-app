import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mediumText}>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mediumText: {
        fontSize: 36,
    },
});