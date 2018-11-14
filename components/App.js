import React from 'react';
import {StyleSheet, View, Text, FlatList, Image } from 'react-native';
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
        const image = article.item.urlToImage ? (<Image source={{uri: article.item.urlToImage}} style={styles.image} />) :
            (<Image source={require("../assets/no-image.jpg")} style={styles.image} />);
        const title = article.item.title.split(' ').slice(0, 5).join(' ');
        const description = article.item.description ? article.item.description.split(' ').slice(0, 10).join(' ') : "no description";
        const date = new Date(article.item.publishedAt);
        return (
            <View style={styles.listItem}>
                <View style={styles.leftColumn}>{image}</View>
                <View style={styles.rightColumn}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <View style={styles.bottomRow}>
                        <Text style={styles.authorNameText}>{article.item.author ? article.item.author : "no author"}</Text>
                        <Text>{date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.mediumText, styles.textToCenter]}>News</Text>
                </View>
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
        paddingVertical: 10,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderColor: '#e6e6e6',
        borderWidth: 1,
    },
    leftColumn: {
        flex: 1,
    },
    rightColumn: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    bottomRow: {
    },
    authorNameText: {
        fontWeight: "500",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    image: {
        height: 100,
        width: 100,
    },
    mediumText: {
        fontSize: 36,
    },
    textToCenter: {
        textAlign: "center",
    }
});

App.propTypes = {
    articles: PropTypes.array,
};