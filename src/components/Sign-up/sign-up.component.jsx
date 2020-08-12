import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custom-button.component';
import {auth ,createUserProfileDocument} from '../../firebase/firebase.util';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
           displayName:'',
           email:'' ,
           password :'',
           confirmPassword : '',
        }
    }

    handleSubmit= async event =>{
        event.preventDefault();
 
        const {displayName,email,password ,confirmPassword }=this.state;
        if(password!==confirmPassword){
            alert("passwords don't match " );
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            user.updateProfile({
                displayName:displayName ,
            });
             createUserProfileDocument(user );
          
            user.updateProfile({
                displayName:displayName ,
            });
           this.setState({
            displayName:'',
            email:'' ,
            password :'',
            confirmPassword : '',
           })
        }catch(error){
            console.log(error);
        }

    }
    handleChange = event => {
        const {name,value}=event.target;
        this.setState({ [name] :value});
    }
render (){
    return(
        <div className="sign-up">
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>

            <FormInput label='Display Name'type='text' handleChange={this.handleChange} name='displayName' value={this.state.displayName} required />
            <FormInput label='Email'type='email' handleChange={this.handleChange} name='email' value={this.state.email} required />
            <FormInput label='Password'type='password' handleChange={this.handleChange} name='password' value={this.state.password} required />
            <FormInput label='Confirm Password'type='password' handleChange={this.handleChange} name='confirmPassword' value={this.state.confirmPassword} required />
            <CustomButton  type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

}

export default SignUp;