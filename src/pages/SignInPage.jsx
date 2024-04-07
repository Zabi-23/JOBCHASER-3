import React from 'react';
import { Link } from 'react-router-dom'; // Importera Link här
import SignInForm from './SignInForm';

function SignInPage() {
    return (
        <div>
            <h2>Sign In Page</h2>
            <SignInForm />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                <Link to="/" style={{ marginLeft: 'auto' }}>Back to Home</Link>
            </div>
        </div>
    );
}

export default SignInPage;




 








