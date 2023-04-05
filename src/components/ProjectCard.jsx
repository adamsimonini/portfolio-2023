import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import vueHousingImg from "../assets/images/portfolio-pieces/vue-housing.png";
import styled from "styled-components";

function ProjectCard({ project }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(
          `../assets/images/portfolio-pieces/${project.photoName}`
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
      <Card style={{ maxWidth: "50" }}>
        <Card.Img loading="lazy" variant="top" src={image} alt={project.name} />
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
      {/* <div className="img-box flex justify-center relative overflow-hidden">
        <img src={data.img} alt="" />
        <p>this is test text</p> */}
      {/* <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default ProjectCard;
