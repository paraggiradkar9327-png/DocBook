import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Theme } from "../theme/Theme";

type Props = {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
};

export default function AppButton({ title, onPress, loading, disabled }: Props) {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            style={[styles.button, isDisabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={Theme.Colors.white} />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
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

    buttonDisabled: {
        opacity: 0.6,
    },

    text: {
        color: Theme.Colors.white,
        fontSize: Theme.FontSizes.lg,
        fontWeight: "700",
    },
});