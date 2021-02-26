import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView } from 'react-native';
import {createAppContainer,createSwitcthNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import db from '../config'
import SantaAni from '../component/santa';

export default class LoginScreen extends React.Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }
  SignIN = async(email,password)=>{
  if(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      return Alert.alert("Successfully Logged in")
    }).catch((error)=>{
      return Alert.alert(error.code)
    })
  }else {
    Alert.alert("Enter email and Password");
  }
  }
  render(){
  return (
    <KeyboardAvoidingView behavior={'padding'} enabled>
    <View style={styles.container}>
    <SantaAni />
    <TextInput
    style={styles.input}
    placeholder={"Enter Email Here"}
    onChangeText={(text)=>{this.setState({email:text})}}   
    value={this.state.email}
    />
    <TextInput 
    style={styles.input}  
    placeholder={"Enter Password Here"}
    onChangeText={(text)=>{this.setState({password:text})}}   
    value={this.state.password}
    />
    <TouchableOpacity style={styles.button} 
    onPress={()=>{this.SignIN(this.state.email,this.state.password)}}><Text>Sign IN</Text></TouchableOpacity>
    <TouchableOpacity style={[styles.button,{marginTop:20}]}><Text>Sign UP</Text></TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'red',
    width:70,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    width:100,
    height:30,
    color:'black',
    marginBottom:10,
    borderWidth:1,
    borderColor:'black'
  }
});