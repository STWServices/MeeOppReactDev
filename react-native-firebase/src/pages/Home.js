import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity,
  ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { addItem } from './dataService';
import { db } from './db';
let itemsRef = db.ref('/userData');

export default class Home extends Component<{}> {
    constructor(props){
        super(props);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleDepartment = this.handleDepartment.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.submitData = this.submitData.bind(this);
        this.state = {
            firstname:'',
            lastname:'',
            company:'',
            department:'',
            position:'',
            email:'',
            snapshot: [],
        };
    }
     handleFirstName(text){
        this.setState({
            firstname:text
        })
    }
    handleLastName(text){
        this.setState({
            lastname:text
        })
    }
    handleCompany(text){
        this.setState({
            company:text
        })
    }
    handleDepartment(text){
        this.setState({
            department:text
        })
    }
    handlePosition(text){
        this.setState({
            position:text
        })
    }
    handleEmail(text){
        this.setState({
            email:text
        })
    }

    submitData(){
        const{firstname,lastname,company,department,position,email} = this.state;
        if(firstname !== "" && lastname !== "" && company !== "" && department !== "" && position !== "" && email !== ""){
            addItem(firstname,lastname,company,department,position,email);
        }
        else{
            alert("enter all fields")
        }
    }
	render() {

		return(
			<View style={styles.container}>
			    <ScrollView>
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="First Name"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handleFirstName}
                   />
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Last Name"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handleLastName}
                    />
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Company"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handleCompany}
                    />
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Department"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handleDepartment}
                    />
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Position"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handlePosition}
                    />
                   <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Email"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      onChangeText={this.handleEmail}
                   />

                   <TouchableOpacity style={styles.button} onPress={this.submitData}>
                      <Text style={styles.buttonText}>Save</Text>
                   </TouchableOpacity>

				</ScrollView>

			</View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  Hidden:{
    display:'none'
  }
});
