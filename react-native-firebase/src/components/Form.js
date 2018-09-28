import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';
import { db } from '../pages/db';
let itemsRef = db.ref('/userData');

export default class Logo extends Component {
    constructor(props){
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.onAuth = this.onAuth.bind(this);
        this.state = {
            email:'',
            snapshot: []
        };
    }

    handleEmail(text){
        this.setState({
            email:text
        })
    }

    onAuth(){
        const{email} = this.state;
        itemsRef.orderByChild("email").equalTo(email).on("value", function(snapshot) {
            this.setState({snapshot});
            Actions.home(this.state.snapshot)
        });
    }

	render(){
		return(
		    <View style={styles.container}>
                  <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Email"
                      placeholderTextColor = "#ffffff"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onChangeText={this.handleEmail}
                      />
                  <TouchableOpacity style={styles.button}>
                     <Text style={styles.buttonText} onPress={this.onAuth}>{this.props.type}</Text>
                  </TouchableOpacity>
  		    </View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  }
  
});