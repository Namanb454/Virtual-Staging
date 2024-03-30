import React from 'react';
// import supabase from './supabase';
// import { supabase } from '../lib/helper/Supabase';
import { supabase } from '../lib/helper/Supabase';

const Logins = () => {
    const handleGoogleSignIn = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            console.error('Google sign-in error:', error.message);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Logins;
