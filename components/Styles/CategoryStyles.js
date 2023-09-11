import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer : {
        width : '46%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 6,
        paddingBottom: 2,
        lineHeight: '0%'
    },
    innerContainer:{
        lineHeight: '0%',
        borderWidth: 0,
        padding: 0,
        margin:0
    },
    productImage:{
        lineHeight : "0%",
        backgroundColor: 'grey'
    },
    productName: {
        textAlign: 'center',
        marginTop: 20,
        letterSpacing: 1.2,
        fontWeight: "600"
    }
});

export default styles;