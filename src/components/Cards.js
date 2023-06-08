import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cards = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Projeto 4º DSM IOT</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        margin: 2,
        borderRadius: 5,
        borderColor: "#ffffff",
        borderWidth: 2,
        width: 300,
        height: 100,
        backgroundColor: "#2f003f",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 15,
        color: "#e9cfaa",
        fontWeight: "bold",
    },
});

export default Cards;