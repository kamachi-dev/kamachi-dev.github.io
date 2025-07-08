// packages
import {
    BrowserRouter
} from 'react-router-dom';
import {
    useMediaQuery
} from 'react-responsive';

// tsx
import {
    Portrait,
    Landscape
} from './layouts';
import Routing from './Routing';

//styles
import './styles/App.css';
import { Header, Footer } from './components';

export default function App() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (
        <>
            <BrowserRouter basename='https://kamachi-dev.github.io'>
                {
                    isPortrait ?
                        <Portrait header={<Header />} footer={<Footer />} routes={<Routing />} /> :
                        <Landscape header={<Header />} footer={<Footer />} routes={<Routing />} />
                }
            </BrowserRouter>
        </>
    );
}
