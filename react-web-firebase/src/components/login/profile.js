import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from './db';
import { addItem } from './dataService';

class LoginBox extends React.Component {
constructor(props) {
    super(props);
   this.handleEmailChange = this.handleEmailChange.bind(this);
   this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
   this.handleLastNameChange = this.handleLastNameChange.bind(this);
   this.handleComapnyChange = this.handleComapnyChange.bind(this);
   this.handlePositionChange = this.handlePositionChange.bind(this);
   this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
   this.submit = this.submit.bind(this);
    this.state = {
      email : '',
      firstname: '',
      lastname: '',
      company:'',
      position:'',
      department:'',
      userData: []
    };
  }
  handleEmailChange(e) {
    var email=e.target.value;
    this.setState({
       email: email
     });
  }
  handlefirstNameChange(e) {
    var firstname=e.target.value;
    this.setState({
       firstname: firstname
     });
  }
  handleLastNameChange(e) {
    var lastname=e.target.value;
    this.setState({
       lastname: lastname
     });
  }
  handleComapnyChange(e) {
    var company=e.target.value;
    this.setState({
       company: company
     });
  }
  handlePositionChange(e) {
    var position=e.target.value;
    this.setState({
       position: position
     });
  }
  handleDepartmentChange(e) {
    var department=e.target.value;
    this.setState({
       department: department
     });
  }
  submit(){
    const{email,firstname,lastname,company,position,department} = this.state;
         if(firstname !== "" && lastname !== "" && company !== "" && department !== "" && position !== "" && email !== ""){
             addItem(firstname,lastname,company,department,position,email);
         }
         else{
             alert("enter all fields")
         }
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
        <TextField
           id='textFieldId'
           placeholder='firstname'
           value={this.state.value}
           onChange={this.handlefirstNameChange.bind(this)}
        />
        <TextField
          id='textFieldId'
          placeholder='lastname'
          value={this.state.value}
          onChange={this.handleLastNameChange.bind(this)}
        />
        <TextField
          id='textFieldId'
          placeholder='company'
          value={this.state.value}
          onChange={this.handleComapnyChange.bind(this)}
        />
        <TextField
          id='textFieldId'
          placeholder='position'
          value={this.state.value}
          onChange={this.handlePositionChange.bind(this)}
        />
        <TextField
          id='textFieldId'
          placeholder='department'
          value={this.state.value}
          onChange={this.handleDepartmentChange.bind(this)}
        />
        <RaisedButton
          label='submit'
          onClick={this.submit}
        />
        </div>

    );
  }
}

export default LoginBox;
