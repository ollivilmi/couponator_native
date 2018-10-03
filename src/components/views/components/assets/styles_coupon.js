import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    coupon: {
        width: 150, borderColor: "#000", borderRadius: 12, margin: 10, padding: 10, backgroundColor: "#e1eae1"
    },
    couponHeader: {
        fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff", padding: 10, backgroundColor: "#1b7c1b", marginBottom: 10
    },
    font: {
        textAlign: "center"
    },
    container: {
        flex: 1, flexDirection: "row", justifyContent: "center", flexWrap: 'wrap'
    }
})