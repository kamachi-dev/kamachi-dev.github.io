import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import {
    Home,
    Education,
    Skills,
    Contacts,
    LogIn
} from '../pages';

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes >
    );
}