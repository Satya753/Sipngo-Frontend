import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main : {
        width : "100%",
        display: 'flex',
        flex: 1
    },
    addressWrapper:{
        backgroundColor: '#fff',
        marginVertical: 20,
        padding: 15,
        width: '100%'
    },
    userInfo:{
        paddingBottom : 10,
        display: "flex",
        flexDirection: 'row',
    },
    userName:{
        fontWeight : "500",
        letterSpacing: 0.8,
        fontSize :16
    },
    addressType:{
        backgroundColor: "#e6f7eb",
        color: '#a4a6a5',
        alignSelf: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 3,
        marginLeft: 4,
        fontSize: 11
    },
    addressInfo:{
        width: "100%"
    },
    changeBtnWrapper:{
        width: '25%',
        marginTop: 10
    },
    subscriptionWrapper:{
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 20
    },
    priceDetailsWrapper: {
        backgroundColor: '#fff',
        padding: 15
    },
    priceHeader: {
        fontWeight: '700',
        letterSpacing: 0.8,
        fontSize :18,
        paddingBottom: 20
    },
    price_item:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 6,
    },
    subscriptionBtnWrapper:{
        width: '80%',
        alignSelf: 'center',
    },
    subscriptionLabel:{
        fontSize : 16,
        color : '#fff',
        fontWeight : '500',
        paddingVertical : 10,
        paddingHorizontal: 10
    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15
    },
    footer_amount:{
        fontSize: 24,
        letterSpacing: 0.8,
        fontWeight: '500'
    },
    footerBtn_text: {
        fontSize: 20,
        color: '#fff',
        letterSpacing: 0.8
    },
    touchable: {flex: 0.5, borderColor: 'black', borderWidth: 1},
    text: {alignSelf: 'center'},
})

export default style;