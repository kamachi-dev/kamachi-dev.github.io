// packages
import {
    useEffect,
    useState
} from 'react'
import type {
    User
} from '@supabase/supabase-js';

//service
import { supabase } from './client';

async function logIn() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    });
    if (error) console.error(error.message);
}

export default function Test() {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error fetching user:", error.message);
            }
            setUser(data.user);
        };
        fetchUser();
    }, []);

    return (
        <>
            <button onClick={logIn}>Sign in with Google</button>
            <h1>{`${user?.email}`}</h1>
            <img src={`${user?.user_metadata?.avatar_url}`} />
        </>
    );
}
