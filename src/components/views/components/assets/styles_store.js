import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    store: {
        width: 250, borderColor: "#000", borderRadius: 12, margin: 10, padding: 10, backgroundColor: "#5acbec"
    },
    storeHeader: {
        backgroundColor: "#31bae2", marginBottom: 10, flex: 1, flexDirection: "row", justifyContent: "space-around"
    },
    storeHeaderFont: {
        fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#fff", padding: 10
    },
    storeImage: {
        marginTop: 7, width: 60, height: 35
    },
    mainHeader: {
        fontSize: 30, fontWeight: "bold", textAlign: "center", padding: 8, backgroundColor: "#5acbec", color: "#fff", borderBottomWidth: 1
    },
    font: {
        textAlign: "center", color: "#fff", padding: 10, fontSize: 14
    },
    content: {
        flex: 1, flexDirection: "row", justifyContent: "space-between"
    },
    exitButton: {
        backgroundColor: "#4286f4", color: "#fff", padding: 20, fontSize: 22, textAlign: "center", marginTop: 50
    }
})