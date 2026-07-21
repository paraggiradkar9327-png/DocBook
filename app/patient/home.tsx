import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../../theme/Theme";
import { styles } from "../../styles/Homestyles";

const { Colors } = Theme;

/* ---------------------------------- Data --------------------------------- */

type Category = {
    id: string;
    label: string;
    icon: React.ReactNode;
};

type Doctor = {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    reviews: number;
    experience: string;
    clinic: string;
    image: string;
};

const CATEGORIES: Category[] = [
    { id: "all", label: "All", icon: <Ionicons name="grid" size={20} color={Colors.white} /> },
    { id: "cardiologist", label: "Cardiologist", icon: <Ionicons name="heart" size={20} color={Colors.danger} /> },
    { id: "dentist", label: "Dentist", icon: <MaterialCommunityIcons name="tooth-outline" size={20} color={Colors.primary} /> },
    { id: "pediatrician", label: "Pediatrician", icon: <MaterialCommunityIcons name="baby-face-outline" size={20} color={Theme.Colors.success} /> },
];

const DOCTORS: Doctor[] = [
    {
        id: "1",
        name: "Dr. Rahul Sharma",
        specialty: "Cardiologist",
        rating: 4.8,
        reviews: 320,
        experience: "10+ Yrs Exp.",
        clinic: "ABC Heart Clinic, Nagpur",

        image: "https://i.pravatar.cc/150?img=13",
    },
    {
        id: "2",
        name: "Dr. Priya Mehta",
        specialty: "Dermatologist",
        rating: 4.7,
        reviews: 215,
        experience: "8+ Yrs Exp.",
        clinic: "Skin Care Clinic, Nagpur",

        image: "https://i.pravatar.cc/150?img=32",
    },
    {
        id: "3",
        name: "Dr. Ankit Verma",
        specialty: "Orthopedic",
        rating: 4.6,
        reviews: 180,
        experience: "12+ Yrs Exp.",
        clinic: "Ortho Care Hospital",
        image: "https://i.pravatar.cc/150?img=51",
    },
];

/* --------------------------------- Screen --------------------------------- */

export default function PatientHomeScreen() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeTab, setActiveTab] = useState("doctors");
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="menu" size={26} color={Colors.text} />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Find Doctors</Text>

                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="notifications-outline" size={24} color={Colors.text} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                {/* Search bar */}
                <View style={styles.searchRow}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={20} color={Colors.subText} />
                        <TextInput
                            placeholder="Search doctors, specialties..."
                            placeholderTextColor={Colors.subText}
                            style={styles.searchInput}
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="options-outline" size={20} color={Colors.white} />
                    </TouchableOpacity>
                </View>

                {/* Categories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryRow}
                >
                    {CATEGORIES.map((cat) => {
                        const active = activeCategory === cat.id;
                        return (
                            <TouchableOpacity
                                key={cat.id}
                                style={styles.categoryItem}
                                onPress={() => setActiveCategory(cat.id)}
                            >
                                <View
                                    style={[
                                        styles.categoryIconWrap,
                                        active && { backgroundColor: Colors.primary },
                                    ]}
                                >
                                    {cat.id === "all" ? (
                                        <Ionicons
                                            name="grid"
                                            size={20}
                                            color={active ? Colors.white : Colors.primary}
                                        />
                                    ) : (
                                        cat.icon
                                    )}
                                </View>
                                <Text
                                    style={[
                                        styles.categoryLabel,
                                        active && { color: Colors.primary, fontWeight: "700" },
                                    ]}
                                >
                                    {cat.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                {/* Banner */}
                <LinearGradient
                    colors={[Colors.primary, Colors.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.banner}
                >
                    <View style={styles.bannerTextWrap}>
                        <Text style={styles.bannerTitle}>We care for{"\n"}your health</Text>
                        <Text style={styles.bannerSubtitle}>
                            Book Now with trusted doctors
                        </Text>

                        <TouchableOpacity style={styles.bookNowButton}>
                            <Text style={styles.bookNowText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bannerIconWrap}>
                        <Ionicons name="medkit" size={54} color="rgba(255,255,255,0.9)" />
                    </View>
                </LinearGradient>

                {/* Top doctors */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Doctors Near You</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.doctorList}>
                    {DOCTORS.map((doc) => (
                        <View key={doc.id} style={styles.doctorCard}>
                            <Image source={{ uri: doc.image }} style={styles.doctorImage} />

                            <View style={styles.doctorInfo}>
                                <Text style={styles.doctorName}>{doc.name}</Text>
                                <Text style={styles.doctorSpecialty}>{doc.specialty}</Text>

                                <View style={styles.doctorMetaRow}>
                                    <Ionicons name="star" size={14} color={Colors.warning} />
                                    <Text style={styles.doctorMetaText}>
                                        {doc.rating} ({doc.reviews} reviews)
                                    </Text>
                                </View>

                                <View style={styles.doctorMetaRow}>
                                    <Ionicons name="briefcase-outline" size={14} color={Colors.subText} />
                                    <Text style={styles.doctorMetaText}>{doc.experience}</Text>
                                </View>

                                <View style={styles.doctorMetaRow}>
                                    <Ionicons name="location-outline" size={14} color={Colors.subText} />
                                    <Text style={styles.doctorMetaText} numberOfLines={1}>
                                        {doc.clinic}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.doctorRight}>
                                <TouchableOpacity style={styles.favoriteButton}>
                                    <Ionicons name="heart-outline" size={20} color={Colors.danger} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom tab bar */}
            <View style={styles.tabBar}>
                <TabItem
                    label="Home"
                    icon="home-outline"
                    activeIcon="home"
                    active={activeTab === "home"}
                    onPress={() => setActiveTab("home")}
                />
                <TabItem
                    label="Doctors"
                    icon="medkit-outline"
                    activeIcon="medkit"
                    active={activeTab === "doctors"}
                    onPress={() => setActiveTab("doctors")}
                />
                <TabItem
                    label="Appointments"
                    icon="calendar-outline"
                    activeIcon="calendar"
                    active={activeTab === "appointments"}
                    onPress={() => setActiveTab("appointments")}
                />
                <TabItem
                    label="Profile"
                    icon="person-outline"
                    activeIcon="person"
                    active={activeTab === "profile"}
                    onPress={() => setActiveTab("profile")}
                />
            </View>
        </SafeAreaView>
    );
}

/* ------------------------------- Tab item --------------------------------- */

function TabItem({
    label,
    icon,
    activeIcon,
    active,
    onPress,
}: {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    activeIcon: keyof typeof Ionicons.glyphMap;
    active: boolean;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity style={styles.tabItem} onPress={onPress}>
            <Ionicons
                name={active ? activeIcon : icon}
                size={22}
                color={active ? Colors.primary : Colors.subText}
            />
            <Text style={[styles.tabLabel, active && { color: Colors.primary, fontWeight: "700" }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

