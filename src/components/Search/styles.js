import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    between:{
      alignItems: 'center',
      flexDirection: 'row',
    },  
    input:{
      backgroundColor: '#F2F3F2',
      height: 51,
      width: 359,
      borderRadius: 15,
      marginTop: 60
    },
    box: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#E2E2E2',
      height: 248,
      width: 180,
      marginTop: 5,
      padding: 5,
      marginLeft: 13,
      margin: 15
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      margin: 5
    },
    title1: {
      fontWeight: 'bold',
      fontSize: 18,
      margin: 5,
      marginTop: 39
    },
    subTitle: {
      color: '#7C7C7C',
      marginLeft: 4,
      fontSize: 15,
    },
    subTitle1: {
      color: '#7C7C7C',
      marginLeft: 4,
      fontSize: 15,
    },
    valueBtn: {
      flexDirection: 'row'
    },  
    value: {
      fontWeight: 'bold',
      marginLeft: 4,
      marginTop: 10,
      fontSize: 18
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#53b175',
      height: 45,
      width: 45,
      borderRadius: 17,
      textAlign: 'center',
      marginLeft: 55
    },
    btnMais: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 30
    }
});