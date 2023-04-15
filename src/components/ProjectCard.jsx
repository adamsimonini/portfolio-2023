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
    <Col xs={12} md={12} lg={6} xl={4} className="card-column">
      <div
        style={{
          maxWidth: "500px",
          alignItems: "center",
        }}
        className="card card-grid"
      >
        <div className="card-image">
          <LazyLoadImage
            loading="lazy"
            variant="top"
            // fallback image if none loads
            src={`${image ? image : placeholder}`}
            // src={`${useAssets(project.photoName)}`}
            alt={project.name}
            style={{
              height: "300px",
              borderRadius: "10px",
              maxWidth: "100%",
            }}
          />
        </div>

        {/* <div style={{ textAlign: "left" }}> */}
        <div className="card-title">
          <h3 style={{ fontSize: "30px" }}>{project.name}</h3>
        </div>
        <div className="card-description">
          <span>{project.description}</span>
        </div>
        {/* </div> */}
        <div style={{ positon: "relative" }} className="card-links">
          <a href={project.githubLink} target="_blank">
            <Button primary className="text-2xl br-10 m-1">
              See the code
            </Button>
          </a>
          <a href={project.liveLink} target="_blank">
            <Button primary className="text-2xl br-10 m-1">
              See the app
            </Button>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
