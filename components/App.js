import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {text: ""};
    }

    componentDidMount() {
        this.props.fetchNews();
    }

    renderItem(article) {
        return (
            <View style={styles.listItem}>
                <Text>{article.item.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.articles}
                    // extraData={this.props.status}
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 75,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        paddingHorizontal: 10,
    }
});

App.propTypes = {
    articles: PropTypes.array,
};