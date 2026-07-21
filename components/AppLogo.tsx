import { Image, StyleSheet, View } from "react-native";

export default function AppLogo() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
        width: 90,
        height: 90,
        resizeMode: "contain",
    },
});