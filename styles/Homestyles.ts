import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";
import { Radius } from "@/theme/Radius";
import { FontSizes } from "@/theme/FontSizes";
import { Shadows } from "@/theme/Shadows";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    scrollContent: {
        paddingHorizontal: Spacing.lg,
        paddingBottom: 100,
    },

    /* Header */
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Spacing.md,
        paddingBottom: Spacing.sm,
    },

    iconButton: {
        width: 40,
        height: 40,
        borderRadius: Radius.round,
        justifyContent: "center",
        alignItems: "center",
    },

    headerTitle: {
        fontSize: FontSizes.xl,
        fontWeight: "700",
        color: Colors.text,
    },

    notificationDot: {
        position: "absolute",
        top: 8,
        right: 9,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.danger,
    },

    /* Search */
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: Spacing.sm,
        gap: Spacing.sm,
    },

    searchBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.card,
        borderRadius: Radius.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 14,
        height: 48,
        gap: 8,
    },

    searchInput: {
        flex: 1,
        fontSize: FontSizes.sm,
        color: Colors.text,
    },

    filterButton: {
        width: 48,
        height: 48,
        borderRadius: Radius.lg,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        ...Shadows.card,
    },

    /* Categories */
    categoryRow: {
        paddingVertical: Spacing.lg,
        gap: Spacing.lg,
    },

    categoryItem: {
        alignItems: "center",
        width: 76,
    },

    categoryIconWrap: {
        width: 52,
        height: 52,
        borderRadius: Radius.round,
        backgroundColor: Colors.card,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.border,
        marginBottom: 6,
    },

    categoryLabel: {
        fontSize: FontSizes.xs,
        color: Colors.subText,
        textAlign: "center",
    },

    /* Banner */
    banner: {
        borderRadius: Radius.xl,
        padding: Spacing.lg,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: Spacing.xl,
        ...Shadows.card,
    },

    bannerTextWrap: {
        flex: 1,
    },

    bannerTitle: {
        color: Colors.white,
        fontSize: FontSizes.xl,
        fontWeight: "700",
        lineHeight: 26,
    },

    bannerSubtitle: {
        color: "rgba(255,255,255,0.9)",
        fontSize: FontSizes.sm,
        marginTop: 6,
        marginBottom: Spacing.md,
    },

    bookNowButton: {
        backgroundColor: Colors.white,
        alignSelf: "flex-start",
        paddingHorizontal: Spacing.lg,
        paddingVertical: 10,
        borderRadius: Radius.round,
    },

    bookNowText: {
        color: Colors.primary,
        fontWeight: "700",
        fontSize: FontSizes.sm,
    },

    bannerIconWrap: {
        width: 70,
        height: 70,
        borderRadius: Radius.round,
        backgroundColor: "rgba(255,255,255,0.15)",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: Spacing.sm,
    },

    /* Section header */
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: Spacing.md,
    },

    sectionTitle: {
        fontSize: FontSizes.lg,
        fontWeight: "700",
        color: Colors.text,
    },

    seeAll: {
        fontSize: FontSizes.sm,
        color: Colors.primary,
        fontWeight: "600",
    },

    /* Doctor list */
    doctorList: {
        gap: Spacing.md,
    },

    doctorCard: {
        flexDirection: "row",
        backgroundColor: Colors.card,
        borderRadius: Radius.lg,
        padding: Spacing.md,
        alignItems: "flex-start",
        ...Shadows.card,
    },

    doctorImage: {
        width: 64,
        height: 64,
        borderRadius: Radius.md,
        marginRight: Spacing.md,
        backgroundColor: Colors.border,
    },

    doctorInfo: {
        flex: 1,
        gap: 3,
    },

    doctorName: {
        fontSize: FontSizes.md,
        fontWeight: "700",
        color: Colors.text,
    },

    doctorSpecialty: {
        fontSize: FontSizes.xs,
        color: Colors.subText,
        marginBottom: 2,
    },

    doctorMetaRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    doctorMetaText: {
        fontSize: FontSizes.xs,
        color: Colors.subText,
    },

    doctorRight: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        height: 64,
    },

    favoriteButton: {
        padding: 2,
    },

    doctorFee: {
        fontSize: FontSizes.md,
        fontWeight: "700",
        color: Colors.text,
    },

    /* Bottom tab bar */
    tabBar: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        backgroundColor: Colors.card,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: 10,
        paddingBottom: Platform.OS === "ios" ? 24 : 12,
    },

    tabItem: {
        flex: 1,
        alignItems: "center",
        gap: 4,
    },

    tabLabel: {
        fontSize: 11,
        color: Colors.subText,
    },
});