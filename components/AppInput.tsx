import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Theme } from "../theme/Theme";

export default function AppInput(props: any) {
    return (
        <TextInput
            placeholderTextColor="#94A3B8"
            style={styles.input}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 55,
        backgroundColor: Theme.Colors.white,
        borderRadius: Theme.Radius.lg,
        borderWidth: 1,
        borderColor: Theme.Colors.border,
        paddingHorizontal: 18,
        marginBottom: 18,
        fontSize: Theme.FontSizes.md,
    },
});