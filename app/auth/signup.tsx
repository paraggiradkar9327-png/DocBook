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
import AppLogo from "../../components/AppLogo";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { styles } from "../../styles/SignupStyles"
import { router } from "expo-router";


export default function SignupScreen() {
    const [isChecked, setIsChecked] = useState(false);
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
                        <AppInput placeholder="Enter your full name" />

                        {/* Email */}
                        <Text style={styles.label}>Email</Text>
                        <AppInput placeholder="Enter your email" />

                        {/* Mobile */}
                        <Text style={styles.label}>Mobile Number</Text>
                        <AppInput placeholder="Enter mobile number" />

                        {/* Password */}
                        <Text style={styles.label}>Password</Text>
                        <AppInput placeholder="Password" secureTextEntry />

                        {/* Confirm Password */}
                        <Text style={styles.label}>Confirm Password</Text>
                        <AppInput placeholder="Confirm Password" secureTextEntry />

                    </View>

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setIsChecked(!isChecked)}
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
                        onPress={() => { }}
                    />

                    <View style={styles.bottom}>
                        <Text>Already have an account?</Text>

                        <TouchableOpacity
                            onPress={() => router.push("/auth/login")}
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