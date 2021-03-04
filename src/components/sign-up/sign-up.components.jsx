import React from 'react';

// components
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

// firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// stylesheet
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // functions
    handleSubmit = async event => {
        // prevent the default
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        // if passwords match, if they don't match than we don't want to proceed
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            // creates a new user associated with the specified email address and password
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }
    
    

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return(

            <div className="sign-up">

                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Name' required />

                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />

                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />

                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;