import RootLayout from "@/app/_layout";
import React, {useEffect, useState} from "react";
import {onAuthStateChanged, User} from "@firebase/auth";
import {auth} from "@/firebase";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {router} from "expo-router";


export default function Main() {
    const [currUser, setCurrUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setCurrUser(user);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!loading) {
            if (!currUser) {
                router.push('/sign_in');
            } else {
                alert(currUser.displayName);
                {!currUser.displayName && router.push('/profile_setup');
                    return;
                }
                alert("next step: going to (tabs)");
                router.push('/(tabs)');
            }
        }
    }, [loading, currUser]);

    if (loading) {
        return <Text>Loading...</Text>;
    }
}