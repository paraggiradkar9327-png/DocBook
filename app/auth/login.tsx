import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import { router } from "expo-router";

import AppLogo from "../../components/AppLogo";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { supabase } from "../../services/supabase";

import { styles } from "../../styles/LoginStyles";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        const trimmedEmail = email.trim();

        if (!trimmedEmail || !password) {
            Alert.alert("Missing information", "Please enter both email and password.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: trimmedEmail,
            password,
        });

        setLoading(false);

        if (error) {
            Alert.alert("Login failed", error.message);
            return;
        }

        router.replace("/patient/home");
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
                            editable={!loading}
                        />

                        <Text style={styles.label}>Password</Text>

                        <AppInput
                            placeholder="Enter your password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            editable={!loading}
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
                        loading={loading}
                    />

                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>
                            Don't have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.push("/auth/signup")}
                            disabled={loading}
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