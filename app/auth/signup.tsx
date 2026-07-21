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
import AppLogo from "../../components/AppLogo";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { styles } from "../../styles/SignupStyles";
import { router } from "expo-router";
import { supabase } from "../../services/supabase"; // adjust path if needed
import LoginScreen from "./login";

export default function SignupScreen() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        // ── Validation ──────────────────────────────────────
        if (!fullName.trim() || !email.trim() || !mobile.trim() || !password || !confirmPassword) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters.");
            return;
        }

        if (!isChecked) {
            Alert.alert("Error", "Please accept the Terms & Conditions.");
            return;
        }

        setLoading(true);

        // ── Supabase sign up ─────────────────────────────────
        const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
                data: {
                    full_name: fullName.trim(),
                    mobile: mobile.trim(),
                },
            },
        });

        setLoading(false);

        if (error) {
            Alert.alert("Sign Up Failed", error.message);
            return;
        }

        // Supabase sends a confirmation email by default.
        // If email confirmation is disabled in your Supabase project,
        // data.user will be set and you can navigate directly.
        if (data.user && !data.session) {
            // Email confirmation required
            Alert.alert(
                "Verify your email",
                "A confirmation link has been sent to " + email.trim() + ". Please verify before logging in.",
                [{ text: "OK", onPress: () => router.replace("/auth/login") }]
            );
        } else {
            // Email confirmation is OFF — user is logged in immediately
            // router.replace("/patient/home");
        }
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

                    <Text style={styles.title}>Create Account</Text>

                    <Text style={styles.desc}>
                        Join DocBook and book appointments with trusted doctors.
                    </Text>

                    <View style={styles.formContainer}>

                        <Text style={styles.label}>Full Name</Text>
                        <AppInput
                            placeholder="Enter your full name"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <Text style={styles.label}>Email</Text>
                        <AppInput
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.label}>Mobile Number</Text>
                        <AppInput
                            placeholder="Enter mobile number"
                            keyboardType="phone-pad"
                            value={mobile}
                            onChangeText={setMobile}
                        />

                        <Text style={styles.label}>Password</Text>
                        <AppInput
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <Text style={styles.label}>Confirm Password</Text>
                        <AppInput
                            placeholder="Confirm Password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirm}
                        />

                    </View>

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setIsChecked(!isChecked)}
                    >
                        <Text style={styles.checkbox}>
                            {isChecked ? "☑" : "☐"}
                        </Text>
                        <Text style={styles.link}>Terms & Conditions</Text>
                    </TouchableOpacity>

                    <AppButton
                        title={loading ? "Creating Account..." : "Create Account"}
                        disabled={loading}
                        onPress={() => handleSignup()}
                    />

                    <View style={styles.bottom}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={() => router.push("/auth/login")}>
                            <Text style={styles.signup}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}