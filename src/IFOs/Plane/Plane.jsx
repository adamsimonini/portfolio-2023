import React, { useEffect, useRef } from "react";
import PlaneImage from "@images/plane-1.svg";
import "./styles.css";
import { planeStyles, planeClassName } from "./script.js";

function Plane({ plane, onRemove }) {
  const planeRef = useRef(null);

  useEffect(() => {
    const node = planeRef.current;
    if (!node) return;

    const handleAnimationEnd = () => onRemove(plane.id);
    node.addEventListener("animationend", handleAnimationEnd);
    return () => node.removeEventListener("animationend", handleAnimationEnd);
  }, [plane, onRemove]);

  return (
    <div
      ref={planeRef}
      className={planeClassName(plane)}
      style={planeStyles(plane)}
    >
      <img src={PlaneImage} alt="" className="w-full" />
    </div>
  );
}

export default Plane;
