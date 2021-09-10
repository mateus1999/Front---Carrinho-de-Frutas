import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom: 20
  },  
  image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',  
  },
  form:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 280
  },  
  title: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 45,
    textAlign: 'center'
  },
  subTitle: {
    color: 'white',
    margin: 10,
    textAlign: 'center'
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