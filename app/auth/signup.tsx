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
import { styles } from "../../styles/SignupStyles"
import { router } from "expo-router";
import { supabase } from "../../services/supabase";


export default function SignupScreen() {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateAccount = async () => {
        const trimmedName = fullName.trim();
        const trimmedEmail = email.trim();
        const trimmedMobile = mobile.trim();

        if (!trimmedName || !trimmedEmail || !trimmedMobile || !password || !confirmPassword) {
            Alert.alert("Missing information", "Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Weak password", "Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Passwords don't match", "Please re-enter matching passwords.");
            return;
        }

        if (!isChecked) {
            Alert.alert("Terms & Conditions", "Please accept the Terms & Conditions to continue.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.signUp({
            email: trimmedEmail,
            password,
            options: {
                data: {
                    full_name: trimmedName,
                    mobile: trimmedMobile,
                },
            },
        });

        setLoading(false);

        if (error) {
            Alert.alert("Sign up failed", error.message);
            return;
        }

        Alert.alert(
            "Check your email",
            "We've sent you a confirmation link. Please verify your email, then log in.",
            [{ text: "OK", onPress: () => router.replace("/auth/login") }]
        );
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

                    {/* Logo */}
                    <AppLogo />

                    {/* Title */}
                    <Text style={styles.title}>Create Account</Text>

                    <Text style={styles.desc}>
                        Join DocBook and book appointments with trusted doctors.
                    </Text>

                    {/* Form */}
                    <View style={styles.formContainer}>

                        {/* Full Name */}
                        <Text style={styles.label}>Full Name</Text>
                        <AppInput
                            placeholder="Enter your full name"
                            value={fullName}
                            onChangeText={setFullName}
                            editable={!loading}
                        />

                        {/* Email */}
                        <Text style={styles.label}>Email</Text>
                        <AppInput
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            editable={!loading}
                        />

                        {/* Mobile */}
                        <Text style={styles.label}>Mobile Number</Text>
                        <AppInput
                            placeholder="Enter mobile number"
                            keyboardType="phone-pad"
                            value={mobile}
                            onChangeText={setMobile}
                            editable={!loading}
                        />

                        {/* Password */}
                        <Text style={styles.label}>Password</Text>
                        <AppInput
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            editable={!loading}
                        />

                        {/* Confirm Password */}
                        <Text style={styles.label}>Confirm Password</Text>
                        <AppInput
                            placeholder="Confirm Password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            editable={!loading}
                        />

                    </View>

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setIsChecked(!isChecked)}
                        disabled={loading}
                    >
                        <Text style={styles.checkbox}>
                            {isChecked ? "☑" : "☐"}
                        </Text>

                        <Text
                            style={styles.link}
                        >
                            Terms & Conditions
                        </Text>
                    </TouchableOpacity>

                    <AppButton
                        title="Create Account"
                        onPress={handleCreateAccount}
                        loading={loading}
                    />

                    <View style={styles.bottom}>
                        <Text>Already have an account?</Text>

                        <TouchableOpacity
                            onPress={() => router.push("/auth/login")}
                            disabled={loading}
                        >
                            <Text style={styles.signup}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}