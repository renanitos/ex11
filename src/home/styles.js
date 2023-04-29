import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input:{
    height: 30,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  campos:{
    fontSize: 18,
    marginTop: 13,
    marginLeft: 10
  },
  row:{
    flexDirection: 'row'
  },
  switch: {
    alignSelf: 'center',
    marginTop: 10
  },
  slider: {
    alignSelf: 'center',
    marginTop: 15
  },
  limite: {
    alignSelf: 'center'
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },

})

export {styles};