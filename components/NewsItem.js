import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default (props) => {
    const article = props.article;
    const image = article.item.urlToImage ? (<Image source={{uri: article.item.urlToImage}} style={styles.image} />) :
        (<Image source={require("../assets/no-image.jpg")} style={styles.image} />);
    const title = article.item.title.split(' ').slice(0, 5).join(' ');
    const description = article.item.description ? article.item.description.split(' ').slice(0, 10).join(' ') : "no description";
    const date = new Date(article.item.publishedAt);
    let author;
    if (article.item.author) {
        if (article.item.author.split(' ')[0].length < 20) {
            author = article.item.author.split(' ').slice(0, 3).join(' ');
        } else {
            author = `${article.item.author.slice(0, 20)}...`;
        }
    } else {
        author = "no author"
    }
    return (
        <View style={styles.listItem}>
            <View style={styles.leftColumn}>{image}</View>
            <View style={styles.rightColumn}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.bottomRow}>
                    <Text style={styles.authorNameText}>{author}</Text>
                    <Text style={styles.date}>{date.getDate()} {date.getMonth() + 1} {date.getFullYear()}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
    description: {
        fontSize: 14,
    },
    image: {
        height: 100,
        width: 100,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    authorNameText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#43ABC9"
    },
    date: {
        fontSize: 14,
        fontWeight: "500",
        color: "#D3B53D"
    },
});
