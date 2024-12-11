import { useState } from "react";

function Project() {
    const [projects, setProjects] = useState([
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna at mauris.",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna at mauris.",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna at mauris.",
            image: "https://via.placeholder.com/150"
        }
    ]);

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projects__container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Project;