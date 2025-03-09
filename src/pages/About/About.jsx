// Import dependencies and styles
import '/src/pages/About/About.css';
import profileImage from '/src/assets/bleh.jpg';

function About() {
    return (
        <section className="about">
            <div className="profile-image">
                <img src={profileImage} alt="Kassandra Peasley" />
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    Becoming more is simply an act of doing more. Let's do better together.
                </p>
                <p>
                    Welcome! I'm Kassandra, a full-stack web developer passionate about 
                    creating responsive and user-friendly applications. I strive to bring a unique perspective to every project.
                </p>
            </div>
        </section>
    );
}

export default About;