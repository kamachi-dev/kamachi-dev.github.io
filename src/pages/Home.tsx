import {
    useEffect,
    useState
} from 'react'
import {
    Divider,
    PanelList
} from '../components'
import { ReactSketchCanvas } from "react-sketch-canvas";
import './Home.css';
function Home() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    useEffect(() => {
        const role_list = [
            'a machine learning engineer',
            'a full stack developer',
            'a unity developer',
            'a 3d artist'
        ]
        let char = 0
        setDisplayed('')
        const typing = setInterval(() => {
            setDisplayed(role_list[roleIndex].slice(0, char++))
            if (char === role_list[roleIndex].length + 1) {
                clearInterval(typing)
                setTimeout(() => {
                    setRoleIndex((prev) => (prev + 1) % role_list.length)
                }, 1000)
            }
        }, 20);
        return () => clearInterval(typing);
    }, [roleIndex])
    const summary: [React.ReactElement, string][] = [
        [<>
            <h1>Education</h1>
            <ul>
                <li>Preschool : Agustinan School of Cabuyao</li>
                <li>Elementary : Dominican Colleges of Laguna</li>
                <li>Junior High : Dominican Colleges of Laguna</li>
                <li>Senior High : Mapua Malayan Colleges of Laguna</li>
                <li>College : Mapua Malayan Colleges of Laguna</li>
            </ul>
        </>, '/education'],
        [<>
            <h1>Skills</h1 >
            <ul>
                <li>Front End : HTML, CSS, React, Typescript</li>
                <li>Back End : PHP, ASPX</li>
                <li>Game Dev : C#</li>
                <li>Machine Learning : Python</li>
                <li>Database : SQL</li>
            </ul>
        </>, '/skills'],
        [<>
            <h1>Projects</h1>
            <ul>
                <li>Soft Eng : Facial Recognition based Attendance tracking</li>
                <li>Thesis : Undecided</li>
            </ul>
        </>, '/projects']
    ]
    return (
        <>
            <section className="video-section home-section">
                <div className="info">
                    <h1 className='info-hello'>Hello!</h1>
                    <h2 className='info-name'>My name is Kamachi</h2>
                    <p className='info-roles' id="roles">
                        {displayed}<span className='cursor'>|</span>
                    </p>
                </div>
                <div className="video-container">
                    <video src="/assets/videos/montage.mp4" autoPlay loop muted playsInline></video>
                </div>
            </section>
            <Divider />
            <section className='home-section'>
                <h1>Summary</h1>
                <PanelList items={summary} />
            </section>
            <Divider />
            <section className='home-section'>
                <h1>Visitor Canvas</h1>
                <p>Each visitor is entitled to freely draw on this canvas</p>
                <p>Note: This is public</p>
                <ReactSketchCanvas
                    className='canvas'
                    width='100%'
                    height='calc(100dvh - 104px)'
                    strokeWidth={4}
                    strokeColor="#000000"
                    canvasColor="#ffffff"
                />
            </section>
            <Divider />
        </>
    )
}

export default Home