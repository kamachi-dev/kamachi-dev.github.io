import {
    PanelList
} from '../components'

function Contacts() {
    const items : [React.ReactElement, string][] = [
        [
            <img src='' alt='discord'/>
        , 'https://discordapp.com/users/_man'],
        [
            <img src='' alt='facebook'/>
        , 'https://www.facebook.com/AngeloKamachi'],
        [
            <img src='' alt='github'/>
        , 'https://github.com/kamachi-dev'],
        [
            <img src='' alt='linkedin'/>
        , 'https://www.linkedin.com/in/angelo-justine-kamachi-353857309'],
        [
            <img src='' alt='gmail'/>
        , 'mailto:Angelo.kamachi03@gmail.com'],
    ]
    return(
        <>
            <PanelList items={items} />
        </>
    )
}

export default Contacts