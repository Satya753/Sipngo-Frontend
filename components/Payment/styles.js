import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main:{
        display: 'flex',
        flex: 1,
        width: '100%'
    },
    optionsWrapper: {
        backgroundColor: '#fff',
        marginVertical: 20,
        padding: 15
    },
    header:{
        letterSpacing: 0.8,
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 20
    },
    paymentOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paymentOptions_info:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    paymentLabel:{
        fontSize: 17,
        paddingLeft: 5
    },
    payment_image:{
        width: 35,
        height: 35,
        borderRadius: 10
    }
});

export default styles;