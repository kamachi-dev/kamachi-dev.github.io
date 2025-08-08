import { useEffect } from 'react';
import {
    Divider,
    PanelList
} from '../components'

function Contacts() {
    const items: [React.ReactElement, string][] = [
        [
            <img className='contact-logo' src='/assets/images/discord.png' alt='discord' />
            , 'https://discordapp.com/users/_man'],
        [
            <img className='contact-logo' src='/assets/images/facebook.png' alt='facebook' />
            , 'https://www.facebook.com/AngeloKamachi'],
        [
            <img className='contact-logo' src='/assets/images/github.png' alt='github' />
            , 'https://github.com/kamachi-dev'],
        [
            <img className='contact-logo' src='/assets/images/linkedin.png' alt='linkedin' />
            , 'https://www.linkedin.com/in/angelo-justine-kamachi-353857309'],
        [
            <img className='contact-logo' src='/assets/images/email.png' alt='gmail' />
            , 'mailto:Angelo.kamachi03@gmail.com'],
    ]
    useEffect(() => {
        document.getElementById("content")?.classList.add("flex-content");
        return () => {
            document.getElementById("content")?.classList.remove("flex-content");
        }
    }, []);
    return (
        <>
            <section className='message-form'>
                <h1 className='message-title'>Quick Contact</h1>
                <div className='message-container'>
                    <div className='message sender'>
                        <img className='message-pfp' src='/assets/images/contacts.png' alt='you' />
                        <p className='message-text'>For further inquiries, please message below. Expect a reply within a day, thank you.</p>
                    </div>
                    <div className='message reciever'>
                        <img className='message-pfp' src='/assets/images/contacts.png' alt='you' />
                        <p className='message-text'>Test2</p>
                    </div>
                </div>
                <input className='message-textbox' placeholder='Good day, I...' />
            </section>
            <Divider />
            <section>
                <PanelList items={items} />
            </section>
        </>
    )
}

export default Contacts