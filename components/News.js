import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsItem from "./NewsItem";

export default class News extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ horizontal, tintColor }) => {
            return <Ionicons name="md-paper" size={horizontal ? 20 : 25} color={tintColor} />;
        },
    };

    componentDidMount() {
        this.props.fetchNews();
    }

    renderItem(article) {
        return <NewsItem article={article} />
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.mediumText, styles.textToCenter]}>News</Text>
                </View>
                <FlatList
                    data={this.props.articles}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        paddingVertical: 10,
    },
    mediumText: {
        fontSize: 36,
    },
    textToCenter: {
        textAlign: "center",
    }
});
