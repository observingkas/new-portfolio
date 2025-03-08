// Import dependencies
import './Project.css';

function Project({ title, image, deployedUrl, githubUrl, description }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                {/* Overlay div for hover effects */}
                <div className="project-overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-links">
                        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;