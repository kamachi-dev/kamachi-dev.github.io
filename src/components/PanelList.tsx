import { useInView } from 'react-intersection-observer'
import '../styles/components/PanelList.css';


interface Props {
    items: [React.ReactElement, string][]
}

function PanelList({ items }: Props) {
    const [ref, inView] = useInView({ threshold: 1 })
    return (
        <ul className='rainbowItems' ref={ref}>
            {items.map(([html, link]) =>
                <li className={'rainbowItems-border ' + (inView ? 'show' : 'hide')}>
                    <img src='/assets/images/link.png' alt='link' className={'panel-link ' + ((link == '') ? 'hidden' : 'show')} />
                    <div className='rainbowItems-content'><a href={link}>{html}</a></div>
                </li>
            )}
        </ul>
    )
}

export default PanelList