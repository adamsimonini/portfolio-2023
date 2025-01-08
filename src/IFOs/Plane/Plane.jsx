import React, { useEffect, useRef } from "react";
import PlaneImage from "@images/plane-1.svg";
import "./styles.css";
import styled, { css, keyframes } from "styled-components";
import { planeStyles, planeClassName } from "./script.js";

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

const PlaneWrapper = styled.div`
  position: absolute;
  img {
    width: 100%;
  }
`;

function Plane({ plane, onRemove }) {
  const planeRef = useRef(null);

  useEffect(() => {
    const node = planeRef.current;
    if (!node) return;

    const handleAnimationEnd = () => {
      onRemove(plane.id);
    };

    node.addEventListener("animationend", handleAnimationEnd);

    return () => {
      node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [plane, onRemove]);

  return (
    <PlaneWrapper
      ref={planeRef}
      className={planeClassName(plane)}
      style={planeStyles(plane)}
    >
      <img src={PlaneImage} alt="Plane" />
    </PlaneWrapper>
  );
}

export default Plane;
