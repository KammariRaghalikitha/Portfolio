import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Object detection"
              description="Developed a real-time object detection system using advanced image processing techniques. The system captures live video feed from a camera, processes the frames, and identifies various objects. It provides real-time feedback on detected objects with high accuracy, using algorithms like YOLO (You Only Look Once) or OpenCV for object recognition."
              ghLink="https://github.com/KammariRaghalikitha/Real-Time-Object-Detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Brain tumor detection"
              description="Developed a system that applies machine learning techniques to analyze EEG data for the early detection of brain tumors. By processing and classifying EEG signals, the model accurately identifies patterns associated with brain tumors, enabling faster diagnosis. This project utilized various machine learning algorithms to enhance detection accuracy and improve the reliability of EEG-based medical diagnostics."
              ghLink="https://github.com/KammariRaghalikitha/An-Improved-System-for-Brain-Pathology-Using-Deep-Learning-"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ecommerce"
              description="Developed a web application with a responsive UI using HTML, CSS, and JavaScript. The back-end, built with Java and JSP, handles server-side logic, while SQL manages product and transaction data. Secure user authentication for login/registration and dynamic UI elements enhance the user experience."
              ghLink="https://github.com/KammariRaghalikitha/Ecommerce-website"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dynamic form generator"
              description="This project allows users to create dynamic, styled forms in real-time using a JSON schema. It features a JSON editor and a live form preview, enabling instant visualization as users modify the schema. Built with JavaScript and Node.js, the app is highly customizable, supporting dynamic addition or removal of form fields to simplify form creation for developers and users."
              ghLink="https://github.com/KammariRaghalikitha/Dynamic-form-generator"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
