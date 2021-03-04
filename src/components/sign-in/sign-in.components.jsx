import React from 'react';

// components
import FormInput from '../form-input/form-input.components.jsx';
import CustomButton from '../custom-button/custom-button.components.jsx';

//firebase 
import { signInWithGoogle } from '../../firebase/firebase.utils';

// stylesheet
import './sign-in.styles.scss';


// class component (beacuse we need to store what the user is typing in)
class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

        handleSubmit = event => {
            event.preventDefault();

            this.setState({email: '', password: ''});
        }

        handleChange = event => {
            const { value, name } = event.target;

            this.setState({ [name]: value });
        }

        render(){
            return(
                <div className="sign-in">
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                        
                        <FormInput name="password" type="password" value={this.state.email} handleChange={this.handleChange} label="password" required />
                        
                        <div className="buttons">
                            <CustomButton type="submit" >Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                        </div>

                    </form>
                </div>
            )
        };
    
}

export default SignIn;