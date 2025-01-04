import React, { useEffect, useState } from "react";
import PlaneImage from "@images/plane-1.svg";
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
`;

const flightAnimation = (props) =>
  css`
    ${flyingKeyframe} ${props.animationDuration}s linear infinite;
  `;

const FlightPath = styled.div`
  animation: ${flightAnimation};
`;

function Plane({ planeClassName, planeStyles }) {
  return (
    <FlightPath animationDuration={planeStyles.animationDuration}>
      <div className={planeClassName} style={planeStyles}>
        <img className="ast-img" src={PlaneImage} alt="Plane" />
      </div>
    </FlightPath>
  );
}

export default React.memo(Plane);
