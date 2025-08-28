// packages
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import type { User } from '@supabase/supabase-js';

// tsx
import Routing from './routing';
import { Portrait, Landscape } from './components/layouts';
import { AppContext } from "./contexts/AppContext";

//styles
import './styles/App.css';
import { Header, Footer } from './components';
import { useEffect, useState } from 'react';
import { supabase } from './services/client';

export default function App() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const [user, setUser] = useState<User | null>(null)

    async function getUser() {
        const { data: user_data } = await supabase.auth.getUser();
        const { data: session_data } = await supabase.auth.getSession();
        setUser(user_data.user);
        console.log(await supabase.functions.invoke('getMessages', {
            headers: { 'Authorization': `Bearer ${session_data.session?.access_token}` },
            body: { name: 'Functions' }
        }));
        supabase.functions.invoke('registerUser', {
            headers: { 'Authorization': `Bearer ${session_data.session?.access_token}` }
        });
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <AppContext.Provider value={{
            user: user
        }}>
            <BrowserRouter>
                {
                    isPortrait ?
                        <Portrait header={<Header />} footer={<Footer />} routes={<Routing />} /> :
                        <Landscape header={<Header />} footer={<Footer />} routes={<Routing />} />
                }
            </BrowserRouter>
        </AppContext.Provider>
    );
}
