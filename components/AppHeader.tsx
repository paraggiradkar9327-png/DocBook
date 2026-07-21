import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../theme/Theme";

type Props = {
    title: string;
};

export default function AppHeader({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },

    title: {
        fontSize: Theme.FontSizes.xxl,
        fontWeight: "700",
        color: Theme.Colors.text,
    },
});