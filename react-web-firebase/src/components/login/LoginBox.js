import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from './db';
import Profile from './profile';
let itemsRef = db.ref('/userData');

class LoginBox extends React.Component {
constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      email : '',
      userData: []
    };
  }
  handleEmailChange(e) {
    var email=e.target.value;
    this.setState({
       email: email
     });
  }
  submit(){
    const{email} = this.state;
    itemsRef.orderByChild("email").equalTo(email).on("value", function(userData) {
      this.setState({
        userData:userData
      });
      <Profile userData={this.state.userData}/>
    });
  }
  render() {
    return (
        <div>
        <TextField
          id='textFieldId'
          placeholder='email'
          value={this.state.value}
          onChange={this.handleEmailChange.bind(this)}
         />
         <RaisedButton
           label='login'
           onClick={this.submit}
         />
        </div>

    );
  }
}

export default LoginBox;
