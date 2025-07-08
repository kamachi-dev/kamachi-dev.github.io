import {
    PanelList
} from '../components'
function Education() {
    const achievements: [React.ReactElement, string][] = [
        [<>
            <h5>A date with python 2023, top 2</h5>
        </>, 'https://www.facebook.com/share/p/1AmivJU6vW/'],
        [<>
            <ul>
                <li>Hackaton</li>
                <li>A date with python 2023</li>
            </ul>
        </>, 'https://www.facebook.com/share/p/1AmivJU6vW/']
    ]
    const google: [React.ReactElement, string][] = [
        [<>
            <h5>Google Cloud Skills Boost Certificates</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9831621'],
        [<>
            <h5>Prepare Data for ML APIs on Google Cloud</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9831141'],
        [<>
            <h5>Build a Secure Google Cloud Network</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9830309'],
        [<>
            <h5>Set Up an App Dev Environment on Google Cloud</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9829948'],
        [<>
            <h5>Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9808730'],
        [<>
            <h5>Google Cloud Computing Foundations: Networking & Security in Google Cloud</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9806367'],
        [<>
            <h5>Google Cloud Computing Foundations: Infrastructure in Google Cloud</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9391528'],
        [<>
            <h5>Google Cloud Computing Foundations: Cloud Computing Fundamentals</h5>
        </>, 'https://www.cloudskillsboost.google/public_profiles/8c7a8bb5-6bbf-4746-a105-1f4a540dfb3a/badges/9389339']
    ]
    return (
        <>
            <section>
                <h1>Achievements</h1>
                <PanelList items={achievements} />
            </section>
            <section>
                <h1>Google Cloud Certificates</h1>
                <PanelList items={google} />
            </section>
        </>
    )
}

export default Education