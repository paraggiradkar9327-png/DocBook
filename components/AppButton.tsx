import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Theme } from "../theme/Theme";

type Props = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
};

export default function AppButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Theme.Colors.primary,
        height: 55,
        borderRadius: Theme.Radius.lg,
        justifyContent: "center",
        alignItems: "center",
        ...Theme.Shadows.card,
    },

    text: {
        color: Theme.Colors.white,
        fontSize: Theme.FontSizes.lg,
        fontWeight: "700",
    },
});