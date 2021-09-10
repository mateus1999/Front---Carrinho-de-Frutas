import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageBackground: {
        height: 220,
        position: 'relative',
    },
    image: {
        flex: 1,
        width: '95%',
        height: '129%',
        marginLeft: 30
    },
    loging: {
        fontSize: 26,
        margin: 10,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#7C7C7C',
        margin: 2,
        marginLeft: 30
    },
    textEmail: {
        fontSize: 16,
        color: '#7C7C7C',
        marginLeft: 30,
        marginTop: 25,
    },
    textPassowrd: {
        fontSize: 16,
        color: '#7C7C7C',
        marginLeft: 30,
        marginTop: 10,
    },
    input: {
        fontSize: 15,
        marginLeft: 30,
        margin: 10,
        marginRight: 40,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
    },
    inputPassword:{
        fontSize: 15,
        marginLeft: 30,
        margin: 5,
        marginRight: 40,
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        margin: 10,
    },
    icon:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 40,
    },

    createPassoword: {
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    btnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 353,
        height: 67,
        marginTop: 2,
        alignItems: "center",
        backgroundColor: "#53B175",
        padding: 10,
        borderRadius: 18
    },
    btnText: {
        color: 'white',
        fontSize: 18
    },
    account: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30
    },
    accountUp: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    singUp: {
        color: '#53B175',
        fontWeight: 'bold',
    }

});