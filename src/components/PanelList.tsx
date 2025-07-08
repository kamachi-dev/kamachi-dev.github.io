import {
    useInView
} from 'react-intersection-observer';
import '../styles/components/PanelList.css';
import {
    NavLink
} from 'react-router-dom';


interface Props {
    items: [React.ReactElement, string][]
}

function PanelListItem({ html, link }: { html: React.ReactElement, link: string }) {
    const [ref, inView] = useInView({ threshold: 0.8 });
    return (
        <li ref={ref} className={'rainbowItems-border ' + (inView ? 'show' : 'hide')}>
            <img src='/assets/images/link.png' alt='link' className={'panel-link ' + ((link == '') ? 'hidden' : 'show')} />
            <div className='rainbowItems-content'><NavLink to={link == '' ? 'javascript: void(0)' : link}>{html}</NavLink></div>
        </li>
    );
}

function PanelList({ items }: Props) {
    return (
        <ul className='rainbowItems'>
            {items.map(([html, link], idx) => (
                <PanelListItem key={idx} html={html} link={link} />
            ))}
        </ul>
    )
}

export default PanelList