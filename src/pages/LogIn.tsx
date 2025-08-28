import { Canvas3D } from "../components"
import { supabase } from "../services/client";
import './LogIn.css';

export default function LogIn() {
    const handleGoogleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    prompt: 'select_account'
                }
            }
        });
        if (error) console.error(error.message);
    };

    return (
        <div className="login">
            <Canvas3D />
            <div className="login-panel">
                <section>
                    <p className="login-label">Username</p>
                    <input className="login-input" type="text" autoComplete="username" />
                    <p className="login-label">Password</p>
                    <input className="login-input" type="password" autoComplete="current-password" />
                    <button className="login-forgot">Forgot password?</button>
                    <button className="login-signin">Sign in</button>
                </section>
                <section className="providers">
                    <button className="providers-button" onClick={handleGoogleSignIn}>
                        <img className="providers-icon" src="/assets/images/google.png" alt="Google icon" />
                        <p className="providers-text">Sign in with Google</p>
                    </button>
                </section>
            </div>
        </div>
    )
}