import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    nav: {
        flexDirection: 'row', 
        marginTop: 50,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: "#000"
    },
    navFont: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
    },
    navFontActive: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: "#fff",
    }
})