import {
    useInView
} from 'react-intersection-observer'
import '../styles/components/RatioBar.css';

interface Props {
    val: number
}

function RatioBar({ val }: Props) {
    const [ref, inView] = useInView({ threshold: 1 })
    return (
        <div className='ratio-shell' ref={ref}>
            <div className='ratio-kernel' style={{ width: `${inView ? val : 0}%` }}></div>
        </div>
    )
}

export default RatioBar