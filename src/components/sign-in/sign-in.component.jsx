import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor() {
        super ();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password:''})

    }

    handleChange = (event) => {
        const{value, name} = event.target;
        this.setState({[name]: value})
    }

    // native form tag was replaced by a modified form component- to style it further
    // label was also modified and replaced

    render() {
        return(
            <div className = 'sign-in'>
             <h2> I already have an account</h2>
             <span>Sign in with your email and password</span>

             <form onSubmit ={this.handleSubmit} >
                <FormInput 
                name = "email" 
                type = "email" 
                handleChange = {this.handleChange}  
                value = {this.state.email} 
                label = " email"
                required />
                
                <FormInput 
                name = "password" 
                type = "password" 
                value = {this.state.password} 
                handleChange = {this.handleChange}
                label = "password"
                required />
                
                <div className = 'buttons'>
                <CustomButton type='submit'>Sign In </CustomButton>
                <CustomButton onClick= {signInWithGoogle} isGoogleSignIn  >Sign in with Google</CustomButton>

                </div>

                
             </form>
            </div>
        )
    }


}

export default SignIn;