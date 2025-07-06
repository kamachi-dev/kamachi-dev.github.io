import {
    NavLink
} from 'react-router-dom';
import '../styles/components/Navigation.css';

interface Props {
    items: string[][]
}

function Navigation({ items }: Props) {
    return (
        <nav className='navigation'>
            <ul className='rainbowItems'>
                {items.map(([label, link]) =>
                    <li key={label} className='rainbowItems-border fade_in'>
                        <div className='rainbowItems-content'>
                            <NavLink className='navigation-link' to={link}>
                                <img src={`/assets/images${link == '/' ? '/home' : link}.png`} className='navigation-icon' />
                                <p className='navigation-label'>{label}</p>
                            </NavLink>
                        </div>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation