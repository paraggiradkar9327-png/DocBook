import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

import AppLogo from "../../components/AppLogo";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";

import { styles } from "../../styles/LoginStyles";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // TODO: Add Login API
        // router.replace("/patient/home");
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <AppLogo />

                    <Text style={styles.title}>Welcome Back</Text>

                    <Text style={styles.desc}>
                        Login to continue using DocBook
                    </Text>

                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Email</Text>

                        <AppInput
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.label}>Password</Text>

                        <AppInput
                            placeholder="Enter your password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgot}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <AppButton
                        title="Login"
                        onPress={handleLogin}
                    />

                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>
                            Don't have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.push("/auth/signup")}
                        >
                            <Text style={styles.signup}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}