import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import vueHousingImg from "../assets/images/portfolio-pieces/vue-housing.png";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useAssets from "@/compostables/useAssets";

function ProjectCard({ project }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(
          `../assets/images/portfolio-pieces/${project.photoName}.png`
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
    <>
      <Card style={{ maxWidth: "400px" }}>
        <LazyLoadImage
          loading="lazy"
          variant="top"
          // fallback image if none loads
          src={`${image ? image : vueHousingImg}`}
          // src={`${useAssets(project.photoName)}`}
          alt={project.name}
          style={{ maxWidth: "400px", height: "300px", borderRadius: "10px" }}
        />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
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
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
