import React, { useState, useEffect } from "react";
import placeholder from "@images/portfolio-pieces/placeholder.png";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Col from "react-bootstrap/Col";

function ProjectCard({ project }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(
          `@images/portfolio-pieces/${project.photoName.toLowerCase()}.png`
        );
        setImage(importedImage.default);
      } catch (error) {
        console.error(error);
      }
    };

    loadImage();
  }, []);

  const Button = styled.button`
    background-color: white;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 5px;
  `;

  return (
    <Col xs={12} md={6} lg={4} className="card">
      <div
        style={{
          maxWidth: "500px",
          height: "600px",
          margin: "10px 0",
          alignItems: "center",
        }}
      >
        <LazyLoadImage
          loading="lazy"
          variant="top"
          // fallback image if none loads
          src={`${image ? image : placeholder}`}
          // src={`${useAssets(project.photoName)}`}
          alt={project.name}
          style={{ minWidth: "300px", height: "300px", borderRadius: "10px" }}
        />

        <div style={{ textAlign: "left" }}>
          <h3>{project.name}</h3>
          <span>{project.description}</span>
        </div>
        <div style={{ positon: "relative" }}>
          <a href={project.githubLink} target="_blank">
            <Button primary className="text-2xl br-10">
              See the code
            </Button>
          </a>
          <a href={project.liveLink} target="_blank">
            <Button primary className="text-2xl br-10">
              See the app
            </Button>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
