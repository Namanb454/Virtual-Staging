// import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth, GoogleButton } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Layout/Header'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)


export default function Login() {
    const navigate = useNavigate();
    const [session, setSession] = useState(null)
    // supabase.auth.signInWithOAuth({
    //     provider: 'google',
    // })

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])


    if (!session) {
        return (<div className='mx-auto bg-black bg-cover h-'
            style={{
                backgroundImage: 'url("home/BedroomB.jpg")'
            }}
        >
            <div className='backdrop-blur-sm lg:pt-[7vh] pt-[3vh]'>
                <Header />
            </div>
            <div className='backdrop-blur-md backdrop-brightness-100 lg:px-[30%] px-[10%] lg:py-[5%] py-[20%] h-screen'>
                <Auth supabaseClient={supabase} appearance={{
                    theme: ThemeSupa,
                    style: {
                        button: { backgroundColor: '#081d27', color: 'white', fontFamily: 'SanAntycs', fontSize: '', borderRadius: '100px', borderColor: 'white' },
                        anchor: { color: '#013147c9', fontFamily: 'SanAntycs', fontWeight: '900' },
                        label: { color: '#013147c9', fontFamily: 'SanAntycs', fontWeight: '900' },
                        input: { color: '#013147c9', fontFamily: 'SanAntycs' },
                    },
                    variables: {
                        sign_in: {
                            email_label: 'Your email address',
                            password_label: 'Your strong password',
                            colors: {
                                brand: 'white',
                                brandAccent: 'darkred',
                            },
                        },
                        default: {
                            colors: {
                                brand: 'white',
                                brandAccent: 'darkred',
                            },
                        },
                    },
                }}
                    // theme="dark"
                    providers={['google']} />
            </div>
        </div>
        )
    }
    else {
        navigate('/');
    }
}