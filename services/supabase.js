import "react-native-url-polyfill/auto";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Values are injected at build time from EXPO_PUBLIC_* env vars (see .env.example).
// Never hardcode keys directly in source files that get committed to git.
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Make sure EXPO_PUBLIC_SUPABASE_URL and " +
    "EXPO_PUBLIC_SUPABASE_ANON_KEY are set in your .env file (see .env.example)."
  );
}

// AsyncStorage touches `window`/localStorage on web, which doesn't exist yet
// during Expo's server-side static render. This adapter uses AsyncStorage on
// native platforms and a SSR-safe localStorage wrapper on web.
const webStorage = {
  getItem: (key) => {
    if (typeof window === "undefined") return Promise.resolve(null);
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    if (typeof window === "undefined") return Promise.resolve();
    window.localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key) => {
    if (typeof window === "undefined") return Promise.resolve();
    window.localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const authStorage = Platform.OS === "web" ? webStorage : AsyncStorage;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: authStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});