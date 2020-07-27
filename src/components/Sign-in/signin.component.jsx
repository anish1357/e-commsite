import React from 'react';
import './signin.styles.scss';
import FormInput  from '../form-input/form-input.component';
import CustomButton from '../custombutton/custom-button.component'
import {Link} from 'react-router-dom'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email :'',
            password:''
        }
    }

    handleSubmit = (event) =>{
             event.preventDefault();
      this.setState({ email: '', password: '' })       
    }
    
    handleChange = (event) =>{
        const {value,name} =event.target;

        this.setState({ [name]:value});
    }
    render(){
        return(
            <div className="sign-in signstyle">
                <h2 className='heading'>I already have an account </h2>
                <span className='span1'>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label='Email'type='email' handleChange={this.handleChange} name='email' value={this.state.email} required />
                
                <FormInput label='Password'type='password' handleChange={this.handleChange} name='password' value={this.state.password} required />
                <CustomButton type='submit' value ="Submit Form">Sign In</CustomButton>
                <br/><br/>
                <Link className="Register" to='/signup'>REGISTER</Link>
            </form>
            </div>
        );
    }
}

export default SignIn;