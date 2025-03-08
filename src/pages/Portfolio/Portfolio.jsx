// Import dependencies
import Project from '../../Project/Project';
import './Portfolio.css';

function Portfolio() {
    // Array of project data
    const projects = [
        {
            title: "Project 1",
            image: "/path-to-image1.jpg",
            deployedUrl: "https://deployed-site1.com",
            githubUrl: "https://github.com/yourusername/project1",
            description: "Brief description of project 1"
        },
        // Add more project objects here
    ];

    return (
        <section className="portfolio">
            <h2>My Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Project 
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedUrl={project.deployedUrl}
                        githubUrl={project.githubUrl}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;