import './Footer.css';
import { AppContext } from "../contexts/AppContext";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function AppFooter() {
    const { user } = useContext(AppContext);
    return (
        <footer className='footer'>
            <NavLink to='/login' className='footer-link'>
                <p className='footer-text'>
                    &copy; 2025 Kamachi Dev. All rights reserved.
                </p>
                <div className='footer-account'>
                    <p className='footer-username'>{`${user?.user_metadata?.full_name ?? 'guest'}`}</p>
                    <img className='footer-pfp' src={user?.user_metadata?.avatar_url ?? 'assets/images/placeholder_pfp.png'} alt='pfp' />
                </div>
            </NavLink>
        </footer>
    );
}
export default AppFooter;