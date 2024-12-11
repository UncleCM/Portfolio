
import React from "react";

const projects = [
    { title: "Project One", description: "Description for project one." },
    { title: "Project Two", description: "Description for project two." },
    { title: "Project Three", description: "Description for project three." }
];

function ProjectDisplay() {
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectDisplay;