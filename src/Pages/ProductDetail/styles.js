import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgBackground:{
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F3F2',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 5
    },
    iconsOn: {
        flexDirection: 'row'
    },  
    goBack: {
        marginTop: 30,
        marginLeft: 9
    },
    compartilhar: {
        marginLeft: 330,
        marginTop: 32
    },  
    image:{
        marginTop: 120,
        width: 329,
        height: 199,
        marginBottom: 120
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginRight: 190,
        marginTop: 10
    },
    subTitle:{
        color: '#7C7C7C',
        fontSize: 16
    },
    states:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -5,
        marginRight: 279,
        marginLeft: 25
    },
    menos:{
        color: '#B3B3B3',
        fontSize: 60,
        marginHorizontal: 5
    },
    mais:{
        color: '#53B175',
        fontSize: 30,
        marginHorizontal: 5
    },
    box:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: 45,
        height: 45,
        borderRadius: 17,
        borderColor: '#E2E2E2'
    },
    quantidade:{
        fontWeight: 'bold',
        fontSize: 18
    },
    formDetail:{
        justifyContent: 'center',
        marginRight: 85,
        marginTop: 15
    },  
    detail:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 11
    },
    subDetail:{
        marginTop: 10,
        color: '#7C7C7C',
        fontSize: 13,
        marginLeft: 15
    },
    nutrition:{
        marginTop: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    review:{
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 330,
    },
    titleReview: {
        fontWeight: 'bold',
        marginRight: 11
    },  
    btn:{
        justifyContent:'center',
        alignItems: 'center',
        width: 353,
        height: 67,
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#53B175",
        padding: 10,
        borderRadius: 18
      },
      btnText: {
        color: 'white',
        fontSize: 18
      }

});