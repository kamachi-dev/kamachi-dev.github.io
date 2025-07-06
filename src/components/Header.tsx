import '../styles/components/Header.css';

import { Navigation } from './index';

function Header() {
    const items = [
        ['Home', '/'],
        ['Education', '/education'],
        ['Skills', '/skills'],
        ['Other Skills', '/other'],
        ['Projects', '/projects'],
        ['Contacts', '/contacts']
    ];

    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-logoContainer'>
                    <a href='/'><img className='header-logo' src='/assets/images/logo.png' alt='Logo' /></a>
                </div>
                <Navigation items={items} />
            </div>
        </header>
    );
}
export default Header;