import React from 'react';

// stylesheet
import './sign-in-and-sign-up.styles.scss';

// components
import SignIn from '../../components/sign-in/sign-in.components';

// functional component
const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;