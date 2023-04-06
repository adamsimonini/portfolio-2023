import React from "react";
import PlaneImage from "@images/star.png";
import "./styles.css";
import styled, { css, keyframes } from "styled-components";

const flyingKeyframe = keyframes`
  0% {
    left: 100%;
    top: 45%;
  }

  100% {
    left: -10%;
    top: 10%;
  }
}
`;

const flightAnimation = (props) =>
  css`
    ${flyingKeyframe} ${props.animationLength} 4s linear infinite;
  `;

const FlightPath = styled.div`
  animation: ${flightAnimation};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;

function Plane(props) {
  return (
    <FlightPath>
      <div className={props.planeClassName} style={props.planeStyles}>
        <img className="ast-img" src={PlaneImage} alt="" />
      </div>
    </FlightPath>
  );
}

export default React.memo(Plane);

// Prevent unnecessary re-rendering: https://stackoverflow.com/questions/72202892/how-can-i-delete-an-item-from-list-without-re-rendering-undeleted-items

// https://styled-components.com/
