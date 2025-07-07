import {
    PanelList
} from '../components'

function Contacts() {
    const items : [React.ReactElement, string][] = [
        [
            <img className='contact-logo' src='/assets/images/discord.png' alt='discord'/>
        , 'https://discordapp.com/users/_man'],
        [
            <img className='contact-logo' src='/assets/images/facebook.png' alt='facebook'/>
        , 'https://www.facebook.com/AngeloKamachi'],
        [
            <img className='contact-logo' src='/assets/images/github.png' alt='github'/>
        , 'https://github.com/kamachi-dev'],
        [
            <img className='contact-logo' src='/assets/images/linkedin.png' alt='linkedin'/>
        , 'https://www.linkedin.com/in/angelo-justine-kamachi-353857309'],
        [
            <img className='contact-logo' src='/assets/images/email.png' alt='gmail'/>
        , 'mailto:Angelo.kamachi03@gmail.com'],
    ]
    return(
        <>
            <PanelList items={items} />
        </>
    )
}

export default Contacts