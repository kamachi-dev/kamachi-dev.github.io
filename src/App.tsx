// packages
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import type { User } from '@supabase/supabase-js';

// tsx
import Routing from './Routing';
import { Portrait, Landscape } from './layouts';
import { AppContext } from "./AppContext";

//styles
import './styles/App.css';
import { Header, Footer } from './components';
import { useEffect, useState } from 'react';
import { supabase } from './services/client';

export default function App() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const [user, setUser] = useState<User | null>(null)

    async function getUser() {
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
        console.log(await supabase.functions.invoke('getMessages', {
            body: { name: 'Functions' }
        }));
        supabase.functions.invoke('registerUser', {
            body: {
                name: data.user?.user_metadata?.full_name,
                email: data.user?.email,
                avatar_url: data.user?.user_metadata?.avatar_url,
            }
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
