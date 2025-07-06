import type { ReactElement } from 'react'
import { Divider } from '../components'

interface Props {
    header: ReactElement,
    footer: ReactElement,
    routes: ReactElement
}

function Landscape({ header, footer, routes }: Props) {
    return (
        <>
            {header}
            <Divider />
            <div id='content'>
                {routes}
            </div>
            <Divider />
            {footer}
        </>
    )
}

export default Landscape