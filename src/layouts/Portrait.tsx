import type { ReactElement } from "react"
import { Divider } from '../components'

interface Props {
    header: ReactElement,
    footer: ReactElement,
    routes: ReactElement
}

function Portrait({ header, footer, routes }: Props) {
    return (
        <>
            <div id='content'>
                {routes}
            </div>
            <Divider />
            {header}
            <Divider />
            {footer}
        </>
    )
}

export default Portrait