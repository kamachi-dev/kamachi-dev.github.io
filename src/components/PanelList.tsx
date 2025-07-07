import { useInView } from 'react-intersection-observer'
import '../styles/components/PanelList.css';


interface Props {
    items: [React.ReactElement, string][]
}

function PanelList({ items }: Props) {
    const elems = items.map(([html, link]) => {
        const [ref, inView] = useInView({ threshold: 0.8 });
        return (
            <li ref={ref} className={'rainbowItems-border ' + (inView ? 'show' : 'hide')}>
                <img src='/assets/images/link.png' alt='link' className={'panel-link ' + ((link == '') ? 'hidden' : 'show')} />
                <div className='rainbowItems-content'><a href={link}>{html}</a></div>
            </li>
        );
    });
    return (
        <ul className='rainbowItems'>
            {elems}
        </ul>
    )
}

export default PanelList