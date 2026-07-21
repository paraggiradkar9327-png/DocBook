import { StyleSheet } from "react-native";
import { Theme } from "../theme/Theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Theme.Colors.background,
        padding: Theme.Spacing.lg,
        justifyContent: "center",
    },

    title: {
        fontSize: Theme.FontSizes.title,
        fontWeight: "700",
        color: Theme.Colors.primary,
        textAlign: "center",
        marginTop: 15,
    },

    desc: {
        textAlign: "center",
        color: Theme.Colors.subText,
        marginTop: 8,
        marginBottom: 30,
        fontSize: Theme.FontSizes.md,
    },

    formContainer: {
        marginBottom: 20,
    },

    label: {
        fontWeight: "600",
        color: Theme.Colors.text,
        marginBottom: 6,
        marginTop: 10,
    },

    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },


    terms: {
        marginLeft: 10,
        color: Theme.Colors.subText,
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25,
    },

    bottomText: {
        color: Theme.Colors.subText,
    },

    login: {
        color: Theme.Colors.primary,
        fontWeight: "700",
        marginLeft: 5,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 30,
    },
    signup: {
        color: "#2563EB",
        fontSize: 15,
        fontWeight: "700",
        marginLeft: 5,
    },
    checkbox: {
        fontSize: 22,
    },
    link: {
        color: '#2563EB', // Blue color
        fontSize: 14,
        fontWeight: '600',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 10,
    },
});