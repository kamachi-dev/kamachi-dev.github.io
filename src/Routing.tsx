import {
    Routes,
    Route
} from 'react-router-dom';
import {
    Home,
    Education,
    Skills
} from './pages';

export default function Routing() {
    return (
        <Routes>
            { }
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
        </Routes>
    );
}
