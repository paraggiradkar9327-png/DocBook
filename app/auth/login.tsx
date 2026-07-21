import { router } from "expo-router";
import { useState } from "react";
import { styles } from "../../styles/LoginStyles";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.logoContainer}>
                <Text style={styles.logo}>🩺</Text>
            </View>

            <Text style={styles.title}>DocBook</Text>

            <Text style={styles.subtitle}>
                Welcome Back 👋
            </Text>

            <Text style={styles.desc}>
                Book appointments with trusted doctors.
            </Text>

            <View style={{ marginTop: 35 }}>

                <Text style={styles.label}>Email</Text>

                <TextInput
                    placeholder="Enter your email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Password</Text>

                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />

            </View>

            <TouchableOpacity>
                <Text style={styles.forgot}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginButton}
            // onPress={() => router.replace("/patient/home")}
            >
                <Text style={styles.loginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>

            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.or}>OR</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.googleText}>
                    Continue with Google
                </Text>
            </TouchableOpacity>

            <View style={styles.bottom}>

                <Text style={styles.bottomText}>
                    Don't have an account?
                </Text>

                <TouchableOpacity
                    onPress={() => router.push("/auth/signup")}
                >
                    <Text style={styles.signup}>
                        Create Account
                    </Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}