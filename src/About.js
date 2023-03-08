import jiaPortrait from './img/jia-portrait.jpg'

const About = () => {
    return (
        <div className="about">
            <img src= { jiaPortrait } alt="" className="about-img" />
            <div className="about-desc">
                <h1>About Jia</h1>
                <p>Jia is software engineer by day, astrophotography by night, mainly because that is the only time he can see the stars. 
                    Jia currently resides in the Bay Area with his wife and two daughters. His other photographic subjects include birds, 
                    nature, city landscapes, and his family.
                </p>
            </div>
        </div>

     );
}
 
export default About;