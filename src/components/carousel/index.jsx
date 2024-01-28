import React, { useEffect, useState } from "react";
import { AreaComponentImage } from "./styled";
import Kratos from "../../Assets/kratos.png";
import Bluedemon from "../../Assets/bluedemon.png";
import Apocalypse from "../../Assets/apocalypse.png";

function ComponentImage() {
  const [leftPosition, setLeftPosition] = useState("100%");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftPosition((prevPosition) => {
        return prevPosition === "100%"
          ? "0%"
          : prevPosition === "0%"
          ? "-100%"
          : "100%";
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AreaComponentImage>
      <div className="component_image" style={{ left: leftPosition }}>
        <img id="first_image" src={Kratos} alt="Kratos" />
        <img src={Bluedemon} alt="Bluedemon" />
        <img src={Apocalypse} alt="Apocalypse" />
      </div>
    </AreaComponentImage>
  );
}

export default ComponentImage;
