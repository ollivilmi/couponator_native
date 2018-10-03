import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    nav: {
        flexDirection: 'row', 
        marginTop: 24,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: "#5acbec"
    },
    navFont: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
    },
    navFontActive: {
        color: "#ccf4ff",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: "#61bdd8",
    }
})