import { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { supabase } from "../services/supabase";

const MIN_SPLASH_MS = 1500;

export default function SplashScreen() {

    useEffect(() => {
        let cancelled = false;

        const decideRoute = async () => {
            const start = Date.now();

            const { data } = await supabase.auth.getSession();

            const elapsed = Date.now() - start;
            const remaining = Math.max(MIN_SPLASH_MS - elapsed, 0);

            setTimeout(() => {
                if (cancelled) return;

                if (data.session) {
                    router.replace("/patient/home");
                } else {
                    router.replace("/auth/login");
                }
            }, remaining);
        };

        decideRoute();

        return () => {
            cancelled = true;
        };
    }, []);

    return (

        <View style={styles.container}>

            <View style={styles.logoContainer}>

                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />

            </View>

            <Text style={styles.title}>DocBook</Text>

            <Text style={styles.subtitle}>
                Your Health, Our Priority
            </Text>

            <View style={styles.featureContainer}>

                <Text style={styles.feature}>🩺 Book Doctors</Text>

                <Text style={styles.feature}>📅 Manage Appointments</Text>

                <Text style={styles.feature}>⏱️ Live Token Tracking</Text>

            </View>

            <ActivityIndicator
                size="large"
                color="#2563EB"
                style={{ marginTop: 60 }}
            />

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },

    logoContainer: {

        width: 120,
        height: 120,
        backgroundColor: "#EAF3FF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25

    },

    logo: {

        width: 70,
        height: 70,
        resizeMode: "contain"

    },

    title: {

        fontSize: 36,
        fontWeight: "700",
        color: "#2563EB"

    },

    subtitle: {

        marginTop: 10,
        color: "#6B7280",
        fontSize: 17

    },

    featureContainer: {

        marginTop: 60,
        width: "100%"

    },

    feature: {

        fontSize: 18,
        marginBottom: 18,
        color: "#374151"

    }

});