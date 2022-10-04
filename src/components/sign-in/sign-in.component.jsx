import { useState } from 'react'
import signInWithGooglePopup from '../../utils/firebase'
import './sign-in.styles.css'


const SignInComponent = () => {

    const [name, setName] = useState('')

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        // console.log(response)
        setName(`, ${response.user.displayName}!`)
    }

    return (
        <div>
            <button onClick={logGoogleUser} className='signInButton'>
                Sign in with Google
            </button>
            <h3>Hello! {name}</h3>
        </div>
    )
}

export default SignInComponent
