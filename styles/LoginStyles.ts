import { StyleSheet } from "react-native";
import { Theme } from "../theme/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.background,
    paddingHorizontal: Theme.Spacing.lg,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#2563EB",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
    color: "#1F2937",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 10,
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
  },

  input: {
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  forgot: {
    alignSelf: "flex-end",
    color: "#2563EB",
    marginBottom: 25,
  },

  button: {
    height: 55,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D1D5DB",
  },

  or: {
    marginHorizontal: 12,
    color: "#6B7280",
  },

  googleButton: {
    height: 55,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  googleText: {
    color: "#1F2937",
    fontWeight: "600",
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  bottomText: {
    color: "#64748B",
  },

  signupText: {
    color: "#2563EB",
    fontWeight: "700",
    marginLeft: 5,
  },
  desc: {
    color: "#64748B",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  signup: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 5,
  },

  loginButton: {
    backgroundColor: "#2563EB",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  formContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    gap: 12, // React Native 0.71+ supports gap
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  terms: {
    fontSize: 14,
    color: "#64748B",
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },
  login: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 5,
  },

});