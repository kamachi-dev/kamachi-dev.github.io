import { useInView } from 'react-intersection-observer'

interface Props {
    items: [React.ReactElement, string][]
}

function PanelList({ items }: Props) {
    const [ref, inView] = useInView({ threshold: 1 })
    return (
        <ul className='rainbowItems' ref={ref}>
            {items.map(([html, link]) =>
                <li className={'rainbowItems-border ' + (inView ? 'show' : 'hide')}>
                    <div className='rainbowItems-content'><a href={link}>{html}</a></div>
                </li>
            )}
        </ul>
    )
}

export default PanelList